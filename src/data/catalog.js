// Catálogo de bibliotecas (categorías) y dorks. Idioma base: español.
// Los títulos y notas se traducen vía src/data/translations.js

export const CATS = {
  infra:        { label: 'Infraestructura', color: '#ff5555' },
  archivos:     { label: 'Archivos expuestos', color: '#2dd4bf' },
  config:       { label: 'Configuración y BD', color: '#ff6600' },
  directorio:   { label: 'Listado de directorios', color: '#60a5fa' },
  wordpress:    { label: 'WordPress', color: '#a78bfa' },
  login:        { label: 'Páginas de login', color: '#f0abfc' },
  admin:        { label: 'Paneles de administración', color: '#fb923c' },
  credenciales: { label: 'Credenciales e info sensible', color: '#f87171' },
  errores:      { label: 'Errores y debug', color: '#fbbf24' },
  correos:      { label: 'Correos y contactos', color: '#38bdf8' },
  osint:        { label: 'Personas y OSINT', color: '#a3e635' },
  recon:        { label: 'Recon y superficie', color: '#00ccff' },
  cloud:        { label: 'Cloud y DevOps', color: '#fb923c' },
  terceros:     { label: 'Fugas en terceros', color: '#8b5cf6' },
  vulns:        { label: 'Vulnerabilidades', color: '#f43f5e' },
}

export const SEV_COLORVAR = { alta: 'var(--danger)', media: 'var(--warn)', info: 'var(--info)' }
export const SEV_LABEL = { alta: 'Riesgo alto', media: 'Riesgo medio', info: 'Informativo' }

