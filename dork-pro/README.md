# dork-pro — Documentación del proyecto

## 1. Qué es

**dork-pro** es una aplicación web que ayuda a construir **Google dorks** (consultas con operadores avanzados como `site:`, `inurl:`, `intitle:`, `filetype:`) para **reconocimiento autorizado**: pentesting, bug bounty y auditorías de seguridad. El usuario navega por bibliotecas de dorks, rellena el dominio objetivo y obtiene la consulta lista para lanzar en distintos buscadores.

Incluye un **asistente de IA** que genera dorks a partir de una descripción en lenguaje natural, usando Gemini, Claude, OpenAI o una API compatible con OpenAI (incluida una IA local).

> ⚠️ Estas consultas solo exponen contenido que los buscadores ya tienen indexado. Úsalas **únicamente** sobre dominios de tu propiedad o con autorización escrita.

### Stack

| Capa | Tecnología |
|---|---|
| Interfaz | React 19 |
| Build y servidor de desarrollo | Vite 6 |
| Estilos | Tailwind CSS v4 (plugin oficial `@tailwindcss/vite`) |
| Runtime de desarrollo | Node.js 24 (`.nvmrc`, `engines`) |

## 2. Contenido del proyecto

| Ruta | Descripción |
|---|---|
| `index.html` | Punto de entrada de Vite. Contiene `<div id="root">` y carga `src/main.jsx`. |
| `src/main.jsx` | Monta la aplicación React en modo `StrictMode` y carga los estilos. |
| `src/App.jsx` | Estado global (biblioteca activa, dork seleccionado, filtros, idioma, tema, dominio) y composición de paneles. |
| `src/index.css` | Tailwind v4 y tokens de color para tema claro y oscuro. |
| `src/components/` | Componentes de interfaz: `Topbar`, `LibrarySidebar`, `DorkList`, `DetailPanel`, `HomeHero`, `AiChat`, `LegalFoot`, `Icons`. |
| `src/data/catalog.js` | Datos: `CATS` (15 bibliotecas), `DORKS` (100 dorks), `ENGINES` (8 buscadores) y `AI_PROVIDERS`. |
| `src/data/translations.js` | Diccionario español → inglés y la función `makeTr(lang)`. |
| `src/lib/` | Lógica sin interfaz: `query.js` (construcción de la consulta), `ai.js` (llamadas a proveedores de IA), `hooks.js` (estado persistido, toast, copiar). |
| `public/` | Archivos estáticos servidos tal cual en la raíz del sitio. |
| `vite.config.js` | Configuración de Vite: plugins de React y Tailwind. |
| `vercel.json` | Configuración de despliegue en Vercel: build, carpeta de salida, reescrituras y cabeceras de seguridad. |
| `Dockerfile`, `nginx.conf`, `.dockerignore` | Imagen de contenedor: build con Node 24 y servidor estático con nginx. |
| `.nvmrc` | Versión de Node usada por el proyecto (`24`). |
| `.env.example` | Variables de entorno opcionales (ver sección 3). |
| `docs/` | Documentación técnica y guías de despliegue. Índice en [docs/README.md](docs/README.md). |

## 3. Requisitos y ejecución

Requiere **Node.js 24**. Con nvm:

```bash
nvm install 24
nvm use            # lee .nvmrc
npm ci             # instala las dependencias exactas de package-lock.json
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción en dist/
npm run preview    # sirve el build localmente
```

Variables de entorno opcionales (copia `.env.example` a `.env`):

| Variable | Valores | Efecto |
|---|---|---|
| `VITE_DEFAULT_LANG` | `en` (por defecto) o `es` | Idioma inicial. El usuario puede cambiarlo y la elección se guarda en su navegador. |

> No hay ninguna variable con secretos: la aplicación es 100% estática.

### Uso

1. **Elige una biblioteca** en la barra lateral (por ejemplo, documentos expuestos, paneles de login o repositorios).
2. **Elige un dork** de la lista. Puedes filtrar por severidad (riesgo alto, medio o informativo).
3. **Indica el dominio objetivo** y el alcance: `site:` (solo ese dominio) o `web` (sin restricción).
4. **Abre la consulta** en el buscador que prefieras, o copia la consulta generada.

### Inicio

Sin biblioteca seleccionada, la pantalla de inicio muestra el asistente de IA y un resumen para empezar.

## 4. Funcionalidades

