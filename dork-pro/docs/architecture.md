# Arquitectura

Este documento describe cómo está organizado el código, cómo fluyen los datos y qué decisiones de diseño se tomaron. Para la lista de funcionalidades visibles para el usuario, consulta el [README.md](../README.md).

## 1. Visión general

```
┌──────────────────────────────── Navegador ────────────────────────────────┐
│                                                                           │
│  index.html → main.jsx → App.jsx (estado global)                          │
│                              │                                            │
│        ┌─────────────────────┼─────────────────────┐                      │
│        ▼                     ▼                     ▼                      │
│  LibrarySidebar         DorkList             DetailPanel / HomeHero       │
│  (bibliotecas)          (lista de dorks)     (consulta + buscadores /     │
│                                               asistente de IA)            │
│                                                    │                      │
│                                   ┌────────────────┴──────────┐          │
│                                   ▼                           ▼          │
│                          Construcción de la          Asistente IA        │
│                          consulta (lib/query.js)     (AiChat + lib/ai.js)│
│                                                                           │
│  localStorage  ◄── idioma, tema, claves y modelos de IA                   │
└───────────────┬───────────────────────────────────────┬───────────────────┘
                │ archivos estáticos                    │ fetch directo
                ▼                                       ▼
        Servidor estático                    API del proveedor de IA
   (Vercel, Docker/nginx, …)            (Gemini, Anthropic, OpenAI, local)
```

Características clave:

- **Sin backend propio.** Todo el código se ejecuta en el navegador. El servidor solo entrega archivos estáticos.
- **El asistente llama directamente a la API del proveedor** desde el navegador. No hay proxy intermedio.
- **La aplicación no lanza búsquedas.** Genera la consulta y abre el buscador elegido en una pestaña nueva.

## 2. Stack tecnológico

| Capa | Tecnología | Versión (`package.json`) |
|---|---|---|
| Interfaz | React | 19.x |
| Build y servidor de desarrollo | Vite | 6.x |
| Plugin de React para Vite | `@vitejs/plugin-react` | 4.x |
| Estilos | Tailwind CSS v4 con `@tailwindcss/vite` | 4.x |
| Tipografías | Google Fonts (Space Grotesk, IBM Plex Mono) | — |
| Runtime de build | Node.js 24 (`.nvmrc`, `engines`) | — |

No hay librerías de estado, enrutado ni componentes. La aplicación no tiene rutas: toda la navegación ocurre dentro de `App.jsx`.

## 3. Estructura del repositorio

| Ruta | Responsabilidad |
|---|---|
| `index.html` | Plantilla HTML. Carga las Google Fonts y el punto de entrada `src/main.jsx`. |
| `src/main.jsx` | Monta `<App />` en `#root` dentro de `StrictMode` e importa `index.css`. |
| `src/App.jsx` | Componente raíz. Mantiene el estado global y coordina los paneles. |
| `src/index.css` | Tailwind v4, tokens de color para tema claro y oscuro, y clases de componente. |
| `src/components/` | Componentes de interfaz (ver sección 4). |
| `src/data/catalog.js` | Datos estáticos: `CATS`, `DORKS`, `ENGINES`, `AI_PROVIDERS`, `SEV_*`. |
| `src/data/translations.js` | Diccionario ES → EN y `makeTr(lang)`. |
| `src/lib/` | Lógica sin React (ver sección 5). |
| `public/` | Archivos servidos sin procesar desde la raíz del sitio. |
| `dist/` | Salida de `npm run build`. **No se versiona** (está en `.gitignore`). |
| `vite.config.js` | Configuración de Vite: plugins de React y Tailwind. |
| `vercel.json` | Build, carpeta de salida, reescrituras, caché y cabeceras de seguridad. |
| `Dockerfile`, `nginx.conf`, `.dockerignore` | Imagen de contenedor: build con Node 24 y servidor nginx. |
| `.nvmrc` | Versión de Node del proyecto (`24`). |

## 4. Componentes

Árbol de componentes:

