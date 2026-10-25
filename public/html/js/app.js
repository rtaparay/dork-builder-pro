/* ===================================================================
   i18n — Traductor. Idioma por defecto: inglés. Las claves son los textos en español; T.en = traducción.
   =================================================================== */
const T = {
  en: {
    "reconocimiento · búsqueda avanzada": "recon · advanced search",
    "Cambiar tema": "Toggle theme",
    "Inicio": "Home",
    "Bibliotecas": "Libraries",
    "Buscar dork…": "Search dorks…",
    "Filtrar comandos…": "Filter commands…",
    "Todas": "All",
    "Alto": "High",
    "Medio": "Medium",
    "Info": "Info",
    "Riesgo alto": "High risk",
    "Riesgo medio": "Medium risk",
    "Informativo": "Informational",
    "Vista previa del comando": "Command preview",
    "Elige una biblioteca para ver sus dorks.": "Pick a library to see its dorks.",
    "Falta el dominio objetivo (se usará un marcador).": "Target domain missing (a placeholder will be used).",
    "Parámetro": "Parameter",
    "Dominio objetivo": "Target domain",
    "(opcional)": "(optional)",
    "Limitar al dominio con site:": "Limit to the domain with site:",
    "Buscar en toda la web": "Search the whole web",
    "web": "web",
    "Buscadores compatibles": "Supported search engines",
    "Copiar": "Copy",
    "Sin resultados. Prueba otro término o severidad.": "No results. Try another term or severity.",
    "Copiado al portapapeles": "Copied to clipboard",
    "No se pudo copiar": "Could not copy",
    // Inicio / hero
    "Catálogo de Google dorks": "Google dork catalog",
    "Construye tus Google dorks sin perder el contexto.": "Build your Google dorks without losing the context.",
    "Explora cada biblioteca, arma la consulta operador por operador y ábrela en el buscador que prefieras. Todo en un solo lugar.": "Browse every library, compose the query operator by operator and open it in the search engine you prefer. All in one place.",
    "Dorks": "Dorks",
    "Buscadores": "Search engines",
    "Niveles de riesgo": "Risk levels",
    "categorías de recon": "recon categories",
    "consultas listas para usar": "ready-to-use queries",
    "destinos de búsqueda": "search destinations",
    "alto · medio · informativo": "high · medium · info",
    "Asistente IA": "AI assistant",
    "Genera dorks con IA. Describe tu objetivo y la IA propondrá consultas.": "Generate dorks with AI. Describe your goal and it will suggest queries.",
    "Proveedor": "Provider",
    "Modelo": "Model",
    "Clave API": "API key",
    "URL base": "Base URL",
    "La clave se guarda solo en este navegador.": "The key is stored only in this browser.",
    "Configurar": "Configure",
    "Guardar": "Save",
    "Limpiar chat": "Clear chat",
    "Escribe tu objetivo… (ej. encontrar archivos .env de ejemplo.com)": "Describe your goal… (e.g. find .env files on example.com)",
    "Enviar": "Send",
    "Pensando…": "Thinking…",
    "Configura un proveedor y una clave API para empezar.": "Set up a provider and API key to start.",
    "Falta la clave API.": "Missing API key.",
    "Error al consultar la IA:": "Error querying the AI:",
    "Abrir en Google": "Open in Google",
    "Personalizada / IA local": "Custom / local AI",
    "Gemini (Google)": "Gemini (Google)",
    "Claude (Anthropic)": "Claude (Anthropic)",
    "OpenAI": "OpenAI",
    "Solo para objetivos autorizados. La IA puede equivocarse; revisa cada consulta.": "For authorized targets only. The AI can make mistakes; review each query.",
    "Tú": "You",
    "IA": "AI",
    // Categorías
    "Infraestructura": "Infrastructure",
    "Archivos expuestos": "Exposed files",
    "Configuración y BD": "Config & DB",
    "Listado de directorios": "Directory listing",
    "WordPress": "WordPress",
    "Páginas de login": "Login pages",
    "Paneles de administración": "Admin panels",
    "Credenciales e info sensible": "Credentials & sensitive info",
    "Errores y debug": "Errors & debug",
    "Correos y contactos": "Emails & contacts",
    "Personas y OSINT": "People & OSINT",
    "Recon y superficie": "Recon & surface",
    "Cloud y DevOps": "Cloud & DevOps",
    "Fugas en terceros": "Third-party leaks",
    "Vulnerabilidades": "Vulnerabilities",
    // Dorks
    "Archivos PHP": "PHP files",
    "Scripts y páginas PHP indexados en el objetivo.": "Indexed PHP scripts and pages on the target.",
    "Volcados SQL": "SQL dumps",
    "Dumps y respaldos de base de datos, a menudo con datos reales.": "Database dumps and backups, often with real data.",
    "Archivos XML": "XML files",
    "Configuraciones, sitemaps y feeds en XML.": "Configs, sitemaps and feeds in XML.",
    "Archivos JSON": "JSON files",
    "Respuestas de API, manifiestos y archivos de configuración.": "API responses, manifests and config files.",
    "Archivos de log": "Log files",
    "Registros de aplicación que pueden filtrar rutas, IPs o tokens.": "Application logs that may leak paths, IPs or tokens.",
    "Archivos TXT": "TXT files",
    "Notas, listados y archivos de texto plano accesibles.": "Notes, listings and accessible plain-text files.",
    "Archivos .env": ".env files",
    "Variables de entorno con credenciales de base de datos.": "Environment variables with database credentials.",
    "Respaldos (.bak/.old)": "Backups (.bak/.old)",
    "Copias de seguridad servidas sin protección.": "Backup copies served without protection.",
    "Hojas de cálculo": "Spreadsheets",
    "Planillas con correos, contactos o datos internos.": "Spreadsheets with emails, contacts or internal data.",
    "Documentos PDF": "PDF documents",
    "PDFs indexados: manuales, reportes, documentación.": "Indexed PDFs: manuals, reports, documentation.",
    "Documentos ofimáticos": "Office documents",
    "Word, Excel, PowerPoint y CSV indexados: reportes, listados y datos internos.": "Indexed Word, Excel, PowerPoint and CSV: reports, listings and internal data.",
    "Índice de directorio": "Directory index",
    "Listados de carpetas con navegación abierta activada.": "Folder listings with open browsing enabled.",
    "Directorio padre": "Parent directory",
    "Listados clásicos de Apache/Nginx sin índice.": "Classic Apache/Nginx listings without an index.",
    "Índice con backups": "Index with backups",
    "Carpetas abiertas que contienen respaldos.": "Open folders containing backups.",
    "Índice con SQL": "Index with SQL",
    "Directorios abiertos que exponen volcados de BD.": "Open directories exposing DB dumps.",
    "Índice de uploads": "Uploads index",
    "Carpetas de subidas sin listado deshabilitado.": "Upload folders with listing not disabled.",
    "Servidores FTP abiertos": "Open FTP servers",
    "Listados de servidores FTP accesibles por la web.": "FTP server listings reachable over the web.",
    "Carpetas de fotos (DCIM)": "Photo folders (DCIM)",
    "Directorios DCIM de cámaras o móviles con imágenes expuestas.": "DCIM directories from cameras or phones with exposed images.",
    "wp-content expuesto": "Exposed wp-content",
    "Rutas de temas, plugins y uploads de WordPress.": "WordPress theme, plugin and upload paths.",
    "wp-config.php": "wp-config.php",
    "Archivo de configuración con credenciales de BD de WP.": "Config file with WordPress DB credentials.",
    "Panel wp-admin": "wp-admin panel",
    "Acceso al panel de administración de WordPress.": "Access to the WordPress admin panel.",
    "Uploads de WP": "WP uploads",
    "Archivos subidos, a veces con documentos privados.": "Uploaded files, sometimes with private documents.",
    "Login de WP": "WP login",
    "Formulario de inicio de sesión de WordPress.": "WordPress sign-in form.",
    "Debug log de WP": "WP debug log",
    "Log de depuración que puede filtrar rutas y errores.": "Debug log that may leak paths and errors.",
    "Credenciales en uploads": "Credentials in uploads",
    "Archivos .txt en uploads de WordPress con usuarios y contraseñas.": ".txt files in WordPress uploads with usernames and passwords.",
    "wp-content / wp-includes": "wp-content / wp-includes",
    "Rutas internas de WordPress que revelan temas, plugins y versiones.": "Internal WordPress paths revealing themes, plugins and versions.",
    "Páginas de login": "Login pages",
    "URLs que contienen formularios de autenticación.": "URLs containing authentication forms.",
    "Título \"login\"": "\"login\" title",
    "Páginas cuyo título indica inicio de sesión.": "Pages whose title indicates a sign-in.",
    "Sign in": "Sign in",
    "Variantes en inglés de páginas de acceso.": "English variants of access pages.",
    "Portal de usuario": "User portal",
    "Rutas de login típicas de Drupal y CMS similares.": "Login paths typical of Drupal and similar CMSs.",
    "Acceso corporativo": "Corporate access",
    "Portales internos, intranets y accesos VPN.": "Internal portals, intranets and VPN access.",
    "Rutas /admin": "/admin paths",
    "URLs que contienen el segmento admin.": "URLs containing the admin segment.",
    "Panel de administración": "Admin panel",
    "Títulos que apuntan a consolas de administración.": "Titles pointing to admin consoles.",
    "Administrator (Joomla)": "Administrator (Joomla)",
    "Backend de administración de Joomla.": "Joomla admin backend.",
    "phpMyAdmin": "phpMyAdmin",
    "Interfaces phpMyAdmin accesibles públicamente.": "Publicly accessible phpMyAdmin interfaces.",
    "cPanel / WHM": "cPanel / WHM",
    "Paneles de hosting expuestos en sus puertos típicos.": "Hosting panels exposed on their typical ports.",
    "Adminer": "Adminer",
    "Gestor de BD Adminer accesible sin restricción.": "Adminer DB manager accessible without restriction.",
    "Acceso combinado": "Combined access",
    "Busca de una sola pasada páginas de login, admin y dashboards.": "Finds login, admin and dashboard pages in one pass.",
    "Login ASP": "ASP login",
    "Página clásica de acceso a paneles en ASP.": "Classic ASP panel access page.",
    "Contraseñas en logs": "Passwords in logs",
    "Logs que registran credenciales en texto plano.": "Logs recording credentials in plain text.",
    "SQL con password": "SQL with password",
    "Volcados de BD que incluyen hashes o contraseñas.": "DB dumps including hashes or passwords.",
    "Repositorio .git": ".git repository",
    "Carpeta .git expuesta: historial y a veces secretos.": "Exposed .git folder: history and sometimes secrets.",
    "web.config": "web.config",
    "Configuración de IIS/ASP.NET con cadenas de conexión.": "IIS/ASP.NET config with connection strings.",
    "Claves privadas": "Private keys",
    "Claves SSH/TLS privadas servidas por error.": "Private SSH/TLS keys served by mistake.",
    "Variables de entorno": "Environment variables",
    "Archivos .env con API keys y secretos.": ".env files with API keys and secrets.",
    "Config .inc MySQL": "MySQL .inc config",
    "Archivos .inc con cadenas de conexión mysql_connect().": ".inc files with mysql_connect() connection strings.",
    "WS_FTP (ini)": "WS_FTP (ini)",
    "Configuración de WS_FTP con contraseñas almacenadas.": "WS_FTP config with stored passwords.",
    "Texto con accesos": "Text with credentials",
    "Archivos de texto que contienen credenciales o datos de acceso.": "Text files containing credentials or access data.",
    "Tabla SQL con contraseñas": "SQL table with passwords",
    "Volcados SQL cuyo esquema incluye un campo de contraseña.": "SQL dumps whose schema includes a password field.",
    "password.txt expuesto": "Exposed password.txt",
    "Directorios abiertos que exponen un archivo password.txt.": "Open directories exposing a password.txt file.",
    "Contraseña por defecto/inicial": "Default/initial password",
    "Páginas o documentos que revelan contraseñas iniciales o por defecto.": "Pages or documents revealing initial or default passwords.",
    "Export LDAP (.ldif)": "LDAP export (.ldif)",
    "Exportaciones de directorios LDAP con usuarios y atributos.": "LDAP directory exports with users and attributes.",
    "Clave RSA privada": "Private RSA key",
    "Claves RSA privadas filtradas asociadas al dominio.": "Leaked private RSA keys tied to the domain.",
    "Clave OpenSSH privada": "Private OpenSSH key",
    "Claves OpenSSH privadas expuestas.": "Exposed private OpenSSH keys.",
    "api_key en texto": "api_key in text",
    "Menciones de api_key junto al dominio en páginas indexadas.": "Mentions of api_key next to the domain on indexed pages.",
    "client_secret": "client_secret",
    "Secretos de cliente OAuth filtrados.": "Leaked OAuth client secrets.",
    "access_token": "access_token",
    "Tokens de acceso expuestos en páginas indexadas.": "Access tokens exposed on indexed pages.",
    "Errores de SQL": "SQL errors",
    "Mensajes que revelan inyección SQL o esquema de BD.": "Messages revealing SQL injection or DB schema.",
    "mysql_connect()": "mysql_connect()",
    "Errores de PHP que filtran credenciales o rutas.": "PHP errors leaking credentials or paths.",
    "Fatal error PHP": "PHP fatal error",
    "Trazas de error que exponen rutas del servidor.": "Error traces exposing server paths.",
    "Warnings de PHP": "PHP warnings",
    "Inclusiones fallidas que revelan estructura de archivos.": "Failed includes revealing file structure.",
    "Correos del dominio": "Domain emails",
    "Páginas del sitio que muestran direcciones de correo del dominio.": "Site pages showing the domain's email addresses.",
    "Menciones del correo (fuera del sitio)": "Email mentions (off-site)",
    "Dónde aparecen correos del dominio en otros sitios: foros, filtraciones, pastes.": "Where domain emails appear on other sites: forums, leaks, pastes.",
    "Correo en pastes y repos": "Email in pastes and repos",
    "Correos del dominio filtrados en Pastebin, GitHub o GitLab.": "Domain emails leaked on Pastebin, GitHub or GitLab.",
    "Correos en listados y archivos": "Emails in listings and files",
    "Planillas y textos indexados que contienen correos del dominio.": "Indexed spreadsheets and texts containing domain emails.",
    "Usuario en plataformas": "Username across platforms",
    "Rastrea un nombre de usuario en Reddit, Pastebin y GitHub. Reemplaza USUARIO en el constructor.": "Tracks a username on Reddit, Pastebin and GitHub. Replace USUARIO in the builder.",
    "Nombre en redes sociales": "Name on social media",
    "Perfiles y menciones de una persona en las principales redes. Reemplaza NOMBRE APELLIDO.": "Profiles and mentions of a person on major networks. Replace NOMBRE APELLIDO.",
    "Perfiles de LinkedIn": "LinkedIn profiles",
    "Perfiles personales en LinkedIn. Reemplaza NOMBRE APELLIDO.": "Personal LinkedIn profiles. Replace NOMBRE APELLIDO.",
    "Empresas en LinkedIn": "Companies on LinkedIn",
    "Empresas por sector o rubro en LinkedIn. Reemplaza SECTOR.": "Companies by sector on LinkedIn. Replace SECTOR.",
    "Currículums con contacto": "Résumés with contact info",
    "CVs indexados con teléfono y correo. Añade un nombre o site:dominio para acotar.": "Indexed CVs with phone and email. Add a name or site:domain to narrow.",
    "Búsqueda por teléfono": "Phone number search",
    "Rastrea un número en la web. Reemplaza TELEFONO (y el prefijo +51 si aplica).": "Tracks a number on the web. Replace TELEFONO (and the +51 prefix if applicable).",
    "Empleados en LinkedIn": "Employees on LinkedIn",
    "Empleados de la organización indexados en LinkedIn (recon de personal).": "Organization employees indexed on LinkedIn (staff recon).",
    "Paquete de respaldos": "Backup bundle",
    "Múltiples extensiones de copia de seguridad en una sola consulta.": "Multiple backup extensions in a single query.",
    "Paquete de configuración": "Config bundle",
    "Archivos de configuración de distintos formatos indexados.": "Indexed config files in various formats.",
    "Paquete de base de datos": "Database bundle",
    "Volcados y archivos de base de datos (SQL, dBase, Access).": "Database dumps and files (SQL, dBase, Access).",
    "Archivos de instalación": "Install files",
    "Rutas de instalación/configuración que revelan versiones y rutas internas.": "Install/config paths revealing versions and internal paths.",
    "phpinfo()": "phpinfo()",
    "Páginas phpinfo que exponen configuración y rutas del servidor.": "phpinfo pages exposing server config and paths.",
    "Mapeo de subdominios": "Subdomain mapping",
    "Subdominios indexados del objetivo (superficie de ataque).": "Indexed subdomains of the target (attack surface).",
    "Subdominios anidados": "Nested subdomains",
    "Subdominios de segundo nivel indexados.": "Indexed second-level subdomains.",
    "Superficie de API": "API surface",
    "Endpoints y rutas de API indexadas.": "Indexed API endpoints and paths.",
    "GraphQL": "GraphQL",
    "Endpoints GraphQL, a menudo con introspección abierta.": "GraphQL endpoints, often with open introspection.",
    "API REST (v1/v2)": "REST API (v1/v2)",
    "Rutas versionadas de API REST.": "Versioned REST API paths.",
    "Archivos JavaScript": "JavaScript files",
    "JS del front que puede filtrar endpoints, claves o configuración.": "Front-end JS that may leak endpoints, keys or config.",
    "Entornos dev/staging": "Dev/staging environments",
    "Entornos de desarrollo o pruebas expuestos públicamente.": "Dev or test environments exposed publicly.",
    "Documentación de API": "API documentation",
    "Swagger/OpenAPI que describe toda la superficie de la API.": "Swagger/OpenAPI describing the whole API surface.",
    "Buckets S3 / GCP": "S3 / GCP buckets",
    "Buckets de almacenamiento en la nube asociados al dominio.": "Cloud storage buckets associated with the domain.",
    "Dashboard Traefik": "Traefik dashboard",
    "Panel de Traefik expuesto en el puerto típico 8080.": "Traefik panel exposed on the typical port 8080.",
    "Jenkins": "Jenkins",
    "Dashboards de Jenkins accesibles públicamente.": "Publicly accessible Jenkins dashboards.",
    "Repositorios de código": "Code repositories",
    "Menciones del dominio en repos públicos: código, configs, secretos.": "Domain mentions in public repos: code, configs, secrets.",
    "Pastebin y pastes": "Pastebin and pastes",
    "Datos del dominio pegados en sitios de paste.": "Domain data pasted on paste sites.",
    "Trello / Atlassian": "Trello / Atlassian",
    "Tableros y espacios de gestión que mencionan el dominio.": "Boards and management spaces mentioning the domain.",
    "Stack Overflow": "Stack Overflow",
    "Preguntas que exponen configuración o errores del dominio.": "Questions exposing the domain's config or errors.",
    "Sitios de code share": "Code-share sites",
    "Fragmentos de código compartidos que mencionan el dominio.": "Shared code snippets mentioning the domain.",
    "Secretos en terceros": "Secrets on third parties",
    "Barrido de plataformas donde suelen filtrarse secretos del dominio.": "Sweep of platforms where domain secrets tend to leak.",
    "Open redirects": "Open redirects",
    "Parámetros candidatos a redirección abierta.": "Parameters that are open-redirect candidates.",
    "Directory listing": "Directory listing",
    "Listados de directorio con navegación abierta.": "Directory listings with open browsing.",
    "Apache Struts": "Apache Struts",
    "Extensiones típicas de Apache Struts (históricamente vulnerable a RCE).": "Extensions typical of Apache Struts (historically vulnerable to RCE).",
    "Carpeta .git expuesta": "Exposed .git folder",
    "Repositorios .git servidos por la web: historial de código y a veces secretos.": "Web-served .git repositories: code history and sometimes secrets.",
    "Archivos de configuración": "Config files",
    "Barrido amplio de formatos de configuración indexados.": "Broad sweep of indexed config formats.",
    "Archivos de base de datos": "Database files",
    // Aviso legal
    "Estas consultas solo exponen contenido que Google ya tiene indexado. ": "These queries only surface content search engines have already indexed. ",
    "Úsalas únicamente sobre dominios de tu propiedad o con autorización escrita": "Use them only on domains you own or have written authorization for",
    " (pentest, bug bounty, auditoría). El acceso no autorizado a sistemas o datos ajenos es ilegal en la mayoría de jurisdicciones.": " (pentest, bug bounty, audit). Unauthorized access to systems or data belonging to others is illegal in most jurisdictions."
  }
};
let lang = "en";
function tr(s) { if (s == null) return s; if (lang === "es") return s; const d = T[lang]; return (d && d[s] !== undefined) ? d[s] : s; }

