import { CATS, DORKS } from '../data/catalog.js'

function countFor(cat) {
  return cat === 'all' ? DORKS.length : DORKS.filter((d) => d.cat === cat).length
}

export default function LibrarySidebar({ tr, activeCat, onPick }) {
  const items = [['all', { label: 'Todas', color: 'var(--accent)' }], ...Object.entries(CATS)]

  return (
    <aside className="min-h-0 overflow-y-auto border-r border-border bg-panel">
      <div className="px-3.5 py-3 border-b border-borderSoft sticky top-0 bg-panel z-[2]">
        <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted font-medium">
          {tr('Bibliotecas')}
        </span>
      </div>
      <nav className="p-2 flex flex-col gap-0.5">
        {items.map(([key, v]) => {
          const active = activeCat === key
          return (
            <button
              key={key}
              onClick={() => onPick(key)}
              aria-current={active}
              className={
                'flex items-center gap-2.5 w-full text-left font-mono text-[0.82rem] font-medium px-2.5 py-[9px] rounded-[9px] border cursor-pointer transition-colors ' +
                (active
                  ? 'border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--panel))] text-accent'
                  : 'border-transparent text-fg hover:bg-panel2')
              }
            >
              <span className="w-2 h-2 rounded-full flex-none opacity-90" style={{ background: v.color }} />
              <span className="flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">{tr(v.label)}</span>
              <span
                className={
                  'font-mono text-[0.72rem] font-semibold px-[9px] py-px rounded-full flex-none ' +
                  (active ? 'text-accent bg-[color-mix(in_srgb,var(--accent)_18%,transparent)]' : 'text-muted bg-panel2')
                }
              >
                {countFor(key)}
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
