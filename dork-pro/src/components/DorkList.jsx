import { CATS, SEV_COLORVAR } from '../data/catalog.js'

const SEV = [
  { key: 'all', label: 'Todas', color: null },
  { key: 'alta', label: 'Alto', color: 'var(--danger)' },
  { key: 'media', label: 'Medio', color: 'var(--warn)' },
  { key: 'info', label: 'Info', color: 'var(--info)' },
]

export default function DorkList({ tr, list, activeDork, onPick, filter, onFilter, sevFilter, onSev }) {
  return (
    <section className="min-h-0 overflow-y-auto border-r border-border bg-bg">
      <div className="px-3.5 py-3 border-b border-borderSoft sticky top-0 bg-panel z-[2]">
        <div className="relative mb-2.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-[11px] top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-faint pointer-events-none"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          <input
            type="search"
            value={filter}
            onChange={(e) => onFilter(e.target.value)}
            placeholder={tr('Filtrar comandos…')}
            autoComplete="off"
            spellCheck={false}
            className="w-full font-mono text-[0.82rem] py-[9px] pr-[11px] pl-[34px] rounded-[9px] bg-panel2 border border-border text-fg placeholder:text-faint focus-visible:outline-none focus-visible:border-accent"
          />
        </div>
        <div className="flex flex-wrap gap-[5px]">
          {SEV.map((s) => {
            const active = sevFilter === s.key
            return (
              <button
                key={s.key}
                onClick={() => onSev(s.key)}
                aria-pressed={active}
                style={s.color ? { color: s.color } : undefined}
                className={
                  'font-mono text-[0.68rem] font-medium px-[9px] py-[5px] rounded-[7px] border inline-flex items-center gap-[5px] cursor-pointer transition-colors ' +
                  (active ? 'bg-accent text-[#140a03] border-accent' : 'bg-panel2 text-muted border-border')
                }
              >
                {s.color && <span className="w-[7px] h-[7px] rounded-full" style={{ background: active ? '#140a03' : 'currentColor' }} />}
                {tr(s.label)}
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-2 flex flex-col gap-px">
        {list.length === 0 ? (
          <div className="px-3.5 py-7 text-center text-muted text-[0.85rem]">
            {tr('Sin resultados. Prueba otro término o severidad.')}
          </div>
        ) : (
          list.map((d, i) => {
            const active = d === activeDork
            return (
              <button
                key={i}
                onClick={() => onPick(d)}
                aria-current={active}
                className={
                  'flex items-center gap-2.5 w-full text-left font-mono text-[0.8rem] px-2.5 py-[9px] rounded-[7px] border cursor-pointer transition-colors ' +
                  (active
                    ? 'bg-[color-mix(in_srgb,var(--accent)_13%,transparent)] border-[color-mix(in_srgb,var(--accent)_40%,transparent)] text-accent'
                    : 'border-transparent text-muted hover:bg-panel2 hover:text-fg')
                }
              >
                <span className="w-[7px] h-[7px] rounded-full flex-none" style={{ background: SEV_COLORVAR[d.sev] }} />
                <span className="flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">{tr(d.title)}</span>
              </button>
            )
          })
        )}
      </div>
    </section>
  )
}