/* ---------------- Buscadores ---------------- */
const ENGINES = [
  { id: "google", name: "Google", short: "G", color: "#4285f4", url: "https://www.google.com/search?num=50&q=" },
  { id: "bing", name: "Bing", short: "b", color: "#00897b", url: "https://www.bing.com/search?q=" },
  { id: "duckduckgo", name: "DuckDuckGo", short: "D", color: "#de5833", url: "https://duckduckgo.com/?q=" },
  { id: "brave", name: "Brave", short: "Br", color: "#fb542b", url: "https://search.brave.com/search?q=" },
  { id: "startpage", name: "Startpage", short: "S", color: "#6c4ee8", url: "https://www.startpage.com/sp/search?query=" },
  { id: "yahoo", name: "Yahoo", short: "Y!", color: "#6001d2", url: "https://search.yahoo.com/search?p=" },
  { id: "ecosia", name: "Ecosia", short: "Ec", color: "#2e8b57", url: "https://www.ecosia.org/search?q=" },
  { id: "yandex", name: "Yandex", short: "Ya", color: "#ff3333", url: "https://yandex.com/search/?text=" }
];
function engineUrl(engine, full) { return engine.url + encodeURIComponent(full); }

/* ---------------- Asistente IA ---------------- */
const AI_PROVIDERS = {
  gemini: { label: "Gemini (Google)", model: "gemini-2.0-flash", base: "", needsBase: false },
  claude: { label: "Claude (Anthropic)", model: "claude-3-5-haiku-latest", base: "", needsBase: false },
  openai: { label: "OpenAI", model: "gpt-4o-mini", base: "", needsBase: false },
  custom: { label: "Personalizada / IA local", model: "", base: "http://localhost:11434/v1", needsBase: true }
};
let aiProvider = "gemini", aiKey = "", aiModel = "", aiBase = "", aiDraft = "", aiBusy = false, aiCfgOpen = false;
let aiMessages = []; // {role:'user'|'assistant', content}
function aiLoad() {
  try {
    aiProvider = localStorage.getItem('dork-ai-provider') || 'gemini';
    if (!AI_PROVIDERS[aiProvider]) aiProvider = 'gemini';
    aiKey = localStorage.getItem('dork-ai-key-' + aiProvider) || '';
    aiModel = localStorage.getItem('dork-ai-model-' + aiProvider) || '';
    aiBase = localStorage.getItem('dork-ai-base-' + aiProvider) || '';
  } catch (e) { }
}
function aiSystemPrompt() {
  return "Eres un generador experto de Google dorks para reconocimiento AUTORIZADO (pentest, bug bounty o auditoria con permiso). "
    + "Dada la necesidad del usuario, responde con 1 a 5 consultas de Google dork efectivas usando operadores (site:, inurl:, intitle:, filetype:, ext:, intext:, OR y comillas). "
    + "Devuelve cada dork en su propio bloque de codigo con triple backtick y una breve explicacion de una linea. "
    + "Los dorks solo descubren contenido ya indexado: no incluyas exploits, malware ni nada ilegal. Responde en el idioma del usuario.";
}
async function callAI() {
  const p = AI_PROVIDERS[aiProvider];
  const model = (aiModel || p.model);
  const sys = aiSystemPrompt();
  if (aiProvider === 'claude') {
    const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': aiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' }, body: JSON.stringify({ model, max_tokens: 1024, system: sys, messages: aiMessages.map(m => ({ role: m.role, content: m.content })) }) });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text()).slice(0, 240));
    const j = await r.json(); return (j.content || []).map(b => b.text || '').join('').trim();
  }
  if (aiProvider === 'gemini') {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(aiKey);
    const contents = aiMessages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
    const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ system_instruction: { parts: [{ text: sys }] }, contents }) });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text()).slice(0, 240));
    const j = await r.json(); return ((((j.candidates || [])[0] || {}).content || {}).parts || []).map(x => x.text || '').join('').trim();
  }
  // openai / custom (compatible con OpenAI)
  let base = (aiProvider === 'custom' ? (aiBase || p.base) : 'https://api.openai.com/v1').replace(/\/+$/, '');
  const headers = { 'content-type': 'application/json' };
  if (aiKey) headers['authorization'] = 'Bearer ' + aiKey;
  const r = await fetch(base + '/chat/completions', { method: 'POST', headers, body: JSON.stringify({ model, messages: [{ role: 'system', content: sys }].concat(aiMessages.map(m => ({ role: m.role, content: m.content }))) }) });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text()).slice(0, 240));
  const j = await r.json(); const m = ((j.choices || [])[0] || {}).message || {}; return (m.content || '').trim();
}
async function sendAI() {
  if (aiBusy) return;
  const text = aiDraft.trim();
  if (!text) return;
  if (aiProvider !== 'custom' && !aiKey) { aiMessages.push({ role: 'assistant', content: '⚠️ ' + tr('Falta la clave API.') }); aiCfgOpen = true; renderHomeKeepScroll(); return; }
  aiMessages.push({ role: 'user', content: text });
  aiDraft = ''; aiBusy = true; renderHomeKeepScroll();
  try {
    const reply = await callAI();
    aiMessages.push({ role: 'assistant', content: reply || '…' });
  } catch (e) {
    aiMessages.push({ role: 'assistant', content: '⚠️ ' + tr('Error al consultar la IA:') + ' ' + ((e && e.message) ? e.message : e) });
  }
  aiBusy = false; renderHomeKeepScroll();
}
function renderHomeKeepScroll() { renderHome(); const t = document.getElementById('aiTranscript'); if (t) t.scrollTop = t.scrollHeight; }
function aiSaveCfg() {
  const provEl = document.getElementById('aiProvider'); if (provEl) aiProvider = provEl.value;
  const modEl = document.getElementById('aiModel'); aiModel = modEl ? modEl.value.trim() : aiModel;
  const keyEl = document.getElementById('aiKey'); aiKey = keyEl ? keyEl.value.trim() : aiKey;
  const baseEl = document.getElementById('aiBase'); if (baseEl) aiBase = baseEl.value.trim();
  try {
    localStorage.setItem('dork-ai-provider', aiProvider);
    localStorage.setItem('dork-ai-key-' + aiProvider, aiKey);
    localStorage.setItem('dork-ai-model-' + aiProvider, aiModel);
    localStorage.setItem('dork-ai-base-' + aiProvider, aiBase);
  } catch (e) { }
  aiCfgOpen = false; renderHomeKeepScroll();
}
function aiProviderChange(sel) {
  aiProvider = sel.value;
  try {
    aiKey = localStorage.getItem('dork-ai-key-' + aiProvider) || '';
    aiModel = localStorage.getItem('dork-ai-model-' + aiProvider) || '';
    aiBase = localStorage.getItem('dork-ai-base-' + aiProvider) || '';
  } catch (e) { aiKey = ''; aiModel = ''; aiBase = ''; }
  aiCfgOpen = true; renderHomeKeepScroll();
}
function aiRenderContent(content) {
  const parts = String(content).split('```');
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      const code = parts[i].replace(/^[a-zA-Z0-9_-]*\n/, '').trim();
      html += `<div class="ai-code"><code>${esc(code)}</code><div class="ai-code-acts"><button class="ai-mini" data-copy="${esc(code)}">${esc(tr('Copiar'))}</button><a class="ai-mini" href="https://www.google.com/search?num=50&q=${encodeURIComponent(code)}" target="_blank" rel="noopener noreferrer">${esc(tr('Abrir en Google'))}</a></div></div>`;
    } else {
      const t = esc(parts[i]).replace(/\n/g, '<br>');
      if (t.trim()) html += `<div class="ai-text">${t}</div>`;
    }
  }
  return html || `<div class="ai-text">${esc(content)}</div>`;
}
function aiCardHTML() {
  const p = AI_PROVIDERS[aiProvider];
  const model = aiModel || p.model;
  const provOpts = Object.entries(AI_PROVIDERS).map(([k, v]) => `<option value="${k}" ${k === aiProvider ? 'selected' : ''}>${esc(tr(v.label))}</option>`).join('');
  const keyPh = aiProvider === 'gemini' ? 'AIza…' : (aiProvider === 'claude' ? 'sk-ant-…' : (aiProvider === 'openai' ? 'sk-…' : '—'));
  const cfg = aiCfgOpen ? `
    <div class="ai-cfg">
      <div class="ai-cfg-row">
        <label>${esc(tr('Proveedor'))}<select id="aiProvider">${provOpts}</select></label>
        <label>${esc(tr('Modelo'))}<input id="aiModel" type="text" value="${esc(model)}" placeholder="${esc(p.model || '')}" autocomplete="off" spellcheck="false"></label>
      </div>
      <div class="ai-cfg-row">
        <label>${esc(tr('Clave API'))}<input id="aiKey" type="password" value="${esc(aiKey)}" placeholder="${keyPh}" autocomplete="off"></label>
        ${p.needsBase ? `<label>${esc(tr('URL base'))}<input id="aiBase" type="text" value="${esc(aiBase || p.base)}" placeholder="http://localhost:11434/v1" autocomplete="off" spellcheck="false"></label>` : ''}
      </div>
      <div class="ai-cfg-foot"><span class="ai-hint">${esc(tr('La clave se guarda solo en este navegador.'))}</span><button class="ai-mini solid" id="aiSave">${esc(tr('Guardar'))}</button></div>
    </div>` : '';
  const transcript = aiMessages.length ? aiMessages.map(m => `
      <div class="ai-msg ${m.role}">
        <span class="ai-who">${esc(m.role === 'user' ? tr('Tú') : tr('IA'))}</span>
        <div class="ai-bubble">${m.role === 'assistant' ? aiRenderContent(m.content) : esc(m.content).replace(/\n/g, '<br>')}</div>
      </div>`).join('') : `<div class="ai-empty">${esc(tr('Configura un proveedor y una clave API para empezar.'))}</div>`;
  const busy = aiBusy ? `<div class="ai-msg assistant"><span class="ai-who">${esc(tr('IA'))}</span><div class="ai-bubble ai-thinking">${esc(tr('Pensando…'))}</div></div>` : '';
  return `<div class="ai-card">
    <div class="ai-head">
      <div class="ai-title"><span class="ai-badge">AI</span><div style="min-width:0"><div class="ai-h1">${esc(tr('Asistente IA'))}</div><div class="ai-h2">${esc(tr('Genera dorks con IA. Describe tu objetivo y la IA propondrá consultas.'))}</div></div></div>
      <div class="ai-head-acts">
        <span class="ai-prov">${esc(tr(p.label))}</span>
        <button class="ai-mini" id="aiClear" title="${esc(tr('Limpiar chat'))}">${esc(tr('Limpiar chat'))}</button>
        <button class="ai-mini" id="aiCfgBtn">${esc(tr('Configurar'))}</button>
      </div>
    </div>
    ${cfg}
    <div class="ai-transcript" id="aiTranscript">${transcript}${busy}</div>
    <div class="ai-input">
      <textarea id="aiInput" rows="2" placeholder="${esc(tr('Escribe tu objetivo… (ej. encontrar archivos .env de ejemplo.com)'))}"></textarea>
      <button class="ai-send" id="aiSend" ${aiBusy ? 'disabled' : ''}>${esc(tr('Enviar'))}</button>
    </div>
    <div class="ai-foot">${esc(tr('Solo para objetivos autorizados. La IA puede equivocarse; revisa cada consulta.'))}</div>
  </div>`;
}
function wireChat() {
  const send = document.getElementById('aiSend'); if (!send) return;
  const ta = document.getElementById('aiInput');
  if (ta) { ta.value = aiDraft; ta.addEventListener('input', () => { aiDraft = ta.value; }); ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAI(); } }); }
  send.addEventListener('click', sendAI);
  const cfgBtn = document.getElementById('aiCfgBtn'); if (cfgBtn) cfgBtn.addEventListener('click', () => { aiCfgOpen = !aiCfgOpen; renderHomeKeepScroll(); });
  const saveBtn = document.getElementById('aiSave'); if (saveBtn) saveBtn.addEventListener('click', aiSaveCfg);
  const clrBtn = document.getElementById('aiClear'); if (clrBtn) clrBtn.addEventListener('click', () => { aiMessages = []; renderHomeKeepScroll(); });
  const provSel = document.getElementById('aiProvider'); if (provSel) provSel.addEventListener('change', () => aiProviderChange(provSel));
  document.querySelectorAll('#detail .ai-code-acts [data-copy]').forEach(b => b.addEventListener('click', () => copyText(b.getAttribute('data-copy'))));
  const t = document.getElementById('aiTranscript'); if (t) t.scrollTop = t.scrollHeight;
}