export const DORKS = [
  { cat:'archivos', sev:'info',  title:'Archivos PHP', q:'filetype:php', note:'Scripts y páginas PHP indexados en el objetivo.' },
  { cat:'archivos', sev:'alta',  title:'Volcados SQL', q:'filetype:sql', note:'Dumps y respaldos de base de datos, a menudo con datos reales.' },
  { cat:'archivos', sev:'info',  title:'Archivos XML', q:'filetype:xml', note:'Configuraciones, sitemaps y feeds en XML.' },
  { cat:'archivos', sev:'media', title:'Archivos JSON', q:'filetype:json', note:'Respuestas de API, manifiestos y archivos de configuración.' },
  { cat:'archivos', sev:'media', title:'Archivos de log', q:'filetype:log', note:'Registros de aplicación que pueden filtrar rutas, IPs o tokens.' },
  { cat:'archivos', sev:'info',  title:'Archivos TXT', q:'filetype:txt', note:'Notas, listados y archivos de texto plano accesibles.' },
  { cat:'archivos', sev:'alta',  title:'Archivos .env', q:'ext:env intext:DB_PASSWORD', note:'Variables de entorno con credenciales de base de datos.' },
  { cat:'archivos', sev:'media', title:'Respaldos (.bak/.old)', q:'ext:bak OR ext:old OR ext:backup', note:'Copias de seguridad servidas sin protección.' },
  { cat:'archivos', sev:'media', title:'Hojas de cálculo', q:'filetype:xls OR filetype:xlsx intext:email', note:'Planillas con correos, contactos o datos internos.' },
  { cat:'archivos', sev:'info',  title:'Documentos PDF', q:'filetype:pdf', note:'PDFs indexados: manuales, reportes, documentación.' },
  { cat:'archivos', sev:'media', title:'Documentos ofimáticos', q:'(ext:doc OR ext:docx OR ext:xls OR ext:xlsx OR ext:ppt OR ext:pptx OR ext:csv)', note:'Word, Excel, PowerPoint y CSV indexados: reportes, listados y datos internos.' },

  { cat:'directorio', sev:'media', title:'Índice de directorio', q:'intitle:"index of"', note:'Listados de carpetas con navegación abierta activada.' },
  { cat:'directorio', sev:'media', title:'Directorio padre', q:'intitle:"index of" "parent directory"', note:'Listados clásicos de Apache/Nginx sin índice.' },
  { cat:'directorio', sev:'alta',  title:'Índice con backups', q:'intitle:"index of" (backup OR bak OR old)', note:'Carpetas abiertas que contienen respaldos.' },
  { cat:'directorio', sev:'alta',  title:'Índice con SQL', q:'intitle:"index of" (".sql" OR "dump.sql")', note:'Directorios abiertos que exponen volcados de BD.' },
  { cat:'directorio', sev:'media', title:'Índice de uploads', q:'intitle:"index of" inurl:uploads', note:'Carpetas de subidas sin listado deshabilitado.' },
  { cat:'directorio', sev:'media', title:'Servidores FTP abiertos', q:'intitle:"index of" inurl:ftp', note:'Listados de servidores FTP accesibles por la web.' },
  { cat:'directorio', sev:'media', title:'Carpetas de fotos (DCIM)', q:'intitle:"index of" inurl:dcim', note:'Directorios DCIM de cámaras o móviles con imágenes expuestas.' },

  { cat:'wordpress', sev:'info',  title:'wp-content expuesto', q:'inurl:wp-content', note:'Rutas de temas, plugins y uploads de WordPress.' },
  { cat:'wordpress', sev:'alta',  title:'wp-config.php', q:'inurl:wp-config.php', note:'Archivo de configuración con credenciales de BD de WP.' },
  { cat:'wordpress', sev:'media', title:'Panel wp-admin', q:'inurl:/wp-admin/', note:'Acceso al panel de administración de WordPress.' },
  { cat:'wordpress', sev:'media', title:'Uploads de WP', q:'inurl:wp-content/uploads', note:'Archivos subidos, a veces con documentos privados.' },
  { cat:'wordpress', sev:'info',  title:'Login de WP', q:'inurl:wp-login.php', note:'Formulario de inicio de sesión de WordPress.' },
  { cat:'wordpress', sev:'media', title:'Debug log de WP', q:'inurl:wp-content/debug.log', note:'Log de depuración que puede filtrar rutas y errores.' },
  { cat:'wordpress', sev:'alta',  title:'Credenciales en uploads', q:'inurl:/wp-content/uploads/ ext:txt (intext:username intext:password)', note:'Archivos .txt en uploads de WordPress con usuarios y contraseñas.' },
  { cat:'wordpress', sev:'info',  title:'wp-content / wp-includes', q:'(inurl:wp-content OR inurl:wp-includes)', note:'Rutas internas de WordPress que revelan temas, plugins y versiones.' },

  { cat:'login', sev:'info',  title:'Páginas de login', q:'inurl:login', note:'URLs que contienen formularios de autenticación.' },
  { cat:'login', sev:'info',  title:'Título "login"', q:'intitle:"login"', note:'Páginas cuyo título indica inicio de sesión.' },
  { cat:'login', sev:'info',  title:'Sign in', q:'(inurl:signin OR intitle:"sign in")', note:'Variantes en inglés de páginas de acceso.' },
  { cat:'login', sev:'media', title:'Portal de usuario', q:'inurl:/user/login', note:'Rutas de login típicas de Drupal y CMS similares.' },
  { cat:'login', sev:'media', title:'Acceso corporativo', q:'intitle:"login" (intranet OR portal OR vpn)', note:'Portales internos, intranets y accesos VPN.' },

  { cat:'admin', sev:'media', title:'Rutas /admin', q:'inurl:admin', note:'URLs que contienen el segmento admin.' },
  { cat:'admin', sev:'media', title:'Panel de administración', q:'intitle:"admin" (panel OR dashboard OR login)', note:'Títulos que apuntan a consolas de administración.' },
  { cat:'admin', sev:'media', title:'Administrator (Joomla)', q:'inurl:/administrator/', note:'Backend de administración de Joomla.' },
  { cat:'admin', sev:'alta',  title:'phpMyAdmin', q:'intitle:"phpMyAdmin" "Welcome to phpMyAdmin"', note:'Interfaces phpMyAdmin accesibles públicamente.' },
  { cat:'admin', sev:'alta',  title:'cPanel / WHM', q:'inurl::2082 OR inurl::2083 OR intitle:"cPanel"', note:'Paneles de hosting expuestos en sus puertos típicos.' },
  { cat:'admin', sev:'media', title:'Adminer', q:'intitle:"Adminer" inurl:adminer.php', note:'Gestor de BD Adminer accesible sin restricción.' },
  { cat:'admin', sev:'media', title:'Acceso combinado', q:'inurl:(login OR admin OR dashboard)', note:'Busca de una sola pasada páginas de login, admin y dashboards.' },
  { cat:'admin', sev:'media', title:'Login ASP', q:'inurl:/admin/login.asp', note:'Página clásica de acceso a paneles en ASP.' },

  { cat:'credenciales', sev:'alta', title:'Contraseñas en logs', q:'filetype:log intext:password', note:'Logs que registran credenciales en texto plano.' },
  { cat:'credenciales', sev:'alta', title:'SQL con password', q:'filetype:sql intext:password', note:'Volcados de BD que incluyen hashes o contraseñas.' },
  { cat:'credenciales', sev:'alta', title:'Repositorio .git', q:'inurl:/.git/config', note:'Carpeta .git expuesta: historial y a veces secretos.' },
  { cat:'credenciales', sev:'alta', title:'web.config', q:'filetype:config inurl:web.config', note:'Configuración de IIS/ASP.NET con cadenas de conexión.' },
  { cat:'credenciales', sev:'media', title:'Claves privadas', q:'filetype:pem OR filetype:key intext:"PRIVATE KEY"', note:'Claves SSH/TLS privadas servidas por error.' },
  { cat:'credenciales', sev:'alta', title:'Variables de entorno', q:'ext:env (intext:API_KEY OR intext:SECRET)', note:'Archivos .env con API keys y secretos.' },
  { cat:'credenciales', sev:'alta', title:'Config .inc MySQL', q:'filetype:inc intext:mysql_connect password -please -could -port', note:'Archivos .inc con cadenas de conexión mysql_connect().' },
  { cat:'credenciales', sev:'media', title:'WS_FTP (ini)', q:'inurl:ws_ftp filetype:ini intext:pwd', note:'Configuración de WS_FTP con contraseñas almacenadas.' },
  { cat:'credenciales', sev:'media', title:'Texto con accesos', q:'filetype:txt (intext:password OR intext:contraseña OR intext:login)', note:'Archivos de texto que contienen credenciales o datos de acceso.' },
  { cat:'credenciales', sev:'alta', title:'Tabla SQL con contraseñas', q:'filetype:sql "# dumping data for table" "`PASSWORD` varchar"', note:'Volcados SQL cuyo esquema incluye un campo de contraseña.' },
  { cat:'credenciales', sev:'alta', title:'password.txt expuesto', q:'intitle:"index of" "password.txt"', note:'Directorios abiertos que exponen un archivo password.txt.' },
  { cat:'credenciales', sev:'media', title:'Contraseña por defecto/inicial', q:'(intext:"default password is" OR intext:"su contraseña inicial es" OR "Your initial password is")', note:'Páginas o documentos que revelan contraseñas iniciales o por defecto.' },
  { cat:'credenciales', sev:'media', title:'Export LDAP (.ldif)', q:'ext:ldif', note:'Exportaciones de directorios LDAP con usuarios y atributos.' },
  { cat:'credenciales', sev:'alta', noSite:true, title:'Clave RSA privada', q:'intext:"BEGIN RSA PRIVATE KEY" "{dom}"', note:'Claves RSA privadas filtradas asociadas al dominio.' },
  { cat:'credenciales', sev:'alta', noSite:true, title:'Clave OpenSSH privada', q:'intext:"BEGIN OPENSSH PRIVATE KEY" "{dom}"', note:'Claves OpenSSH privadas expuestas.' },
  { cat:'credenciales', sev:'alta', noSite:true, title:'api_key en texto', q:'intext:"api_key" "{dom}"', note:'Menciones de api_key junto al dominio en páginas indexadas.' },
  { cat:'credenciales', sev:'alta', noSite:true, title:'client_secret', q:'intext:"client_secret" "{dom}"', note:'Secretos de cliente OAuth filtrados.' },
  { cat:'credenciales', sev:'alta', noSite:true, title:'access_token', q:'intext:"access_token" "{dom}"', note:'Tokens de acceso expuestos en páginas indexadas.' },

  { cat:'errores', sev:'media', title:'Errores de SQL', q:'intext:"you have an error in your sql syntax"', note:'Mensajes que revelan inyección SQL o esquema de BD.' },
  { cat:'errores', sev:'media', title:'mysql_connect()', q:'intext:"Warning: mysql_connect()"', note:'Errores de PHP que filtran credenciales o rutas.' },
  { cat:'errores', sev:'info',  title:'Fatal error PHP', q:'intext:"Fatal error" ext:php', note:'Trazas de error que exponen rutas del servidor.' },
  { cat:'errores', sev:'media', title:'Warnings de PHP', q:'intext:"Warning: include" OR intext:"Warning: require"', note:'Inclusiones fallidas que revelan estructura de archivos.' },

  { cat:'correos', sev:'media', title:'Correos del dominio', q:'intext:"@{dom}"', note:'Páginas del sitio que muestran direcciones de correo del dominio.' },
  { cat:'correos', sev:'info', noSite:true, title:'Menciones del correo (fuera del sitio)', q:'"@{dom}" -site:{dom}', note:'Dónde aparecen correos del dominio en otros sitios: foros, filtraciones, pastes.' },
  { cat:'correos', sev:'media', noSite:true, title:'Correo en pastes y repos', q:'intext:"@{dom}" (site:pastebin.com OR site:github.com OR site:gitlab.com)', note:'Correos del dominio filtrados en Pastebin, GitHub o GitLab.' },
  { cat:'correos', sev:'info', title:'Correos en listados y archivos', q:'(filetype:xlsx OR filetype:csv OR filetype:txt) intext:"@{dom}"', note:'Planillas y textos indexados que contienen correos del dominio.' },

  { cat:'osint', sev:'info', noSite:true, title:'Usuario en plataformas', q:'"USUARIO" (site:reddit.com OR site:pastebin.com OR site:github.com)', note:'Rastrea un nombre de usuario en Reddit, Pastebin y GitHub. Reemplaza USUARIO en el constructor.' },
  { cat:'osint', sev:'info', noSite:true, title:'Nombre en redes sociales', q:'"NOMBRE APELLIDO" (site:facebook.com OR site:twitter.com OR site:instagram.com OR site:linkedin.com)', note:'Perfiles y menciones de una persona en las principales redes. Reemplaza NOMBRE APELLIDO.' },
  { cat:'osint', sev:'info', noSite:true, title:'Perfiles de LinkedIn', q:'site:linkedin.com/in "NOMBRE APELLIDO"', note:'Perfiles personales en LinkedIn. Reemplaza NOMBRE APELLIDO.' },
  { cat:'osint', sev:'info', noSite:true, title:'Empresas en LinkedIn', q:'site:linkedin.com/company "SECTOR"', note:'Empresas por sector o rubro en LinkedIn. Reemplaza SECTOR.' },
  { cat:'osint', sev:'media', noSite:true, title:'Currículums con contacto', q:'intitle:"curriculum vitae" ("teléfono" OR "e-mail")', note:'CVs indexados con teléfono y correo. Añade un nombre o site:dominio para acotar.' },
  { cat:'osint', sev:'info', noSite:true, title:'Búsqueda por teléfono', q:'"+51 TELEFONO" OR "TELEFONO"', note:'Rastrea un número en la web. Reemplaza TELEFONO (y el prefijo +51 si aplica).' },
  { cat:'osint', sev:'info', noSite:true, title:'Empleados en LinkedIn', q:'site:linkedin.com employees {dom}', note:'Empleados de la organización indexados en LinkedIn (recon de personal).' },

  { cat:'archivos', sev:'media', title:'Paquete de respaldos', q:'(ext:bkf OR ext:bkp OR ext:bak OR ext:old OR ext:backup)', note:'Múltiples extensiones de copia de seguridad en una sola consulta.' },
  { cat:'archivos', sev:'media', title:'Paquete de configuración', q:'(ext:xml OR ext:conf OR ext:cnf OR ext:cfg OR ext:ini OR ext:env OR ext:reg OR ext:ora)', note:'Archivos de configuración de distintos formatos indexados.' },
  { cat:'archivos', sev:'alta', title:'Paquete de base de datos', q:'(ext:sql OR ext:dbf OR ext:mdb)', note:'Volcados y archivos de base de datos (SQL, dBase, Access).' },
  { cat:'archivos', sev:'info', title:'Archivos de instalación', q:'(inurl:readme OR inurl:license OR inurl:install OR inurl:setup OR inurl:config)', note:'Rutas de instalación/configuración que revelan versiones y rutas internas.' },
  { cat:'archivos', sev:'media', title:'phpinfo()', q:'ext:php intitle:phpinfo "published by the PHP Group"', note:'Páginas phpinfo que exponen configuración y rutas del servidor.' },

  { cat:'recon', sev:'media', noSite:true, title:'Mapeo de subdominios', q:'site:*.{dom}', note:'Subdominios indexados del objetivo (superficie de ataque).' },
  { cat:'recon', sev:'info', noSite:true, title:'Subdominios anidados', q:'site:*.*.{dom}', note:'Subdominios de segundo nivel indexados.' },
  { cat:'recon', sev:'info', title:'Superficie de API', q:'inurl:api', note:'Endpoints y rutas de API indexadas.' },
  { cat:'recon', sev:'media', title:'GraphQL', q:'inurl:graphql', note:'Endpoints GraphQL, a menudo con introspección abierta.' },
  { cat:'recon', sev:'info', title:'API REST (v1/v2)', q:'(inurl:api/v1 OR inurl:api/v2 OR inurl:rest)', note:'Rutas versionadas de API REST.' },
  { cat:'recon', sev:'info', title:'Archivos JavaScript', q:'filetype:js', note:'JS del front que puede filtrar endpoints, claves o configuración.' },
  { cat:'recon', sev:'media', title:'Entornos dev/staging', q:'(dev OR test OR staging OR sandbox)', note:'Entornos de desarrollo o pruebas expuestos públicamente.' },
  { cat:'recon', sev:'media', title:'Documentación de API', q:'(swagger OR openapi)', note:'Swagger/OpenAPI que describe toda la superficie de la API.' },

  { cat:'cloud', sev:'alta', noSite:true, title:'Buckets S3 / GCP', q:'(site:s3.amazonaws.com OR site:storage.googleapis.com OR site:amazonaws.com) "{dom}"', note:'Buckets de almacenamiento en la nube asociados al dominio.' },
  { cat:'cloud', sev:'media', noSite:true, title:'Dashboard Traefik', q:'intitle:traefik inurl:8080/dashboard "{dom}"', note:'Panel de Traefik expuesto en el puerto típico 8080.' },
  { cat:'cloud', sev:'media', noSite:true, title:'Jenkins', q:'intitle:"Dashboard [Jenkins]" "{dom}"', note:'Dashboards de Jenkins accesibles públicamente.' },

  { cat:'terceros', sev:'media', noSite:true, title:'Repositorios de código', q:'(site:github.com OR site:gitlab.com OR site:bitbucket.org) "{dom}"', note:'Menciones del dominio en repos públicos: código, configs, secretos.' },
  { cat:'terceros', sev:'media', noSite:true, title:'Pastebin y pastes', q:'(site:pastebin.com OR site:justpaste.it OR site:controlc.com) "{dom}"', note:'Datos del dominio pegados en sitios de paste.' },
  { cat:'terceros', sev:'media', noSite:true, title:'Trello / Atlassian', q:'(site:trello.com OR site:*.atlassian.net) "{dom}"', note:'Tableros y espacios de gestión que mencionan el dominio.' },
  { cat:'terceros', sev:'info', noSite:true, title:'Stack Overflow', q:'site:stackoverflow.com "{dom}"', note:'Preguntas que exponen configuración o errores del dominio.' },
  { cat:'terceros', sev:'info', noSite:true, title:'Sitios de code share', q:'(site:codeshare.io OR site:codepen.io OR site:jsfiddle.net OR site:ideone.com) "{dom}"', note:'Fragmentos de código compartidos que mencionan el dominio.' },
  { cat:'terceros', sev:'alta', noSite:true, title:'Secretos en terceros', q:'(site:pastebin.com OR site:gitlab.com OR site:s3.amazonaws.com OR site:scribd.com) "{dom}"', note:'Barrido de plataformas donde suelen filtrarse secretos del dominio.' },

  { cat:'vulns', sev:'media', title:'Open redirects', q:'(inurl:redir OR inurl:url OR inurl:redirect OR inurl:return OR inurl:src=http)', note:'Parámetros candidatos a redirección abierta.' },
  { cat:'vulns', sev:'media', title:'Directory listing', q:'intitle:"directory listing"', note:'Listados de directorio con navegación abierta.' },
  { cat:'vulns', sev:'media', title:'Apache Struts', q:'(ext:action OR ext:do OR ext:struts)', note:'Extensiones típicas de Apache Struts (históricamente vulnerable a RCE).' },

  { cat:'infra', sev:'alta', noSite:true, title:'Carpeta .git expuesta', q:'inurl:"/.git" {dom} -github', note:'Repositorios .git servidos por la web: historial de código y a veces secretos.' },

  { cat:'config', sev:'media', title:'Archivos de configuración', q:'(ext:xml OR ext:conf OR ext:cnf OR ext:reg OR ext:inf OR ext:rdp OR ext:cfg OR ext:ini OR ext:env OR ext:ora)', note:'Barrido amplio de formatos de configuración indexados.' },
  { cat:'config', sev:'alta', title:'Archivos de base de datos', q:'(ext:sql OR ext:dbf OR ext:mdb)', note:'Volcados y archivos de base de datos (SQL, dBase, Access).' },
]

