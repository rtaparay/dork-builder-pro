# Despliegue en Vercel con la CLI

Esta guía explica cómo publicar `dork-pro` desde la terminal con la CLI oficial de Vercel. Para el flujo desde el panel web, consulta [deployment-vercel.md](deployment-vercel.md).

## 1. Instalar la CLI

Requiere Node 24 (ver `.nvmrc`).

```bash
npm install -g vercel
vercel --version
```

También puedes usarla sin instalar, con `npx vercel`.

## 2. Iniciar sesión

```bash
vercel login
```

Elige el método de acceso (correo, GitHub, GitLab…) y confirma en el navegador. Para comprobar la sesión:

```bash
vercel whoami
```

## 3. Vincular el proyecto

Desde la raíz del proyecto:

```bash
cd dork-pro
vercel link
```

La primera vez la CLI pregunta:

| Pregunta | Respuesta recomendada |
|---|---|
| ¿Set up and deploy? | `y` |
| ¿Scope? | Tu cuenta u organización |
| ¿Link to existing project? | `n` para crear uno nuevo, `y` si ya existe |
| ¿Project name? | `dork-pro` |
| ¿Directory? | `./` (la raíz) |

Vercel detecta Vite y usa los ajustes de `vercel.json`. La vinculación se guarda en `.vercel/`, que **no** se versiona: ya está en `.gitignore`.

## 4. Desplegar

### Preview

```bash
vercel
```

Crea un despliegue de prueba con URL propia, sin tocar producción.

### Producción

```bash
vercel --prod
```

### Flags útiles

| Flag | Efecto |
|---|---|
| `--prod` | Despliega a producción. |
| `--yes` | Acepta las opciones por defecto sin preguntar. |
| `--force` | Ignora la caché de build y reconstruye. |
| `--name <nombre>` | Cambia el nombre del proyecto en el despliegue. |

### Revisar qué se sube

Con `vercel` o `vercel --prod` la CLI sube el código fuente y Vercel construye en su nube con `vercel.json`. Para no subir carpetas pesadas, mantén `node_modules` y `dist` fuera del directorio de despliegue.

### Construir en local y desplegar la salida

```bash
npm ci
npm run build
vercel deploy --prebuilt --prod
```

`--prebuilt` usa la carpeta `.vercel/output` generada por `vercel build`. Si solo tienes `dist/`, usa `npx vercel deploy dist --prod` como se explica en [deployment-vercel.md](deployment-vercel.md), con la advertencia de que no se aplica `vercel.json`.

## 5. Verificar el despliegue

Tras cada despliegue, la CLI imprime la URL. Comprueba:

```bash
curl -I https://<tu-url>/
```

Deberías ver `HTTP/2 200` y las cabeceras `X-Frame-Options: DENY` y `X-Content-Type-Options: nosniff`.

Consulta también la lista de comprobaciones de [deployment-vercel.md](deployment-vercel.md#5-verificación-tras-desplegar).

## 6. Listar, ver logs y volver atrás

```bash
vercel ls                       # últimos despliegues
vercel inspect <url>            # detalles de un despliegue
vercel logs <url>               # logs de ejecución
vercel rollback <url>           # vuelve a un despliegue anterior
```

## 7. Variables de entorno

```bash
vercel env ls
vercel env add VITE_DEFAULT_LANG production
vercel env pull .env.local
```

Recuerda que las variables `VITE_*` se incrustan en el bundle en el momento del build. Cambiarlas exige volver a desplegar. No guardes claves de proveedores de IA aquí: el asistente usa las claves que introduce el propio usuario en su navegador.

## 8. Dominios y alias

```bash
vercel domains add dork.tu-dominio.com
vercel alias set <url-del-despliegue> dork.tu-dominio.com
```

El DNS y el certificado se gestionan como en [deployment-vercel.md](deployment-vercel.md#4-dominio-propio).

## 9. Uso no interactivo (CI y scripts)

Para pipelines, usa un token en lugar de iniciar sesión:

```bash
export VERCEL_TOKEN=<token>        # guárdalo como secreto del CI, nunca en el repositorio
vercel pull --yes --environment=production --token "$VERCEL_TOKEN"
vercel build --prod --token "$VERCEL_TOKEN"
vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"
```

## 10. Limpieza

```bash
rm -rf .vercel                     # deshace la vinculación local
```

> Para eliminar el proyecto o sus despliegues en Vercel, usa el panel web (**Settings → Advanced**) o `vercel remove --help` para ver las opciones. Revísalo antes: el borrado no se puede deshacer.

## 11. Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| `vercel: command not found` | La CLI no está instalada o no está en el `PATH` | Reinstala con `npm install -g vercel` o usa `npx vercel`. |
| Pide vincular el proyecto en cada despliegue | No existe `.vercel/` o se ejecuta desde otra carpeta | Ejecuta `vercel link` desde la raíz. |
| El build falla con error de Node | Versión distinta de 24 | Usa `nvm use` y revisa **Settings → Node.js Version** en el panel. |
| Despliegue correcto pero la página en blanco | Build sin `dist/` válido | Ejecuta `npm run build` en local y revisa la consola del navegador. |

## 12. Referencia rápida

| Tarea | Comando |
|---|---|
| Instalar la CLI | `npm install -g vercel` |
| Iniciar sesión | `vercel login` |
| Vincular | `vercel link` |
| Preview | `vercel` |
| Producción | `vercel --prod` |
| Ver despliegues | `vercel ls` |
| Volver atrás | `vercel rollback <url>` |
| Logs | `vercel logs <url>` |