```
App
├── Topbar                  búsqueda global, idioma, tema, inicio
├── LibrarySidebar          lista de bibliotecas (categorías)
├── DorkList                lista de dorks filtrada (oculta en inicio)
├── section
│   ├── DetailPanel         consulta, dominio, alcance y buscadores
│   │   └── LegalFoot       aviso legal
│   └── HomeHero            pantalla de inicio cuando no hay selección
│       ├── AiChat          asistente de IA
│       └── LegalFoot
└── toast                   aviso breve al copiar
```

| Componente | Función |
|---|---|
| `Topbar` | Campo de búsqueda global, botón de inicio, cambio de idioma y de tema. |
| `LibrarySidebar` | Bibliotecas con su contador; al elegir una, filtra la lista de dorks. |
| `DorkList` | Dorks de la biblioteca activa con filtro de texto y de severidad. |
| `DetailPanel` | Muestra el dork seleccionado, el campo de dominio, el alcance `site:` / `web`, la consulta generada, copiar y los 8 buscadores. |
| `HomeHero` | Pantalla de inicio: presentación y asistente de IA. |
| `AiChat` | Chat con el asistente: configuración de proveedor, mensajes y envío. |
| `LegalFoot` | Aviso de uso autorizado. |
| `Icons` | Iconos SVG como componentes de función. |

Los componentes son **presentacionales**: reciben datos y callbacks por props. La excepción es `AiChat`, que mantiene su propio estado de configuración y conversación.

## 5. Módulos de `src/lib/`

| Módulo | Responsabilidad |
|---|---|
| `query.js` | `cleanDomain` (normaliza el dominio), `buildFull` (consulta final), `engineUrl` (URL de búsqueda) y `needsDomain` (si el dork exige dominio). |
| `ai.js` | `systemPrompt` y `callAI`: adaptadores HTTP para Claude, Gemini y APIs compatibles con OpenAI. |
| `hooks.js` | `useLocalStorage` (estado persistido que tolera fallos), `useToast` (aviso temporal) y `copyText` (portapapeles con respaldo). |

### Construcción de la consulta

`buildFull(dork, domain, scope)` produce la consulta final:

1. Toma `dork.q` y sustituye `{dom}` por el dominio limpio. Si no hay dominio, usa `tudominio.com` como marcador.
2. Si el dork tiene `noSite`, devuelve la consulta tal cual.
3. Si el alcance es `site` y hay dominio, antepone `site:<dominio> `.

`cleanDomain` quita el protocolo, la ruta y los espacios, así que se puede pegar una URL completa.

## 6. Estado y flujo de datos

Todo el estado de navegación vive en `App.jsx`. No se usan Context ni Redux.

| Estado | Tipo | Significado |
|---|---|---|
| `lang` | `'es' \| 'en'` | Idioma de la interfaz. Persistido como `dork-lang`. |
| `theme` | `'light' \| 'dark' \| null` | `null` sigue la preferencia del sistema. Persistido como `dork-theme`. |
| `activeCat` | `string \| null` | Biblioteca activa. `null` es la pantalla de inicio. |
| `sevFilter` | `string` | Filtro de severidad (`all`, `alta`, `media`, `info`). |
| `filter` / `search` | `string` | Filtro de la lista de dorks y búsqueda global. |
| `activeDork` | objeto o `null` | Dork seleccionado. |
| `domain` / `scope` | `string` | Dominio objetivo y alcance (`site` o `web`). |
| `toast` | `string` | Texto del aviso temporal. |

### Reglas de selección

- `home` es verdadero cuando no hay biblioteca activa y no hay búsqueda. En ese caso se muestra `HomeHero`.
- La lista `list` se calcula con `useMemo` a partir de biblioteca, severidad, filtro y búsqueda.
- Si el dork activo ya no está en la lista, `App` selecciona automáticamente el primero.
- Elegir una biblioteca limpia el filtro de texto y la búsqueda; ir al inicio limpia también el dork activo.

### Disposición en pantalla

El contenedor usa una cuadrícula de columnas: `252px 322px 1fr` con lista de dorks y `252px 1fr` en el inicio. Por debajo del breakpoint `lg` de Tailwind (1024 px) la cuadrícula pasa a un flujo vertical (`max-lg:block`).

## 7. Búsqueda y consultas