export const ENGINES = [
  { id:'google',     name:'Google',     short:'G',  color:'#4285f4', url:'https://www.google.com/search?num=50&q=' },
  { id:'bing',       name:'Bing',       short:'b',  color:'#00897b', url:'https://www.bing.com/search?q=' },
  { id:'duckduckgo', name:'DuckDuckGo', short:'D',  color:'#de5833', url:'https://duckduckgo.com/?q=' },
  { id:'brave',      name:'Brave',      short:'Br', color:'#fb542b', url:'https://search.brave.com/search?q=' },
  { id:'startpage',  name:'Startpage',  short:'S',  color:'#6c4ee8', url:'https://www.startpage.com/sp/search?query=' },
  { id:'yahoo',      name:'Yahoo',      short:'Y!', color:'#6001d2', url:'https://search.yahoo.com/search?p=' },
  { id:'ecosia',     name:'Ecosia',     short:'Ec', color:'#2e8b57', url:'https://www.ecosia.org/search?q=' },
  { id:'yandex',     name:'Yandex',     short:'Ya', color:'#ff3333', url:'https://yandex.com/search/?text=' },
]

export const AI_PROVIDERS = {
  gemini: { label:'Gemini (Google)', model:'gemini-2.0-flash', base:'', needsBase:false },
  claude: { label:'Claude (Anthropic)', model:'claude-3-5-haiku-latest', base:'', needsBase:false },
  openai: { label:'OpenAI', model:'gpt-4o-mini', base:'', needsBase:false },
  custom: { label:'Personalizada / IA local', model:'', base:'http://localhost:11434/v1', needsBase:true },
}
