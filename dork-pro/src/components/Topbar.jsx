import { Terminal, Search, Home, Moon, Sun } from './Icons.jsx'

export default function Topbar({ tr, lang, onToggleLang, theme, onToggleTheme, search, onSearch, onHome }) {
  const iconBtn =
    'flex-none h-9 min-w-9 px-2.5 grid place-items-center rounded-[9px] border border-border bg-panel2 text-muted cursor-pointer transition-colors hover:text-accent hover:border-accent'

  return (
    <header className="flex-none h-[60px] flex items-center gap-3.5 px-4 border-b border-border bg-panel max-lg:sticky max-lg:top-0 z-10 max-lg:flex-wrap max-lg:h-auto max-lg:py-2.5">
      <div className="flex items-center gap-[11px] min-w-0">
        <span className="w-9 h-9 flex-none grid place-items-center rounded-lg border-2 border-accent text-accent">
          <Terminal className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h1 className="m-0 text-[1.12rem] font-bold tracking-tight leading-none text-fg">
            dork<b className="text-accent font-bold">-pro</b>
          </h1>
          <div className="font-mono text-[0.6rem] text-muted tracking-wide uppercase mt-0.5">
            {tr('reconocimiento · búsqueda avanzada')}
          </div>
        </div>
      </div>

      <span className="w-px h-[26px] bg-border flex-none" />

      <button className={iconBtn} title={tr('Inicio')} aria-label={tr('Inicio')} onClick={onHome}>
        <Home className="w-[18px] h-[18px]" />
      </button>

      <div className="relative flex-1 max-w-[560px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-faint pointer-events-none" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={tr('Buscar dork…')}
          autoComplete="off"
          spellCheck={false}
          className="w-full font-mono text-[0.84rem] py-[9px] pr-3 pl-9 rounded-[10px] bg-panel2 border border-border text-fg placeholder:text-faint focus-visible:outline-none focus-visible:border-accent"
        />
      </div>

      <span className="flex-1" />

      <button
        className={iconBtn + ' font-mono text-[0.74rem] font-semibold tracking-wide'}
        title="Cambiar idioma / Switch language"
        aria-label="Cambiar idioma / Switch language"
        onClick={onToggleLang}
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
      <button className={iconBtn} title={tr('Cambiar tema')} aria-label={tr('Cambiar tema')} onClick={onToggleTheme}>
        {theme === 'light' ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
      </button>
    </header>
  )
}