/* ---------------- Datos ---------------- */
const CATS = {
  infra: { label: "Infraestructura", color: "#ff5555" },
  archivos: { label: "Archivos expuestos", color: "#2dd4bf" },
  config: { label: "Configuración y BD", color: "#ff6600" },
  directorio: { label: "Listado de directorios", color: "#60a5fa" },
  wordpress: { label: "WordPress", color: "#a78bfa" },
  login: { label: "Páginas de login", color: "#f0abfc" },
  admin: { label: "Paneles de administración", color: "#fb923c" },
  credenciales: { label: "Credenciales e info sensible", color: "#f87171" },
  errores: { label: "Errores y debug", color: "#fbbf24" },
  correos: { label: "Correos y contactos", color: "#38bdf8" },
  osint: { label: "Personas y OSINT", color: "#a3e635" },
  recon: { label: "Recon y superficie", color: "#00ccff" },
  cloud: { label: "Cloud y DevOps", color: "#fb923c" },
  terceros: { label: "Fugas en terceros", color: "#8b5cf6" },
  vulns: { label: "Vulnerabilidades", color: "#f43f5e" }
};

const DORKS = [
  { cat: "archivos", sev: "info", title: "Archivos PHP", q: 'filetype:php', note: "Scripts y páginas PHP indexados en el objetivo." },
  { cat: "archivos", sev: "alta", title: "Volcados SQL", q: 'filetype:sql', note: "Dumps y respaldos de base de datos, a menudo con datos reales." },
  { cat: "archivos", sev: "info", title: "Archivos XML", q: 'filetype:xml', note: "Configuraciones, sitemaps y feeds en XML." },
  { cat: "archivos", sev: "media", title: "Archivos JSON", q: 'filetype:json', note: "Respuestas de API, manifiestos y archivos de configuración." },
  { cat: "archivos", sev: "media", title: "Archivos de log", q: 'filetype:log', note: "Registros de aplicación que pueden filtrar rutas, IPs o tokens." },
  { cat: "archivos", sev: "info", title: "Archivos TXT", q: 'filetype:txt', note: "Notas, listados y archivos de texto plano accesibles." },
  { cat: "archivos", sev: "alta", title: "Archivos .env", q: 'ext:env intext:DB_PASSWORD', note: "Variables de entorno con credenciales de base de datos." },
  { cat: "archivos", sev: "media", title: "Respaldos (.bak/.old)", q: 'ext:bak OR ext:old OR ext:backup', note: "Copias de seguridad servidas sin protección." },
  { cat: "archivos", sev: "media", title: "Hojas de cálculo", q: 'filetype:xls OR filetype:xlsx intext:email', note: "Planillas con correos, contactos o datos internos." },
  { cat: "archivos", sev: "info", title: "Documentos PDF", q: 'filetype:pdf', note: "PDFs indexados: manuales, reportes, documentación." },
  { cat: "archivos", sev: "media", title: "Documentos ofimáticos", q: '(ext:doc OR ext:docx OR ext:xls OR ext:xlsx OR ext:ppt OR ext:pptx OR ext:csv)', note: "Word, Excel, PowerPoint y CSV indexados: reportes, listados y datos internos." },

  { cat: "directorio", sev: "media", title: "Índice de directorio", q: 'intitle:"index of"', note: "Listados de carpetas con navegación abierta activada." },
  { cat: "directorio", sev: "media", title: "Directorio padre", q: 'intitle:"index of" "parent directory"', note: "Listados clásicos de Apache/Nginx sin índice." },
  { cat: "directorio", sev: "alta", title: "Índice con backups", q: 'intitle:"index of" (backup OR bak OR old)', note: "Carpetas abiertas que contienen respaldos." },
  { cat: "directorio", sev: "alta", title: "Índice con SQL", q: 'intitle:"index of" (".sql" OR "dump.sql")', note: "Directorios abiertos que exponen volcados de BD." },
  { cat: "directorio", sev: "media", title: "Índice de uploads", q: 'intitle:"index of" inurl:uploads', note: "Carpetas de subidas sin listado deshabilitado." },
  { cat: "directorio", sev: "media", title: "Servidores FTP abiertos", q: 'intitle:"index of" inurl:ftp', note: "Listados de servidores FTP accesibles por la web." },
  { cat: "directorio", sev: "media", title: "Carpetas de fotos (DCIM)", q: 'intitle:"index of" inurl:dcim', note: "Directorios DCIM de cámaras o móviles con imágenes expuestas." },

  { cat: "wordpress", sev: "info", title: "wp-content expuesto", q: 'inurl:wp-content', note: "Rutas de temas, plugins y uploads de WordPress." },
  { cat: "wordpress", sev: "alta", title: "wp-config.php", q: 'inurl:wp-config.php', note: "Archivo de configuración con credenciales de BD de WP." },
  { cat: "wordpress", sev: "media", title: "Panel wp-admin", q: 'inurl:/wp-admin/', note: "Acceso al panel de administración de WordPress." },
  { cat: "wordpress", sev: "media", title: "Uploads de WP", q: 'inurl:wp-content/uploads', note: "Archivos subidos, a veces con documentos privados." },
  { cat: "wordpress", sev: "info", title: "Login de WP", q: 'inurl:wp-login.php', note: "Formulario de inicio de sesión de WordPress." },
  { cat: "wordpress", sev: "media", title: "Debug log de WP", q: 'inurl:wp-content/debug.log', note: "Log de depuración que puede filtrar rutas y errores." },
  { cat: "wordpress", sev: "alta", title: "Credenciales en uploads", q: 'inurl:/wp-content/uploads/ ext:txt (intext:username intext:password)', note: "Archivos .txt en uploads de WordPress con usuarios y contraseñas." },
  { cat: "wordpress", sev: "info", title: "wp-content / wp-includes", q: '(inurl:wp-content OR inurl:wp-includes)', note: "Rutas internas de WordPress que revelan temas, plugins y versiones." },

  { cat: "login", sev: "info", title: "Páginas de login", q: 'inurl:login', note: "URLs que contienen formularios de autenticación." },
  { cat: "login", sev: "info", title: "Título \"login\"", q: 'intitle:"login"', note: "Páginas cuyo título indica inicio de sesión." },
  { cat: "login", sev: "info", title: "Sign in", q: '(inurl:signin OR intitle:"sign in")', note: "Variantes en inglés de páginas de acceso." },
  { cat: "login", sev: "media", title: "Portal de usuario", q: 'inurl:/user/login', note: "Rutas de login típicas de Drupal y CMS similares." },
  { cat: "login", sev: "media", title: "Acceso corporativo", q: 'intitle:"login" (intranet OR portal OR vpn)', note: "Portales internos, intranets y accesos VPN." },

  { cat: "admin", sev: "media", title: "Rutas /admin", q: 'inurl:admin', note: "URLs que contienen el segmento admin." },
  { cat: "admin", sev: "media", title: "Panel de administración", q: 'intitle:"admin" (panel OR dashboard OR login)', note: "Títulos que apuntan a consolas de administración." },
  { cat: "admin", sev: "media", title: "Administrator (Joomla)", q: 'inurl:/administrator/', note: "Backend de administración de Joomla." },
  { cat: "admin", sev: "alta", title: "phpMyAdmin", q: 'intitle:"phpMyAdmin" "Welcome to phpMyAdmin"', note: "Interfaces phpMyAdmin accesibles públicamente." },
  { cat: "admin", sev: "alta", title: "cPanel / WHM", q: 'inurl::2082 OR inurl::2083 OR intitle:"cPanel"', note: "Paneles de hosting expuestos en sus puertos típicos." },
  { cat: "admin", sev: "media", title: "Adminer", q: 'intitle:"Adminer" inurl:adminer.php', note: "Gestor de BD Adminer accesible sin restricción." },
  { cat: "admin", sev: "media", title: "Acceso combinado", q: 'inurl:(login OR admin OR dashboard)', note: "Busca de una sola pasada páginas de login, admin y dashboards." },
  { cat: "admin", sev: "media", title: "Login ASP", q: 'inurl:/admin/login.asp', note: "Página clásica de acceso a paneles en ASP." },

  { cat: "credenciales", sev: "alta", title: "Contraseñas en logs", q: 'filetype:log intext:password', note: "Logs que registran credenciales en texto plano." },
  { cat: "credenciales", sev: "alta", title: "SQL con password", q: 'filetype:sql intext:password', note: "Volcados de BD que incluyen hashes o contraseñas." },
  { cat: "credenciales", sev: "alta", title: "Repositorio .git", q: 'inurl:/.git/config', note: "Carpeta .git expuesta: historial y a veces secretos." },
  { cat: "credenciales", sev: "alta", title: "web.config", q: 'filetype:config inurl:web.config', note: "Configuración de IIS/ASP.NET con cadenas de conexión." },
  { cat: "credenciales", sev: "media", title: "Claves privadas", q: 'filetype:pem OR filetype:key intext:"PRIVATE KEY"', note: "Claves SSH/TLS privadas servidas por error." },
  { cat: "credenciales", sev: "alta", title: "Variables de entorno", q: 'ext:env (intext:API_KEY OR intext:SECRET)', note: "Archivos .env con API keys y secretos." },
  { cat: "credenciales", sev: "alta", title: "Config .inc MySQL", q: 'filetype:inc intext:mysql_connect password -please -could -port', note: "Archivos .inc con cadenas de conexión mysql_connect()." },
  { cat: "credenciales", sev: "media", title: "WS_FTP (ini)", q: 'inurl:ws_ftp filetype:ini intext:pwd', note: "Configuración de WS_FTP con contraseñas almacenadas." },
  { cat: "credenciales", sev: "media", title: "Texto con accesos", q: 'filetype:txt (intext:password OR intext:contraseña OR intext:login)', note: "Archivos de texto que contienen credenciales o datos de acceso." },
  { cat: "credenciales", sev: "alta", title: "Tabla SQL con contraseñas", q: 'filetype:sql "# dumping data for table" "`PASSWORD` varchar"', note: "Volcados SQL cuyo esquema incluye un campo de contraseña." },
  { cat: "credenciales", sev: "alta", title: "password.txt expuesto", q: 'intitle:"index of" "password.txt"', note: "Directorios abiertos que exponen un archivo password.txt." },
  { cat: "credenciales", sev: "media", title: "Contraseña por defecto/inicial", q: '(intext:"default password is" OR intext:"su contraseña inicial es" OR "Your initial password is")', note: "Páginas o documentos que revelan contraseñas iniciales o por defecto." },
  { cat: "credenciales", sev: "media", title: "Export LDAP (.ldif)", q: 'ext:ldif', note: "Exportaciones de directorios LDAP con usuarios y atributos." },
  { cat: "credenciales", sev: "alta", noSite: true, title: "Clave RSA privada", q: 'intext:"BEGIN RSA PRIVATE KEY" "{dom}"', note: "Claves RSA privadas filtradas asociadas al dominio." },
  { cat: "credenciales", sev: "alta", noSite: true, title: "Clave OpenSSH privada", q: 'intext:"BEGIN OPENSSH PRIVATE KEY" "{dom}"', note: "Claves OpenSSH privadas expuestas." },
  { cat: "credenciales", sev: "alta", noSite: true, title: "api_key en texto", q: 'intext:"api_key" "{dom}"', note: "Menciones de api_key junto al dominio en páginas indexadas." },
  { cat: "credenciales", sev: "alta", noSite: true, title: "client_secret", q: 'intext:"client_secret" "{dom}"', note: "Secretos de cliente OAuth filtrados." },
  { cat: "credenciales", sev: "alta", noSite: true, title: "access_token", q: 'intext:"access_token" "{dom}"', note: "Tokens de acceso expuestos en páginas indexadas." },

  { cat: "errores", sev: "media", title: "Errores de SQL", q: 'intext:"you have an error in your sql syntax"', note: "Mensajes que revelan inyección SQL o esquema de BD." },
  { cat: "errores", sev: "media", title: "mysql_connect()", q: 'intext:"Warning: mysql_connect()"', note: "Errores de PHP que filtran credenciales o rutas." },
  { cat: "errores", sev: "info", title: "Fatal error PHP", q: 'intext:"Fatal error" ext:php', note: "Trazas de error que exponen rutas del servidor." },
  { cat: "errores", sev: "media", title: "Warnings de PHP", q: 'intext:"Warning: include" OR intext:"Warning: require"', note: "Inclusiones fallidas que revelan estructura de archivos." },

  { cat: "correos", sev: "media", title: "Correos del dominio", q: 'intext:"@{dom}"', note: "Páginas del sitio que muestran direcciones de correo del dominio." },
  { cat: "correos", sev: "info", noSite: true, title: "Menciones del correo (fuera del sitio)", q: '"@{dom}" -site:{dom}', note: "Dónde aparecen correos del dominio en otros sitios: foros, filtraciones, pastes." },
  { cat: "correos", sev: "media", noSite: true, title: "Correo en pastes y repos", q: 'intext:"@{dom}" (site:pastebin.com OR site:github.com OR site:gitlab.com)', note: "Correos del dominio filtrados en Pastebin, GitHub o GitLab." },
  { cat: "correos", sev: "info", title: "Correos en listados y archivos", q: '(filetype:xlsx OR filetype:csv OR filetype:txt) intext:"@{dom}"', note: "Planillas y textos indexados que contienen correos del dominio." },

  { cat: "osint", sev: "info", noSite: true, title: "Usuario en plataformas", q: '"USUARIO" (site:reddit.com OR site:pastebin.com OR site:github.com)', note: "Rastrea un nombre de usuario en Reddit, Pastebin y GitHub. Reemplaza USUARIO en el constructor." },
  { cat: "osint", sev: "info", noSite: true, title: "Nombre en redes sociales", q: '"NOMBRE APELLIDO" (site:facebook.com OR site:twitter.com OR site:instagram.com OR site:linkedin.com)', note: "Perfiles y menciones de una persona en las principales redes. Reemplaza NOMBRE APELLIDO." },
  { cat: "osint", sev: "info", noSite: true, title: "Perfiles de LinkedIn", q: 'site:linkedin.com/in "NOMBRE APELLIDO"', note: "Perfiles personales en LinkedIn. Reemplaza NOMBRE APELLIDO." },
  { cat: "osint", sev: "info", noSite: true, title: "Empresas en LinkedIn", q: 'site:linkedin.com/company "SECTOR"', note: "Empresas por sector o rubro en LinkedIn. Reemplaza SECTOR." },
  { cat: "osint", sev: "media", noSite: true, title: "Currículums con contacto", q: 'intitle:"curriculum vitae" ("teléfono" OR "e-mail")', note: "CVs indexados con teléfono y correo. Añade un nombre o site:dominio para acotar." },
  { cat: "osint", sev: "info", noSite: true, title: "Búsqueda por teléfono", q: '"+51 TELEFONO" OR "TELEFONO"', note: "Rastrea un número en la web. Reemplaza TELEFONO (y el prefijo +51 si aplica)." },
  { cat: "osint", sev: "info", noSite: true, title: "Empleados en LinkedIn", q: 'site:linkedin.com employees {dom}', note: "Empleados de la organización indexados en LinkedIn (recon de personal)." },

  { cat: "archivos", sev: "media", title: "Paquete de respaldos", q: '(ext:bkf OR ext:bkp OR ext:bak OR ext:old OR ext:backup)', note: "Múltiples extensiones de copia de seguridad en una sola consulta." },
  { cat: "archivos", sev: "media", title: "Paquete de configuración", q: '(ext:xml OR ext:conf OR ext:cnf OR ext:cfg OR ext:ini OR ext:env OR ext:reg OR ext:ora)', note: "Archivos de configuración de distintos formatos indexados." },
  { cat: "archivos", sev: "alta", title: "Paquete de base de datos", q: '(ext:sql OR ext:dbf OR ext:mdb)', note: "Volcados y archivos de base de datos (SQL, dBase, Access)." },
  { cat: "archivos", sev: "info", title: "Archivos de instalación", q: '(inurl:readme OR inurl:license OR inurl:install OR inurl:setup OR inurl:config)', note: "Rutas de instalación/configuración que revelan versiones y rutas internas." },
  { cat: "archivos", sev: "media", title: "phpinfo()", q: 'ext:php intitle:phpinfo "published by the PHP Group"', note: "Páginas phpinfo que exponen configuración y rutas del servidor." },

  { cat: "recon", sev: "media", noSite: true, title: "Mapeo de subdominios", q: 'site:*.{dom}', note: "Subdominios indexados del objetivo (superficie de ataque)." },
  { cat: "recon", sev: "info", noSite: true, title: "Subdominios anidados", q: 'site:*.*.{dom}', note: "Subdominios de segundo nivel indexados." },
  { cat: "recon", sev: "info", title: "Superficie de API", q: 'inurl:api', note: "Endpoints y rutas de API indexadas." },
  { cat: "recon", sev: "media", title: "GraphQL", q: 'inurl:graphql', note: "Endpoints GraphQL, a menudo con introspección abierta." },
  { cat: "recon", sev: "info", title: "API REST (v1/v2)", q: '(inurl:api/v1 OR inurl:api/v2 OR inurl:rest)', note: "Rutas versionadas de API REST." },
  { cat: "recon", sev: "info", title: "Archivos JavaScript", q: 'filetype:js', note: "JS del front que puede filtrar endpoints, claves o configuración." },
  { cat: "recon", sev: "media", title: "Entornos dev/staging", q: '(dev OR test OR staging OR sandbox)', note: "Entornos de desarrollo o pruebas expuestos públicamente." },
  { cat: "recon", sev: "media", title: "Documentación de API", q: '(swagger OR openapi)', note: "Swagger/OpenAPI que describe toda la superficie de la API." },

  { cat: "cloud", sev: "alta", noSite: true, title: "Buckets S3 / GCP", q: '(site:s3.amazonaws.com OR site:storage.googleapis.com OR site:amazonaws.com) "{dom}"', note: "Buckets de almacenamiento en la nube asociados al dominio." },
  { cat: "cloud", sev: "media", noSite: true, title: "Dashboard Traefik", q: 'intitle:traefik inurl:8080/dashboard "{dom}"', note: "Panel de Traefik expuesto en el puerto típico 8080." },
  { cat: "cloud", sev: "media", noSite: true, title: "Jenkins", q: 'intitle:"Dashboard [Jenkins]" "{dom}"', note: "Dashboards de Jenkins accesibles públicamente." },

  { cat: "terceros", sev: "media", noSite: true, title: "Repositorios de código", q: '(site:github.com OR site:gitlab.com OR site:bitbucket.org) "{dom}"', note: "Menciones del dominio en repos públicos: código, configs, secretos." },
  { cat: "terceros", sev: "media", noSite: true, title: "Pastebin y pastes", q: '(site:pastebin.com OR site:justpaste.it OR site:controlc.com) "{dom}"', note: "Datos del dominio pegados en sitios de paste." },
  { cat: "terceros", sev: "media", noSite: true, title: "Trello / Atlassian", q: '(site:trello.com OR site:*.atlassian.net) "{dom}"', note: "Tableros y espacios de gestión que mencionan el dominio." },
  { cat: "terceros", sev: "info", noSite: true, title: "Stack Overflow", q: 'site:stackoverflow.com "{dom}"', note: "Preguntas que exponen configuración o errores del dominio." },
  { cat: "terceros", sev: "info", noSite: true, title: "Sitios de code share", q: '(site:codeshare.io OR site:codepen.io OR site:jsfiddle.net OR site:ideone.com) "{dom}"', note: "Fragmentos de código compartidos que mencionan el dominio." },
  { cat: "terceros", sev: "alta", noSite: true, title: "Secretos en terceros", q: '(site:pastebin.com OR site:gitlab.com OR site:s3.amazonaws.com OR site:scribd.com) "{dom}"', note: "Barrido de plataformas donde suelen filtrarse secretos del dominio." },

  { cat: "vulns", sev: "media", title: "Open redirects", q: '(inurl:redir OR inurl:url OR inurl:redirect OR inurl:return OR inurl:src=http)', note: "Parámetros candidatos a redirección abierta." },
  { cat: "vulns", sev: "media", title: "Directory listing", q: 'intitle:"directory listing"', note: "Listados de directorio con navegación abierta." },
  { cat: "vulns", sev: "media", title: "Apache Struts", q: '(ext:action OR ext:do OR ext:struts)', note: "Extensiones típicas de Apache Struts (históricamente vulnerable a RCE)." },

  { cat: "infra", sev: "alta", noSite: true, title: "Carpeta .git expuesta", q: 'inurl:"/.git" {dom} -github', note: "Repositorios .git servidos por la web: historial de código y a veces secretos." },

  { cat: "config", sev: "media", title: "Archivos de configuración", q: '(ext:xml OR ext:conf OR ext:cnf OR ext:reg OR ext:inf OR ext:rdp OR ext:cfg OR ext:ini OR ext:env OR ext:ora)', note: "Barrido amplio de formatos de configuración indexados." },
  { cat: "config", sev: "alta", title: "Archivos de base de datos", q: '(ext:sql OR ext:dbf OR ext:mdb)', note: "Volcados y archivos de base de datos (SQL, dBase, Access)." }
];

