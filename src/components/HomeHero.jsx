import { CATS, DORKS, ENGINES } from '../data/catalog.js'
import { Books, Terminal, Search, Shield } from './Icons.jsx'
import AiChat from './AiChat.jsx'
import LegalFoot from './LegalFoot.jsx'

function Stat({ icon, label, num, sub }) {
  return (
    <div className="border border-border rounded-[14px] bg-panel px-[18px] pt-[18px] pb-4">
      <div className="flex items-center justify-between gap-2.5 text-muted text-[0.86rem] font-medium">
        <span>{label}</span>
        <span className="w-[30px] h-[30px] rounded-lg bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-accent grid place-items-center flex-none">{icon}</span>
      </div>
      <div className="font-mono text-[2rem] font-bold tracking-tight mt-3 mb-0.5">{num}</div>
      <div className="text-faint text-[0.78rem] font-mono">{sub}</div>
    </div>
  )
}

export default function HomeHero({ tr, onToast }) {
  const nLibs = Object.keys(CATS).length
  const ico = 'w-4 h-4'
  return (
    <div className="p-6 max-w-[980px]">
      <div className="hero-panel border border-border rounded-2xl px-9 pt-10 pb-11 mb-[22px] relative overflow-hidden">
        <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold tracking-wider uppercase text-accent border border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-[11px] py-1.5 rounded-[7px] mb-5">
          &gt;_ {tr('Catálogo de Google dorks')}
        </span>
        <h2 className="m-0 mb-4 font-bold leading-[1.05] tracking-tight max-w-[18ch] text-balance" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
          {tr('Construye tus Google dorks sin perder el contexto.')}
        </h2>
        <p className="m-0 text-muted text-[1.02rem] leading-relaxed max-w-[56ch]">
          {tr('Explora cada biblioteca, arma la consulta operador por operador y ábrela en el buscador que prefieras. Todo en un solo lugar.')}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-[22px]">
        <Stat icon={<Books className={ico} />} label={tr('Bibliotecas')} num={nLibs} sub={tr('categorías de recon')} />
        <Stat icon={<Terminal className={ico} />} label={tr('Dorks')} num={DORKS.length} sub={tr('consultas listas para usar')} />
        <Stat icon={<Search className={ico} />} label={tr('Buscadores')} num={ENGINES.length} sub={tr('destinos de búsqueda')} />
        <Stat icon={<Shield className={ico} />} label={tr('Niveles de riesgo')} num={3} sub={tr('alto · medio · informativo')} />
      </div>

      <AiChat tr={tr} onToast={onToast} />

      <LegalFoot tr={tr} />
    </div>
  )
}