- `DORKS` es un arreglo plano; cada dork tiene `title`, `q`, `note`, `cat`, `sev` y opcionalmente `noSite`.
- La búsqueda global compara en minúsculas el título, la consulta, la nota y el nombre de la biblioteca, tanto en el idioma original como traducidos con `tr()`.
- Los buscadores de `ENGINES` son solo URLs de búsqueda con la consulta codificada (`encodeURIComponent`).

## 8. Asistente de IA

### Flujo

```
UI (AiChat)
   │  send()
   ▼
callAI(config, messages)   [lib/ai.js]
   │
   ├── claude  → POST api.anthropic.com/v1/messages
   ├── gemini  → POST generativelanguage.googleapis.com/…:generateContent
   └── openai / custom → POST {base}/chat/completions
```

- Cada proveedor tiene su formato de petición. Los tres reciben el mismo prompt de sistema (`systemPrompt`), que pide de 1 a 5 dorks en bloques de código con una explicación de una línea.
- El historial completo de la conversación se envía en cada petición.
- `max_tokens` está fijo en 1024 solo para Claude.
- Si un proveedor devuelve error HTTP, el mensaje se muestra en el chat con los primeros 240 caracteres de la respuesta.
- Si no hay clave y el proveedor no es `custom`, el chat avisa y no llama a la API.

### Configuración y almacenamiento

| Clave de `localStorage` | Contenido |
|---|---|
| `dork-ai-provider` | Proveedor activo. |
| `dork-ai-keys` | Objeto `{ [proveedor]: clave }`. |
| `dork-ai-models` | Objeto `{ [proveedor]: modelo }`. Vacío = modelo por defecto. |
| `dork-ai-bases` | Objeto `{ [proveedor]: URL base }`. Usado por `custom`. |

### Seguridad

- Las claves se guardan **en texto plano** en `localStorage`. Cualquier script del mismo origen puede leerlas.
- Las peticiones salen del navegador del usuario, así que la clave viaja en las cabeceras de cada petición a su proveedor.
- La cabecera `anthropic-dangerous-direct-browser-access` es obligatoria para llamadas desde navegador a Anthropic.
- El proveedor `custom` (por ejemplo Ollama en `http://localhost:11434/v1`) no necesita clave.

## 9. Estilos y tema

- Los colores son variables CSS definidas en `:root` en `src/index.css` y se exponen como utilidades de Tailwind con `@theme inline` (por ejemplo `bg-bg`, `text-fg`, `border-border`).
- El tema oscuro se aplica con el atributo `data-theme` en `<html>`. Sin valor guardado se usa `prefers-color-scheme`.
- `.hero-panel` y `.preview-box` son las dos clases de componente con gradientes, porque son más claras en CSS que como utilidades.

## 10. Persistencia en el navegador

| Clave | Uso | Módulo |
|---|---|---|
| `dork-lang` | Idioma de la interfaz. | `App.jsx` |
| `dork-theme` | Tema elegido. | `App.jsx` |
| `dork-ai-*` | Configuración del asistente. | `components/AiChat.jsx` |

Todas las lecturas y escrituras pasan por `useLocalStorage`, que captura errores (modo privado, cuota llena o acceso bloqueado).

## 11. Limitaciones conocidas

- El catálogo de dorks es estático: se edita a mano en `src/data/catalog.js`.
- Los textos traducidos dependen de que cada cadena de la interfaz exista en `translations.js`; una clave ausente se muestra en español.
- No hay pruebas automatizadas en el repositorio.
- Un proveedor de IA puede bloquear las llamadas por CORS.

## 12. Dónde extender

| Para… | Cambia |
|---|---|
| Añadir dorks o bibliotecas | `src/data/catalog.js` (`DORKS`, `CATS`). |
| Añadir un buscador | Un objeto en `ENGINES` (`src/data/catalog.js`). |
| Añadir un proveedor de IA | `AI_PROVIDERS` en `catalog.js`, una rama en `callAI` (`lib/ai.js`) y la configuración en `AiChat.jsx`. |
| Añadir un idioma | Traducciones en `translations.js` y ampliar `makeTr`. |
| Cambiar colores o tipografía | Variables en `src/index.css`. |
| Cambiar la lógica de consulta | `src/lib/query.js`. |