/* ---------------- Estado + helpers ---------------- */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let scope = "site";
let activeCat = null;   // null = pantalla de inicio
let sevFilter = "all";
let activeDork = null;
let domainVal = "";

function countFor(cat) { return cat === "all" ? DORKS.length : DORKS.filter(d => d.cat === cat).length; }
function cleanDomain(d) { return d.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/\s+/g, ''); }
function sitePrefix() { const d = cleanDomain(domainVal); return (scope === "site" && d) ? ('site:' + d + ' ') : ''; }
function fillDom(q) { const d = cleanDomain(domainVal) || 'tudominio.com'; return q.replace(/\{dom\}/g, d); }
function buildFull(d) { const filled = fillDom(d.q); return (d.noSite ? filled : (sitePrefix() + filled)).trim(); }
function sevLabel(s) { return tr({ alta: 'Riesgo alto', media: 'Riesgo medio', info: 'Informativo' }[s]); }
function sevVar(s) { return { alta: '--danger', media: '--warn', info: '--info' }[s]; }

/* ---------------- Pane 1: bibliotecas ---------------- */
function renderLibs() {
  const rows = [`<button class="lib-item" data-cat="all" aria-current="${activeCat === 'all'}">
      <span class="li-dot" style="color:var(--accent)"></span>
      <span class="li-label">${esc(tr('Todas'))}</span>
      <span class="li-count">${DORKS.length}</span></button>`];
  for (const [k, v] of Object.entries(CATS)) {
    rows.push(`<button class="lib-item" data-cat="${k}" aria-current="${activeCat === k}">
      <span class="li-dot" style="color:${v.color}"></span>
      <span class="li-label">${esc(tr(v.label))}</span>
      <span class="li-count">${countFor(k)}</span></button>`);
  }
  const el = $('#libList');
  el.innerHTML = rows.join('');
  el.querySelectorAll('.lib-item').forEach(b => {
    b.addEventListener('click', () => {
      activeCat = b.dataset.cat;
      $('#globalSearch').value = ''; $('#filter').value = '';
      el.querySelectorAll('.lib-item').forEach(x => x.setAttribute('aria-current', x === b));
      renderDorks(true);
      if (window.matchMedia('(max-width:1040px)').matches) $('.pane.dorks').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ---------------- Pane 2: lista de dorks ---------------- */
function filteredDorks() {
  const gt = $('#globalSearch').value.trim().toLowerCase();
  const ft = $('#filter').value.trim().toLowerCase();
  return DORKS.filter(d => {
    if (!gt && activeCat !== "all" && d.cat !== activeCat) return false;
    if (sevFilter !== "all" && d.sev !== sevFilter) return false;
    if (gt || ft) {
      const hay = (d.title + ' ' + d.q + ' ' + d.note + ' ' + CATS[d.cat].label + ' ' + tr(d.title) + ' ' + tr(d.note) + ' ' + tr(CATS[d.cat].label)).toLowerCase();
      if (gt && !hay.includes(gt)) return false;
      if (ft && !hay.includes(ft)) return false;
    }
    return true;
  });
}
function renderDorks(resetSel) {
  const gt = $('#globalSearch').value.trim();
  const home = (activeCat === null && !gt);
  $('.shell').classList.toggle('home', home);
  if (home) { $('#dorkList').innerHTML = `<div class="list-empty">${esc(tr('Elige una biblioteca para ver sus dorks.'))}</div>`; activeDork = null; renderHome(); return; }

  const list = filteredDorks();
  const el = $('#dorkList');
  if (!list.length) {
    el.innerHTML = `<div class="list-empty">${esc(tr('Sin resultados. Prueba otro término o severidad.'))}</div>`;
    activeDork = null; renderDetail(); return;
  }
  if (resetSel || list.indexOf(activeDork) === -1) activeDork = list[0];
  el.innerHTML = list.map((d, i) => {
    const sv = sevVar(d.sev);
    return `<button class="dork-item" data-i="${i}" aria-current="${d === activeDork}">
      <span class="di-dot" style="background:var(${sv})"></span>
      <span class="di-label">${esc(tr(d.title))}</span></button>`;
  }).join('');
  el.querySelectorAll('.dork-item').forEach(b => {
    b.addEventListener('click', () => {
      activeDork = list[+b.dataset.i];
      el.querySelectorAll('.dork-item').forEach(x => x.setAttribute('aria-current', x === b));
      renderDetail();
      if (window.matchMedia('(max-width:1040px)').matches) $('.pane.detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  renderDetail();
}

/* ---------------- Pane 3: inicio (hero) ---------------- */
function renderHome() {
  const nLibs = Object.keys(CATS).length;
  const stat = (ico, label, num, sub) => `<div class="stat">
    <div class="stat-h"><span>${esc(tr(label))}</span><span class="si">${ico}</span></div>
    <div class="stat-n">${num}</div>
    <div class="stat-s">${esc(tr(sub))}</div></div>`;
  const icLib = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h11v15H4z"/><path d="M15 5h5v15h-5"/></svg>';
  const icDork = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7l4 5-4 5"/><path d="M13 17h6"/></svg>';
  const icEng = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  const icRisk = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>';
  $('#detail').innerHTML = `<div class="detail-in">
    <div class="hero-panel">
      <span class="hero-eyebrow">&gt;_ ${esc(tr('Catálogo de Google dorks'))}</span>
      <h2 class="hero-title">${esc(tr('Construye tus Google dorks sin perder el contexto.'))}</h2>
      <p class="hero-desc">${esc(tr('Explora cada biblioteca, arma la consulta operador por operador y ábrela en el buscador que prefieras. Todo en un solo lugar.'))}</p>
    </div>
    <div class="stats">
      ${stat(icLib, 'Bibliotecas', nLibs, 'categorías de recon')}
      ${stat(icDork, 'Dorks', DORKS.length, 'consultas listas para usar')}
      ${stat(icEng, 'Buscadores', ENGINES.length, 'destinos de búsqueda')}
      ${stat(icRisk, 'Niveles de riesgo', 3, 'alto · medio · informativo')}
    </div>
    ${aiCardHTML()}
    <div class="foot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <div><span>${esc(tr('Estas consultas solo exponen contenido que Google ya tiene indexado. '))}</span><b>${esc(tr('Úsalas únicamente sobre dominios de tu propiedad o con autorización escrita'))}</b><span>${esc(tr(' (pentest, bug bounty, auditoría). El acceso no autorizado a sistemas o datos ajenos es ilegal en la mayoría de jurisdicciones.'))}</span></div>
    </div>
  </div>`;
  wireChat();
}

/* ---------------- Pane 3: detalle / command preview ---------------- */
let currentFull = "";
function renderDetail() {
  const el = $('#detail');
  if (!activeDork) { renderHome(); return; }
  const d = activeDork, c = CATS[d.cat], sv = sevVar(d.sev);
  const engines = ENGINES.map((e, i) => `
    <a class="engine ${i === 0 ? 'primary' : ''}" data-eid="${e.id}" href="#" target="_blank" rel="noopener noreferrer">
      <span class="e-ico" style="background:${e.color}">${esc(e.short)}</span>
      ${esc(e.name)}
      <svg class="e-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
    </a>`).join('');

  el.innerHTML = `<div class="detail-in">
    <div class="crumb" style="color:${c.color}">${esc(tr(c.label))}</div>
    <h2 class="d-title">${esc(tr(d.title))}<span class="d-sev" style="color:var(${sv})"><span class="sdot"></span>${esc(sevLabel(d.sev))}</span></h2>
    <p class="d-note">${esc(tr(d.note))}</p>

    <div class="preview">
      <div class="preview-h">
        <span class="ttl"><span class="pr">&gt;_</span> ${esc(tr('Vista previa del comando'))}</span>
        <span class="ph-acts">
          <button id="copyPrev" title="${esc(tr('Copiar'))}" aria-label="${esc(tr('Copiar'))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg></button>
        </span>
      </div>
      <div id="prevWarn" class="preview-warn" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg><span id="prevWarnTxt"></span></div>
      <div class="preview-body"><span class="prompt">&gt;_ </span><span id="prevCode"></span></div>
    </div>

    <div class="section">
      <div class="section-h">${esc(tr('Parámetro'))}<span class="n">1</span></div>
      <div class="section-b">
        <label class="field-label" for="domainInput">${esc(tr('Dominio objetivo'))} <span style="font-weight:400;text-transform:none;color:var(--faint)">${esc(tr('(opcional)'))}</span></label>
        <div class="dom-row">
          <input class="input-mono" id="domainInput" type="text" placeholder="ejemplo.com" autocomplete="off" spellcheck="false" value="${esc(domainVal)}">
          <div class="seg" role="group" aria-label="scope">
            <button id="scopeDom" aria-pressed="${scope === 'site'}" title="${esc(tr('Limitar al dominio con site:'))}">site:</button>
            <button id="scopeAll" aria-pressed="${scope === 'all'}" title="${esc(tr('Buscar en toda la web'))}">${esc(tr('web'))}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-h">${esc(tr('Buscadores compatibles'))}<span class="n">${ENGINES.length}</span></div>
      <div class="section-b"><div class="engines">${engines}</div></div>
    </div>

    <div class="foot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <div><span>${esc(tr('Estas consultas solo exponen contenido que Google ya tiene indexado. '))}</span><b>${esc(tr('Úsalas únicamente sobre dominios de tu propiedad o con autorización escrita'))}</b><span>${esc(tr(' (pentest, bug bounty, auditoría). El acceso no autorizado a sistemas o datos ajenos es ilegal en la mayoría de jurisdicciones.'))}</span></div>
    </div>
  </div>`;

  const di = $('#domainInput');
  di.disabled = (scope === 'all');
  di.addEventListener('input', () => { domainVal = di.value; updatePreview(); });
  $('#scopeDom').addEventListener('click', () => { scope = 'site'; $('#scopeDom').setAttribute('aria-pressed', 'true'); $('#scopeAll').setAttribute('aria-pressed', 'false'); $('#domainInput').disabled = false; updatePreview(); });
  $('#scopeAll').addEventListener('click', () => { scope = 'all'; $('#scopeDom').setAttribute('aria-pressed', 'false'); $('#scopeAll').setAttribute('aria-pressed', 'true'); $('#domainInput').disabled = true; updatePreview(); });
  $('#copyPrev').addEventListener('click', () => copyText(currentFull));
  updatePreview();
}
function updatePreview() {
  if (!activeDork) return;
  const d = activeDork;
  currentFull = buildFull(d);
  const codeEl = $('#prevCode'); if (codeEl) codeEl.textContent = currentFull;
  const needsDom = (d.noSite && /\{dom\}|\*\./.test(d.q)) || false;
  const warn = $('#prevWarn');
  if (warn) {
    if (needsDom && !cleanDomain(domainVal)) { warn.hidden = false; $('#prevWarnTxt').textContent = tr('Falta el dominio objetivo (se usará un marcador).'); }
    else warn.hidden = true;
  }
  document.querySelectorAll('.engine').forEach(a => {
    const e = ENGINES.find(x => x.id === a.dataset.eid);
    if (e) a.href = engineUrl(e, currentFull);
  });
}

/* ---------------- Copiar + toast ---------------- */
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600); }
function copyText(txt) {
  if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt).then(() => toast(tr('Copiado al portapapeles')), () => fallbackCopy(txt)); }
  else fallbackCopy(txt);
}
function fallbackCopy(txt) {
  const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast(tr('Copiado al portapapeles')); } catch (e) { toast(tr('No se pudo copiar')); }
  document.body.removeChild(ta);
}

/* ---------------- Idioma ---------------- */
function applyI18n() {
  document.documentElement.setAttribute('lang', lang);
  document.title = 'dork-pro';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', tr(el.getAttribute('data-i18n-ph'))); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', tr(el.getAttribute('data-i18n-title'))); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', tr(el.getAttribute('data-i18n-aria'))); });
  $('#langToggle').textContent = (lang === 'es') ? 'EN' : 'ES';
  renderLibs(); renderDorks(false);
}
function initLang() {
  let saved = null; try { saved = localStorage.getItem('dork-lang'); } catch (e) { }
  if (saved === 'es' || saved === 'en') lang = saved;
  $('#langToggle').addEventListener('click', () => {
    lang = (lang === 'es') ? 'en' : 'es';
    try { localStorage.setItem('dork-lang', lang); } catch (e) { }
    applyI18n();
  });
}

/* ---------------- Tema ---------------- */
function applyThemeIcon() {
  const dark = getComputedStyle(document.documentElement).colorScheme.includes('dark');
  $('#themeIcon').innerHTML = dark
    ? '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4"/>'
    : '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';
}
function initTheme() {
  let saved = null; try { saved = localStorage.getItem('dork-theme'); } catch (e) { }
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  applyThemeIcon();
  $('#themeToggle').addEventListener('click', () => {
    const cur = getComputedStyle(document.documentElement).colorScheme.includes('dark') ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('dork-theme', next); } catch (e) { }
    applyThemeIcon();
  });
}

/* ---------------- Init ---------------- */
function goHome() {
  activeCat = null; activeDork = null;
  $('#globalSearch').value = ''; $('#filter').value = '';
  renderLibs(); renderDorks(false);
}
function init() {
  aiLoad();
  initTheme(); initLang();
  $('#homeBtn').addEventListener('click', goHome);
  $('#globalSearch').addEventListener('input', () => renderDorks(true));
  $('#filter').addEventListener('input', () => renderDorks(true));
  document.querySelectorAll('#sevFilter button').forEach(b => {
    b.addEventListener('click', () => {
      sevFilter = b.dataset.sev;
      document.querySelectorAll('#sevFilter button').forEach(x => x.setAttribute('aria-pressed', x === b));
      renderDorks(true);
    });
  });
  applyI18n();
}
init();
