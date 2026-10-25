# dork-pro — Project documentation

> 🇪🇸 Esta documentación también está disponible en español: [README-es.md](README-es.md).

## 1. What it is

**dork-pro** is a web application that helps you build **Google dorks** (queries that use advanced operators such as `site:`, `inurl:`, `intitle:`, `filetype:`) for **authorized reconnaissance**: penetration testing, bug bounty and security audits. Users browse dork libraries, fill in the target domain and get a query ready to run on several search engines.

It includes an **AI assistant** that generates dorks from a natural-language description, using Gemini, Claude, OpenAI or any OpenAI-compatible API (including a local AI).

> ⚠️ These queries only expose content that search engines have already indexed. Use them **only** against domains you own or have written authorization to test.

### Stack

| Layer | Technology |
|---|---|
| Interface | React 19 |
| Build and dev server | Vite 6 |
| Styles | Tailwind CSS v4 (official `@tailwindcss/vite` plugin) |
| Development runtime | Node.js 24 (`.nvmrc`, `engines`) |

## 2. Project contents

| Path | Description |
|---|---|
| `index.html` | Vite entry point. Contains `<div id="root">` and loads `src/main.jsx`. |
| `src/main.jsx` | Mounts the React application in `StrictMode` and loads the styles. |
| `src/App.jsx` | Global state (active library, selected dork, filters, language, theme, domain) and panel composition. |
| `src/index.css` | Tailwind v4 and color tokens for light and dark themes. |
| `src/components/` | UI components: `Topbar`, `LibrarySidebar`, `DorkList`, `DetailPanel`, `HomeHero`, `AiChat`, `LegalFoot`, `Icons`. |
| `src/data/catalog.js` | Data: `CATS` (15 libraries), `DORKS` (100 dorks), `ENGINES` (8 search engines) and `AI_PROVIDERS`. |
| `src/data/translations.js` | Spanish → English dictionary and the `makeTr(lang)` function. |
| `src/lib/` | Logic without UI: `query.js` (query building), `ai.js` (calls to AI providers), `hooks.js` (persisted state, toast, copy). |
| `public/` | Static files served as-is at the site root. |
| `vite.config.js` | Vite configuration: React and Tailwind plugins. |
| `vercel.json` | Vercel deployment configuration: build, output folder, rewrites and security headers. |
| `Dockerfile`, `nginx.conf`, `.dockerignore` | Container image: build with Node 24 and static serving with nginx. |
| `.nvmrc` | Node version used by the project (`24`). |
| `.env.example` | Optional environment variables (see section 3). |
| `docs/` | Technical documentation and deployment guides. Index at [docs/README.md](docs/README.md). |

## 3. Requirements and running

Requires **Node.js 24**. With nvm:

```bash
nvm install 24
nvm use            # reads .nvmrc
npm ci             # installs the exact dependencies from package-lock.json
npm run dev        # development server (http://localhost:5173)
npm run build      # production build in dist/
npm run preview    # serves the build locally
```

Optional environment variables (copy `.env.example` to `.env`):

| Variable | Values | Effect |
|---|---|---|
| `VITE_DEFAULT_LANG` | `en` (default) or `es` | Initial language. Users can change it and the choice is saved in their browser. |

> There are no secret variables: the application is 100% static.

### Usage

1. **Pick a library** in the sidebar (for example, exposed documents, login panels or repositories).
2. **Pick a dork** from the list. You can filter by severity (high, medium or informational).
3. **Enter the target domain** and the scope: `site:` (that domain only) or `web` (no restriction).
4. **Open the query** in your preferred search engine, or copy the generated query.

### Home

When no library is selected, the home screen shows the AI assistant and a short summary to get started.

## 4. Features

### 4.1 Dork builder
- Three panels in CLI Builder style: libraries → dorks → query preview.
- Global search that matches title, query, note and library, in the active language.
- Filter by severity and filter by library.
- Automatic replacement of the `{dom}` placeholder with the target domain.
- Copy to clipboard with a brief notification (*toast*).

### 4.2 Opening search engines
Open the query directly in 8 search engines: Google, Bing, DuckDuckGo, Brave, Startpage, Yahoo, Ecosia and Yandex.

### 4.3 Language and theme
- **ES/EN multilingual support**. Spanish is the base language; the dictionary keys are the Spanish text.
- **Light and dark theme**. Without a saved preference, the system preference (`prefers-color-scheme`) is followed.
- Both preferences are saved in `localStorage` (keys `dork-lang` and `dork-theme`).

### 4.4 AI assistant
Generates 1 to 5 dorks from a need described by the user, with a one-line explanation for each.

| Provider | Default model | Notes |
|---|---|---|
| Gemini (Google) | `gemini-2.0-flash` | Works directly from the browser. |
| Claude (Anthropic) | `claude-3-5-haiku-latest` | Sends the `anthropic-dangerous-direct-browser-access` header. |
| OpenAI | `gpt-4o-mini` | Usually allows direct calls from the browser. |
| Custom / local AI | — | Any OpenAI-compatible API, for example Ollama (`http://localhost:11434/v1`). |

Configuration is done in the assistant itself: provider, key (optional for local AI), model and base URL. Everything is saved in `localStorage` under the keys `dork-ai-provider`, `dork-ai-keys`, `dork-ai-models` and `dork-ai-bases`.

## 5. Technical architecture

The architecture, data flow and design decisions are described in [docs/architecture.md](docs/architecture.md).

Summary:
- **No backend of its own.** All code runs in the browser; the server only delivers static files.
- **AI calls go directly from the browser** to the provider's API, with no intermediate proxy.
- **The application does not run searches itself**: it generates the queries and opens the search engines.

## 6. Security and privacy

- API keys are stored **in plain text** in the browser's `localStorage`. Any script running on the same origin can read them. Do not configure provider keys as Vercel environment variables: they would end up in the public bundle.
- Keys are **never** sent to a server operated by the project; they only travel in the request to the chosen provider.
- The application uses security headers defined in `vercel.json` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` and `Permissions-Policy`).
- The assistant is instructed not to generate exploits or illegal content, but this is a behavioral filter of the model, not a guarantee.

## 7. Known limitations

- Dorks are a static list in `src/data/catalog.js`; they do not update automatically.
- An AI provider may block the call due to CORS. In that case the error appears in the chat and a custom proxy would be required.
- A local AI served over HTTPS may be blocked by *mixed content*. In development (`http://localhost`) it works.
- Queries depend on search engines continuing to support the operators used.

## 8. Possible improvements

- Automated tests (for example, Vitest for `src/lib/query.js` and `src/lib/ai.js`).
- Optional proxy for providers with restrictive CORS.
- Export and import of dork libraries as JSON.
- Split `catalog.js` into one file per library if the catalog grows significantly.

## 9. Documentation

| Document | Contents |
|---|---|
| [docs/README.md](docs/README.md) | Documentation index and deployment overview. |
| [docs/architecture.md](docs/architecture.md) | Code structure, data flow, state and AI assistant. |
| [docs/deployment-vercel.md](docs/deployment-vercel.md) | Publishing on Vercel (dashboard, Git integration, domains). |
| [docs/deployment-vercel-cli.md](docs/deployment-vercel-cli.md) | Deploying from the terminal with the Vercel CLI. |
| [docs/deployment-docker-local.md](docs/deployment-docker-local.md) | Building and running the Docker image on your machine. |
| [docs/deployment-aws-ec2-docker.md](docs/deployment-aws-ec2-docker.md) | Deploying to an EC2 instance with Docker. |
