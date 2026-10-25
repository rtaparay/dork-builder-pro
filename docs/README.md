# Documentación — dork-pro

Índice de la documentación técnica del proyecto. Para una visión general (qué es, funcionalidades, uso), consulta el [README.md](../README.md) de la raíz.

| Documento | Contenido |
|---|---|
| [architecture.md](architecture.md) | Estructura del código, flujo de datos, estado y asistente de IA. |
| [deployment-vercel.md](deployment-vercel.md) | Publicación como sitio estático en Vercel (panel, integración con Git, dominios). |
| [deployment-vercel-cli.md](deployment-vercel-cli.md) | Despliegue desde la terminal con la CLI de Vercel. |
| [deployment-docker-local.md](deployment-docker-local.md) | Construcción y ejecución de la imagen Docker en tu equipo. |
| [deployment-aws-ec2-docker.md](deployment-aws-ec2-docker.md) | Despliegue en una instancia EC2 con Docker. |

## Resumen de despliegues

| Objetivo | Documento | Qué necesitas |
|---|---|---|
| Ejecutar en desarrollo | README raíz, sección 3 | Node 24, `npm run dev` |
| Publicar en la web sin mantener servidores | [deployment-vercel.md](deployment-vercel.md) | Cuenta de Vercel y repositorio conectado |
| Publicar desde la terminal | [deployment-vercel-cli.md](deployment-vercel-cli.md) | Cuenta de Vercel y la CLI |
| Probar el contenedor en tu equipo | [deployment-docker-local.md](deployment-docker-local.md) | Docker |
| Publicar en tu propio servidor AWS | [deployment-aws-ec2-docker.md](deployment-aws-ec2-docker.md) | Cuenta de AWS, instancia EC2, Docker |

> **Nota:** la aplicación es un sitio **100% estático**. No tiene backend, ni base de datos, ni variables de entorno obligatorias. Cualquier servicio de hosting de archivos estáticos la puede servir.