### 4.1 Constructor de dorks
- Tres paneles estilo CLI Builder: bibliotecas → dorks → vista previa de la consulta.
- Buscador global que cruza título, consulta, nota y biblioteca, en el idioma activo.
- Filtro por severidad y filtro por biblioteca.
- Sustitución automática del marcador `{dom}` por el dominio objetivo.
- Copia al portapapeles con notificación breve (*toast*).

### 4.2 Búsqueda en buscadores
Apertura directa de la consulta en 8 buscadores: Google, Bing, DuckDuckGo, Brave, Startpage, Yahoo, Ecosia y Yandex.

### 4.3 Idioma y tema
- **Multilenguaje ES/EN**. El español es el idioma base; las claves del diccionario son el texto en español.
- **Tema claro y oscuro**. Sin preferencia guardada se sigue la preferencia del sistema (`prefers-color-scheme`).
- Ambas preferencias se guardan en `localStorage` (claves `dork-lang` y `dork-theme`).

### 4.4 Asistente de IA
Genera de 1 a 5 dorks a partir de una necesidad descrita por el usuario, con una explicación de una línea para cada uno.

| Proveedor | Modelo por defecto | Notas |
|---|---|---|
| Gemini (Google) | `gemini-2.0-flash` | Funciona directamente desde el navegador. |
| Claude (Anthropic) | `claude-3-5-haiku-latest` | Envía la cabecera `anthropic-dangerous-direct-browser-access`. |
| OpenAI | `gpt-4o-mini` | Normalmente permite llamadas directas desde el navegador. |
| Personalizada / IA local | — | Cualquier API compatible con OpenAI, por ejemplo Ollama (`http://localhost:11434/v1`). |

Configuración en el propio asistente: proveedor, clave (opcional para la IA local), modelo y URL base. Todo se guarda en `localStorage` con las claves `dork-ai-provider`, `dork-ai-keys`, `dork-ai-models` y `dork-ai-bases`.

## 5. Arquitectura técnica

La arquitectura, el flujo de datos y las decisiones de diseño están en [docs/architecture.md](docs/architecture.md).

Resumen:
- **Sin backend propio.** Todo el código se ejecuta en el navegador; el servidor solo entrega archivos estáticos.
- **Las llamadas a la IA salen directamente del navegador** hacia la API del proveedor, sin proxy intermedio.
- **La aplicación no ejecuta búsquedas por sí misma**: genera las consultas y abre los buscadores.

## 6. Seguridad y privacidad

- Las claves de API se guardan **en texto plano** en el `localStorage` del navegador. Cualquier script que se ejecute en el mismo origen puede leerlas. No configures claves de proveedores como variables de entorno de Vercel: quedarían en el bundle público.
- Las claves **nunca** se envían a un servidor propio del proyecto; solo viajan en la petición al proveedor elegido.
- La aplicación usa cabeceras de seguridad en `vercel.json` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` y `Permissions-Policy`).
- El asistente tiene instrucciones para no generar exploits ni contenido ilegal, pero es un filtro de comportamiento del modelo, no una garantía.

## 7. Limitaciones conocidas

- Los dorks son una lista estática en `src/data/catalog.js`; no se actualizan solos.
- Un proveedor de IA puede bloquear la llamada por CORS. En ese caso el error aparece en el chat y haría falta un proxy propio.
- Una IA local servida por HTTPS puede quedar bloqueada por *mixed content*. En desarrollo (`http://localhost`) funciona.
- Las consultas dependen de que el buscador siga soportando los operadores usados.

## 8. Posibles mejoras

- Pruebas automatizadas (por ejemplo, Vitest para `src/lib/query.js` y `src/lib/ai.js`).
- Proxy opcional para proveedores con CORS restrictivo.
- Exportar e importar bibliotecas de dorks en JSON.
- Separar `catalog.js` en un archivo por biblioteca si el catálogo crece mucho.

## 9. Documentación

| Documento | Contenido |
|---|---|
| [docs/README.md](docs/README.md) | Índice de la documentación y resumen de despliegues. |
| [docs/architecture.md](docs/architecture.md) | Estructura del código, flujo de datos, estado y asistente de IA. |
| [docs/deployment-vercel.md](docs/deployment-vercel.md) | Publicación en Vercel (dashboard, integración con Git, dominios). |
| [docs/deployment-vercel-cli.md](docs/deployment-vercel-cli.md) | Despliegue desde la terminal con la CLI de Vercel. |
| [docs/deployment-docker-local.md](docs/deployment-docker-local.md) | Construcción y ejecución de la imagen Docker en tu equipo. |
| [docs/deployment-aws-ec2-docker.md](docs/deployment-aws-ec2-docker.md) | Despliegue en una instancia EC2 con Docker. |
