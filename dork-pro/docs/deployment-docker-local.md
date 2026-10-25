# Ejecución local con Docker

Esta guía explica cómo construir y ejecutar la aplicación en un contenedor Docker en tu equipo, para comprobar que el despliegue funciona igual que en producción.

Los archivos necesarios ya están en la raíz del proyecto: `Dockerfile`, `nginx.conf` y `.dockerignore`. Su contenido se explica en la sección 2.

## 1. Requisitos

| Requisito | Comprobación |
|---|---|
| Docker Engine o Docker Desktop | `docker --version` |
| Puerto 8080 libre | `ss -ltn` (Linux/WSL) o el Administrador de tareas (Windows) |

No necesitas Node en tu equipo: la imagen compila la aplicación dentro del contenedor.

En Windows, usa Docker Desktop con el backend de WSL 2. Los comandos son los mismos desde PowerShell o desde una terminal de WSL.

## 2. Archivos Docker

### `Dockerfile`

Build en dos etapas: la primera compila con Node 24; la segunda solo copia `dist/` a un servidor nginx. La imagen final no contiene Node ni el código fuente.

```dockerfile
# Stage 1: build with Node (version from .nvmrc)
FROM node:24-alpine AS build
WORKDIR /app

# Dependencies first, to take advantage of layer caching
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: static server
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

### `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Compression for the built JS and CSS
    gzip on;
    gzip_comp_level 6;
    gzip_types application/javascript text/css image/svg+xml;

    # Asset files carry a hash in their name: long cache
    location /assets/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Single-page app: any unknown path falls back to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### `.dockerignore`

Evita que carpetas pesadas o secretos entren en el contexto de build. Sin este archivo, un `node_modules` local se copiaría a la imagen.

```
node_modules
dist
.git
.vercel
docs
*.log
.env
.env.*
```

## 3. Construir la imagen

Desde la raíz del proyecto:

```bash
docker build -t dork-pro:local .
```

La primera vez tarda más porque descarga las imágenes base y todas las dependencias. Las siguientes reutilizan la caché de capas, siempre que `package-lock.json` no cambie.

## 4. Ejecutar el contenedor

```bash
docker run --rm -p 8080:80 --name dork-pro dork-pro:local
```

Abre [http://localhost:8080](http://localhost:8080). Para detener el contenedor, pulsa `Ctrl+C` en la terminal (el flag `--rm` lo elimina al terminar).

Para ejecutarlo en segundo plano:

```bash
docker run -d -p 8080:80 --restart unless-stopped --name dork-pro dork-pro:local
```

### Comandos útiles

| Acción | Comando |
|---|---|
| Ver contenedores en ejecución | `docker ps` |
| Ver logs de nginx | `docker logs -f dork-pro` |
| Parar el contenedor | `docker stop dork-pro` |
| Entrar en el contenedor | `docker exec -it dork-pro sh` |
| Listar imágenes | `docker images dork-pro` |

## 5. Ciclo de trabajo

1. Cambia el código en tu equipo.
2. Vuelve a construir: `docker build -t dork-pro:local .`
3. Para el contenedor anterior: `docker stop dork-pro`
4. Arranca el nuevo: `docker run -d -p 8080:80 --name dork-pro dork-pro:local`

Para iterar más rápido durante el desarrollo, usa `npm run dev` en lugar de Docker. El contenedor sirve para verificar el build de producción.

## 6. Verificación

```bash
curl -I http://localhost:8080/
curl -I http://localhost:8080/assets/        # debe responder 404 si no existe el fichero
```

Comprueba además en el navegador:

- [ ] La página carga y muestra las bibliotecas.
- [ ] Recargar una ruta desconocida (por ejemplo `http://localhost:8080/algo`) muestra la aplicación, no un 404.
- [ ] Los archivos de `/assets/` llevan `Cache-Control: public, max-age=31536000, immutable`.

## 7. Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| `port is already allocated` | El puerto 8080 está ocupado | Usa otro puerto: `-p 8081:80`. |
| `npm ci` falla dentro de la imagen | `package-lock.json` desincronizado | Ejecuta `npm install` en local, confirma el lockfile y vuelve a construir. |
| Cambios que no aparecen | Se reutilizó una capa en caché | Reconstruye con `docker build --no-cache -t dork-pro:local .`. |
| La página en blanco | El build falló pero la imagen anterior sigue en uso | Revisa la salida de `docker build` y arranca de nuevo el contenedor. |
| `docker: command not found` | Docker no está instalado o no está integrado con WSL | Activa la integración de WSL en Docker Desktop. |

## 8. Limpieza

```bash
docker stop dork-pro
docker rm dork-pro
docker rmi dork-pro:local
docker image prune -f        # elimina imágenes intermedias sin uso
```
