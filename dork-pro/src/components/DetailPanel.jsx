import { useMemo } from 'react'
import { CATS, ENGINES, SEV_COLORVAR, SEV_LABEL } from '../data/catalog.js'
import { buildFull, engineUrl, needsDomain } from '../lib/query.js'
import { copyText } from '../lib/hooks.js'
import { Terminal, Copy, ExternalLink, Warning } from './Icons.jsx'
import LegalFoot from './LegalFoot.jsx'

export default function DetailPanel({ tr, dork, domain, setDomain, scope, setScope, onToast }) {
  const c = CATS[dork.cat]
  const full = useMemo(() => buildFull(dork, domain, scope), [dork, domain, scope])
  const warn = needsDomain(dork) && !domain.trim()

  const doCopy = async () => onToast((await copyText(full)) ? tr('Copiado al portapapeles') : tr('No se pudo copiar'))

  return (
    <div className="p-6 max-w-[980px]">
      <div className="font-mono text-[0.68rem] tracking-wider uppercase mb-1.5" style={{ color: c.color }}>
        {tr(c.label)}
      </div>
      <h2 className="m-0 mb-1 text-[1.55rem] font-bold tracking-tight font-mono">
        {tr(dork.title)}
        <span className="font-sans text-[0.62rem] font-semibold tracking-wide uppercase align-middle ml-2.5 inline-flex items-center gap-[5px]" style={{ color: SEV_COLORVAR[dork.sev] }}>
          <span className="w-[7px] h-[7px] rounded-full bg-current" />
          {tr(SEV_LABEL[dork.sev])}
        </span>
      </h2>
      <p className="text-muted text-[0.92rem] m-0 mb-5 max-w-[72ch]">{tr(dork.note)}</p>

      {/* Vista previa del comando */}
      <div className="preview-box border border-accent rounded-[14px] overflow-hidden mb-[22px]">
        <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-[color-mix(in_srgb,var(--accent)_30%,transparent)]">
          <span className="font-mono font-semibold text-[0.9rem] flex items-center gap-2 text-fg">
            <span className="text-accent">&gt;_</span> {tr('Vista previa del comando')}
          </span>
          <span className="ml-auto flex gap-1.5">
            <button onClick={doCopy} title={tr('Copiar')} aria-label={tr('Copiar')} className="w-8 h-8 rounded-lg border border-border bg-panel2 text-muted grid place-items-center cursor-pointer transition-colors hover:text-accent hover:border-accent">
              <Copy className="w-[15px] h-[15px]" />
            </button>
          </span>
        </div>
        {warn && (
          <div className="px-3.5 py-[9px] text-[0.78rem] text-warn bg-[color-mix(in_srgb,var(--warn)_12%,transparent)] border-b border-[color-mix(in_srgb,var(--warn)_25%,transparent)] flex items-center gap-2">
            <Warning className="w-[15px] h-[15px] flex-none" />
            {tr('Falta el dominio objetivo (se usará un marcador).')}
          </div>
        )}
        <div className="px-3.5 py-4 font-mono text-[0.94rem] leading-relaxed text-accentStrong whitespace-pre-wrap break-words">
          <span className="text-faint select-none">&gt;_ </span>
          {full}
        </div>
      </div>

      {/* Parámetro: dominio + alcance */}
      <div className="border border-border rounded-[14px] mb-[18px] overflow-hidden">
        <div className="px-4 py-[13px] font-semibold text-[0.95rem] border-b border-borderSoft bg-panel flex items-center gap-2">
          {tr('Parámetro')}
          <span className="font-mono text-[0.72rem] text-faint bg-panel2 px-2 py-px rounded-full">1</span>
        </div>
        <div className="p-4 bg-panel">
          <label className="block text-[0.74rem] font-semibold text-muted uppercase tracking-wide mb-2" htmlFor="domainInput">
            {tr('Dominio objetivo')} <span className="font-normal normal-case text-faint">{tr('(opcional)')}</span>
          </label>
          <div className="flex gap-2.5 flex-wrap">
            <input
              id="domainInput"
              type="text"
              value={domain}
              disabled={scope === 'all'}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="ejemplo.com"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 min-w-0 font-mono text-[0.9rem] px-[13px] py-[11px] rounded-[10px] bg-panel2 border border-border text-fg placeholder:text-faint disabled:opacity-45 focus-visible:outline-none focus-visible:border-accent"
            />
            <div className="inline-flex bg-panel2 border border-border rounded-[10px] p-[3px] gap-0.5" role="group">
              {[['site', 'site:', tr('Limitar al dominio con site:')], ['all', tr('web'), tr('Buscar en toda la web')]].map(([k, lbl, ttl]) => (
                <button
                  key={k}
                  onClick={() => setScope(k)}
                  aria-pressed={scope === k}
                  title={ttl}
                  className={
                    'font-mono text-[0.74rem] font-medium px-[11px] py-[7px] rounded-[7px] cursor-pointer border-0 ' +
                    (scope === k ? 'bg-accent text-[#140a03]' : 'bg-transparent text-muted')
                  }
                >
                  {lbl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buscadores */}
      <div className="border border-border rounded-[14px] mb-[18px] overflow-hidden">
        <div className="px-4 py-[13px] font-semibold text-[0.95rem] border-b border-borderSoft bg-panel flex items-center gap-2">
          {tr('Buscadores compatibles')}
          <span className="font-mono text-[0.72rem] text-faint bg-panel2 px-2 py-px rounded-full">{ENGINES.length}</span>
        </div>
        <div className="p-4 bg-panel">
          <div className="grid gap-[9px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
            {ENGINES.map((e, i) => (
              <a
                key={e.id}
                href={engineUrl(e, full)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  'group flex items-center gap-2.5 no-underline text-[0.86rem] font-semibold px-3 py-[11px] rounded-[10px] border transition-colors ' +
                  (i === 0
                    ? 'bg-accent text-[#140a03] border-accent hover:brightness-110'
                    : 'bg-panel2 text-fg border-border hover:border-accent hover:text-accent')
                }
              >
                <span className="w-[22px] h-[22px] rounded-md flex-none grid place-items-center font-mono text-[0.7rem] font-bold text-white" style={{ background: e.color }}>
                  {e.short}
                </span>
                {e.name}
                <ExternalLink className={'ml-auto w-[15px] h-[15px] ' + (i === 0 ? 'text-[#140a03]' : 'text-faint group-hover:text-accent')} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <LegalFoot tr={tr} />
    </div>
  )
}
