# Despliegue en AWS EC2 con Docker

Esta guía explica cómo publicar `dork-pro` en una instancia EC2 propia usando la imagen Docker del proyecto. Es una opción para quien quiere controlar la infraestructura. Si solo necesitas publicar el sitio, [Vercel](deployment-vercel.md) es más sencillo.

## 1. Arquitectura

```
Internet
   │  HTTP :80 (y HTTPS :443 si configuras un dominio)
   ▼
Instancia EC2 (Ubuntu)
   └── Docker
        └── contenedor dork-pro  (nginx sirviendo dist/)
```

- Un único contenedor, sin base de datos ni backend.
- El tráfico llega directamente a la instancia.
- Las llamadas al asistente de IA salen del navegador del usuario, no de la instancia.

## 2. Recursos de AWS

| Recurso | Configuración recomendada |
|---|---|
| Instancia | `t3.micro` o `t4g.micro` (suficiente para servir archivos estáticos) |
| Sistema operativo | Ubuntu Server 24.04 LTS |
| Disco | 8 GB gp3 |
| IP | Elastic IP asociada, para que la dirección no cambie al reiniciar |
| Par de claves | Uno nuevo, guardado de forma segura (`.pem`) |

### Grupo de seguridad

| Tipo | Puerto | Origen | Motivo |
|---|---|---|---|
| SSH | 22 | Tu IP (`x.x.x.x/32`) | Administración. No dejes el 22 abierto a `0.0.0.0/0`. |
| HTTP | 80 | `0.0.0.0/0` | Acceso público al sitio. |
| HTTPS | 443 | `0.0.0.0/0` | Solo si configuras HTTPS (sección 7). |

## 3. Preparar la instancia

Conéctate por SSH:

```bash
ssh -i ~/clave.pem ubuntu@<ip-elastica>
```

Instala Docker desde el repositorio oficial de Ubuntu:

```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-v2 git
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
```

Cierra la sesión SSH y vuelve a entrar para que el grupo `docker` tenga efecto. Comprueba:

```bash
docker run --rm hello-world
```

## 4. Obtener el código

Opción A, desde Git:

```bash
git clone <url-del-repositorio> dork-pro
cd dork-pro
```

Opción B, desde tu equipo (desde la raíz del proyecto en local):

```bash
rsync -av --exclude node_modules --exclude dist --exclude .git \
  ./ ubuntu@<ip-elastica>:~/dork-pro/
```

Los archivos `Dockerfile`, `nginx.conf` y `.dockerignore` deben estar en la raíz del proyecto en la instancia.

## 5. Construir y arrancar

```bash
cd ~/dork-pro
docker build -t dork-pro:latest .
docker run -d \
  --name dork-pro \
  --restart unless-stopped \
  -p 80:80 \
  dork-pro:latest
```

`--restart unless-stopped` hace que el contenedor se levante tras reiniciar la instancia.

### Con Docker Compose

Crea `docker-compose.yml` en `~/dork-pro`:

```yaml
services:
  web:
    build: .
    image: dork-pro:latest
    ports:
      - "80:80"
    restart: unless-stopped
```

Arranca con:

```bash
docker compose up -d --build
```

## 6. Actualizar la versión

Con Git:

```bash
cd ~/dork-pro
git pull
docker build -t dork-pro:latest .
docker stop dork-pro && docker rm dork-pro
docker run -d --name dork-pro --restart unless-stopped -p 80:80 dork-pro:latest
```

Con Compose, basta con `git pull && docker compose up -d --build`.

Para volver a una versión anterior, reconstruye desde el commit correspondiente con `git checkout <commit>` antes del `docker build`.

## 7. HTTPS (recomendado con dominio propio)

El contenedor sirve HTTP en el puerto 80. Para HTTPS, pon delante un proxy con certificado automático. Un ejemplo con Caddy en la propia instancia:

1. Apunta un registro DNS `A` de tu dominio a la Elastic IP.
2. Instala Caddy desde su repositorio oficial.
3. Cambia el contenedor para que escuche solo en localhost:

   ```bash
   docker stop dork-pro && docker rm dork-pro
   docker run -d --name dork-pro --restart unless-stopped -p 127.0.0.1:8080:80 dork-pro:latest
   ```

4. Crea `/etc/caddy/Caddyfile`:

   ```
   dork.tu-dominio.com {
       reverse_proxy 127.0.0.1:8080
   }
   ```

5. Recarga Caddy: `sudo systemctl reload caddy`. Caddy obtiene y renueva el certificado automáticamente.

Abre también el puerto 443 en el grupo de seguridad.

## 8. Verificación

Desde tu equipo:

```bash
curl -I http://<ip-elastica>/
```

Debe responder `HTTP/1.1 200 OK`. En la instancia:

```bash
docker ps                     # el contenedor dork-pro debe estar "Up"
docker logs --tail 50 dork-pro
```

Comprueba en el navegador:

- [ ] La página carga desde la IP o el dominio.
- [ ] Recargar una ruta desconocida no devuelve 404.
- [ ] El tema y el idioma funcionan.

## 9. Operación

### Copias de seguridad

La aplicación no guarda datos en el servidor. Las claves y preferencias viven en el navegador de cada usuario, así que no hay nada que respaldar en la instancia. El código está en Git.

### Logs

```bash
docker logs -f dork-pro
```

### Costes

Una instancia pequeña y una Elastic IP asociada a una instancia en ejecución tienen coste mensual. Revisa la [calculadora de precios de AWS](https://calculator.aws/) y las condiciones vigentes de la Elastic IP. Si detienes la instancia, la Elastic IP sigue cobrándose.

## 10. Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| `curl` da *connection timed out* | Puerto 80 cerrado en el grupo de seguridad | Añade la regla HTTP (80) desde `0.0.0.0/0`. |
| `permission denied` al usar Docker | El usuario no está en el grupo `docker` | `sudo usermod -aG docker $USER` y vuelve a iniciar sesión. |
| `port is already allocated` | Otro servicio usa el puerto 80 (por ejemplo, Apache o un Caddy ya instalado) | Ejecuta `sudo ss -ltnp` buscando el puerto 80 y detén el servicio conflictivo. |
| El contenedor no arranca tras reiniciar | Falta `--restart unless-stopped` | Recrea el contenedor con ese flag o usa Compose. |
| Página en blanco tras actualizar | Se levantó la imagen anterior | Reconstruye con `docker build --no-cache` y vuelve a crear el contenedor. |

### Alternativa: construir en local y subir la imagen

Si la instancia es demasiado pequeña para compilar, construye en tu equipo, guarda la imagen y cárgala:

```bash
docker build -t dork-pro:latest .
docker save dork-pro:latest | gzip > dork-pro.tar.gz
scp -i ~/clave.pem dork-pro.tar.gz ubuntu@<ip-elastica>:~/
ssh -i ~/clave.pem ubuntu@<ip-elastica> 'gunzip -c dork-pro.tar.gz | docker load'
```

Después arranca el contenedor como en la sección 5. Ten en cuenta que la imagen de tu equipo debe ser compatible con la arquitectura de la instancia (`amd64` en `t3`, `arm64` en `t4g`).
