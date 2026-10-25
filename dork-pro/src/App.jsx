import { useEffect, useMemo, useState } from 'react'
import { CATS, DORKS } from './data/catalog.js'
import { makeTr } from './data/translations.js'
import { useLocalStorage, useToast } from './lib/hooks.js'
import Topbar from './components/Topbar.jsx'
import LibrarySidebar from './components/LibrarySidebar.jsx'
import DorkList from './components/DorkList.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import HomeHero from './components/HomeHero.jsx'

export default function App() {
  const [lang, setLang] = useLocalStorage('dork-lang', import.meta.env.VITE_DEFAULT_LANG === 'es' ? 'es' : 'en')
  const [theme, setTheme] = useLocalStorage('dork-theme', null) // null = según el sistema
  const tr = useMemo(() => makeTr(lang), [lang])

  const [activeCat, setActiveCat] = useState(null) // null = inicio
  const [sevFilter, setSevFilter] = useState('all')
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('') // búsqueda global
  const [activeDork, setActiveDork] = useState(null)
  const [domain, setDomain] = useState('')
  const [scope, setScope] = useState('site')
  const [toast, showToast] = useToast()

  // Tema -> atributo en <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme) root.setAttribute('data-theme', theme)
    else root.removeAttribute('data-theme')
  }, [theme])
  useEffect(() => { document.documentElement.setAttribute('lang', lang) }, [lang])

  const home = activeCat === null && !search.trim()

  const list = useMemo(() => {
    const gt = search.trim().toLowerCase()
    const ft = filter.trim().toLowerCase()
    return DORKS.filter((d) => {
      if (!gt && activeCat !== 'all' && activeCat !== null && d.cat !== activeCat) return false
      if (sevFilter !== 'all' && d.sev !== sevFilter) return false
      if (gt || ft) {
        const hay = (d.title + ' ' + d.q + ' ' + d.note + ' ' + CATS[d.cat].label + ' ' + tr(d.title) + ' ' + tr(d.note) + ' ' + tr(CATS[d.cat].label)).toLowerCase()
        if (gt && !hay.includes(gt)) return false
        if (ft && !hay.includes(ft)) return false
      }
      return true
    })
  }, [activeCat, sevFilter, filter, search, tr])

  // Autoselección del primer dork cuando no estamos en el inicio
  useEffect(() => {
    if (home) { setActiveDork(null); return }
    if (!list.includes(activeDork)) setActiveDork(list[0] || null)
  }, [home, list]) // eslint-disable-line react-hooks/exhaustive-deps

  const pickCat = (cat) => { setActiveCat(cat); setSearch(''); setFilter('') }
  const goHome = () => { setActiveCat(null); setActiveDork(null); setSearch(''); setFilter('') }
  const toggleTheme = () => {
    const isDark = getComputedStyle(document.documentElement).colorScheme.includes('dark')
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="flex flex-col h-screen max-lg:h-auto max-lg:min-h-screen overflow-hidden max-lg:overflow-visible">
      <Topbar
        tr={tr} lang={lang} theme={theme}
        onToggleLang={() => setLang(lang === 'es' ? 'en' : 'es')}
        onToggleTheme={toggleTheme}
        search={search} onSearch={setSearch} onHome={goHome}
      />

      <div
        className="flex-1 min-h-0 grid max-lg:block"
        style={{ gridTemplateColumns: home ? '252px 1fr' : '252px 322px 1fr' }}
      >
        <LibrarySidebar tr={tr} activeCat={activeCat} onPick={pickCat} />

        {!home && (
          <DorkList
            tr={tr} list={list} activeDork={activeDork} onPick={setActiveDork}
            filter={filter} onFilter={setFilter} sevFilter={sevFilter} onSev={setSevFilter}
          />
        )}

        <section className="min-h-0 overflow-y-auto bg-bg">
          {home || !activeDork ? (
            <HomeHero tr={tr} onToast={showToast} />
          ) : (
            <DetailPanel
              tr={tr} dork={activeDork}
              domain={domain} setDomain={setDomain}
              scope={scope} setScope={setScope}
              onToast={showToast}
            />
          )}
        </section>
      </div>

      {/* Toast */}
      <div
        className={
          'fixed left-1/2 -translate-x-1/2 bottom-5 bg-fg text-bg text-[0.82rem] font-semibold px-4 py-2.5 rounded-[10px] shadow-xl z-50 transition-all ' +
          (toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')
        }
      >
        {toast}
      </div>
    </div>
  )
}
