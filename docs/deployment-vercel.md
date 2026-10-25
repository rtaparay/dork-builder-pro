# Despliegue en Vercel

La aplicación es un sitio estático generado por Vite. Vercel construye el proyecto y lo sirve desde su CDN, sin servidor propio.

## 1. Configuración del proyecto

El repositorio ya incluye `vercel.json`:

| Ajuste | Valor | Dónde |
|---|---|---|
| Framework | `vite` | `vercel.json` |
| Comando de instalación | `npm ci` | `vercel.json` |
| Comando de build | `npm run build` | `vercel.json` |
| Carpeta de salida | `dist` | `vercel.json` |
| URLs limpias | activadas (`cleanUrls`) | `vercel.json` |
| Reescritura SPA | todas las rutas a `/index.html` | `vercel.json` |
| Caché de `/assets/*` | `public, max-age=31536000, immutable` | `vercel.json` |
| Cabeceras de seguridad | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | `vercel.json` |
| Versión de Node | 24 | `.nvmrc` y `engines` en `package.json` |

No hace falta configurar nada manualmente en el panel de Vercel.

## 2. Primer despliegue

### Opción A: desde el panel web (recomendada)

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. En [vercel.com](https://vercel.com), pulsa **Add New → Project** e importa el repositorio.
3. Vercel detecta Vite. Comprueba que los campos coinciden con la tabla anterior y pulsa **Deploy**.
4. Al terminar obtienes una URL como `https://<proyecto>.vercel.app`.

### Opción B: desde la CLI

Consulta [deployment-vercel-cli.md](deployment-vercel-cli.md).

## 3. Despliegues continuos

Si el proyecto está conectado a Git:

| Evento | Resultado |
|---|---|
| Push a la rama de producción (normalmente `main`) | Despliegue de **producción**. |
| Push a otra rama o Pull Request | **Preview** con su propia URL. |

Cada despliegue es inmutable. Puedes volver a una versión anterior desde **Deployments → ⋯ → Promote to Production** (o *Rollback*).

## 4. Dominio propio

1. En el proyecto, ve a **Settings → Domains** y añade tu dominio.
2. Configura el DNS como indica Vercel (registro `A` o `CNAME`).
3. Vercel emite el certificado HTTPS automáticamente.

## 5. Verificación tras desplegar

Comprueba en la URL publicada:

- [ ] La página carga y muestra las 15 bibliotecas en la barra lateral.
- [ ] Al entrar en una biblioteca aparecen sus dorks y la consulta se genera al elegir uno.
- [ ] Los 8 botones de buscadores abren una pestaña con la consulta.
- [ ] El cambio de idioma y de tema funciona y se mantiene al recargar.
- [ ] Recargar una URL no devuelve 404.
- [ ] La respuesta incluye las cabeceras de `vercel.json` (`curl -I https://<tu-url>/`).

## 6. Consideraciones específicas

- **Claves de IA:** las claves que el usuario introduce en el asistente se guardan en su navegador. **No** las configures como variables de entorno de Vercel: quedarían en el bundle público.
- **Variables de entorno:** la única opcional es `VITE_DEFAULT_LANG` (`en` o `es`). Es pública por diseño, porque se incrusta en el build.
- **Plan gratuito:** un sitio estático como este cabe de sobra. Revisa los límites de ancho de banda en la documentación de Vercel si el tráfico crece.

## 7. Problemas frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| Error de build por versión de Node | El proyecto se construye con otra versión | Confirma en **Settings → Node.js Version** que está en 24, o que no hay un valor forzado distinto. |
| Rutas devuelven 404 | Falta la reescritura de `vercel.json` | Comprueba que `vercel.json` está en la raíz del repositorio. |
| Cambios no visibles tras desplegar | Caché del navegador en `/assets/` | Los nombres de archivo cambian en cada build, así que basta con recargar la página (Ctrl+F5). |
| `npm ci` falla | `package-lock.json` no coincide con `package.json` | Ejecuta `npm install` en local, revisa el diff del lockfile y súbelo. |

## 8. Desplegar desde local sin Git

```bash
npm ci
npm run build
npx vercel deploy dist --prod
```

Subir `dist/` directamente funciona, pero entonces **no se aplica** `vercel.json` (ni las reescrituras ni las cabeceras). Para un despliegue equivalente a producción, despliega desde la raíz del proyecto con `vercel --prod`.
