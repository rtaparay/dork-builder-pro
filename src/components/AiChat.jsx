import { useEffect, useRef, useState } from 'react'
import { AI_PROVIDERS } from '../data/catalog.js'
import { callAI } from '../lib/ai.js'
import { copyText, useLocalStorage } from '../lib/hooks.js'

// Divide el contenido por bloques ``` y renderiza bloques de código con acciones.
function AiContent({ tr, content, onToast }) {
  const parts = String(content).split('```')
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          const code = part.replace(/^[a-zA-Z0-9_-]*\n/, '').trim()
          return (
            <div key={i} className="my-2 border border-borderSoft rounded-[9px] overflow-hidden bg-panel3">
              <code className="block px-3 py-2.5 font-mono text-[0.82rem] text-accentStrong whitespace-pre-wrap break-words">{code}</code>
              <div className="flex gap-[7px] px-2.5 py-2 border-t border-borderSoft bg-panel">
                <button
                  onClick={async () => onToast((await copyText(code)) ? tr('Copiado al portapapeles') : tr('No se pudo copiar'))}
                  className="font-sans text-[0.76rem] font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-panel2 text-fg cursor-pointer hover:border-accent hover:text-accent"
                >
                  {tr('Copiar')}
                </button>
                <a
                  href={'https://www.google.com/search?num=50&q=' + encodeURIComponent(code)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[0.76rem] font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-panel2 text-fg no-underline hover:border-accent hover:text-accent"
                >
                  {tr('Abrir en Google')}
                </a>
              </div>
            </div>
          )
        }
        return part.trim() ? (
          <p key={i} className="m-0 mb-1.5 last:mb-0 whitespace-pre-wrap">{part}</p>
        ) : null
      })}
    </>
  )
}

export default function AiChat({ tr, onToast }) {
  const [provider, setProvider] = useLocalStorage('dork-ai-provider', 'gemini')
  const [keys, setKeys] = useLocalStorage('dork-ai-keys', {})
  const [models, setModels] = useLocalStorage('dork-ai-models', {})
  const [bases, setBases] = useLocalStorage('dork-ai-bases', {})
  const [messages, setMessages] = useState([])
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [cfgOpen, setCfgOpen] = useState(false)
  const transcriptRef = useRef(null)

  const p = AI_PROVIDERS[provider] || AI_PROVIDERS.gemini
  const key = keys[provider] || ''
  const model = models[provider] || ''
  const base = bases[provider] || ''

  useEffect(() => {
    const el = transcriptRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, busy])

  async function send() {
    const text = draft.trim()
    if (busy || !text) return
    if (provider !== 'custom' && !key) {
      setMessages((m) => [...m, { role: 'assistant', content: '⚠️ ' + tr('Falta la clave API.') }])
      setCfgOpen(true)
      return
    }
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setDraft('')
    setBusy(true)
    try {
      const reply = await callAI({ provider, key, model, base }, next)
      setMessages((m) => [...m, { role: 'assistant', content: reply || '…' }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: '⚠️ ' + tr('Error al consultar la IA:') + ' ' + (e?.message || e) }])
    } finally {
      setBusy(false)
    }
  }

  const label = 'flex flex-col gap-1.5 text-[0.72rem] font-semibold uppercase tracking-wide text-muted'
  const field =
    'font-mono text-[0.86rem] px-[11px] py-[9px] rounded-[9px] bg-panel border border-border text-fg focus-visible:outline-none focus-visible:border-accent'

  return (
    <div className="border border-border rounded-2xl bg-panel overflow-hidden mb-[22px]">
      {/* Cabecera */}
      <div className="flex items-center gap-3 px-4 py-3.5 border-b border-borderSoft flex-wrap">
        <div className="flex items-center gap-[11px] min-w-0 flex-1">
          <span className="w-[34px] h-[34px] rounded-[9px] flex-none grid place-items-center font-mono font-bold text-[0.78rem] text-[#140a03] bg-gradient-to-br from-accent to-accentStrong">AI</span>
          <div className="min-w-0">
            <div className="font-bold text-base tracking-tight">{tr('Asistente IA')}</div>
            <div className="text-muted text-[0.8rem]">{tr('Genera dorks con IA. Describe tu objetivo y la IA propondrá consultas.')}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[0.7rem] text-accent border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-2 py-[3px] rounded-full">
            {tr(p.label)}
          </span>
          <button onClick={() => setMessages([])} className="font-sans text-[0.76rem] font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-panel2 text-fg cursor-pointer hover:border-accent hover:text-accent">
            {tr('Limpiar chat')}
          </button>
          <button onClick={() => setCfgOpen((v) => !v)} className="font-sans text-[0.76rem] font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-panel2 text-fg cursor-pointer hover:border-accent hover:text-accent">
            {tr('Configurar')}
          </button>
        </div>
      </div>

      {/* Configuración */}
      {cfgOpen && (
        <div className="px-4 py-3.5 border-b border-borderSoft bg-panel2 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {tr('Proveedor')}
              <select className={field} value={provider} onChange={(e) => setProvider(e.target.value)}>
                {Object.entries(AI_PROVIDERS).map(([k, v]) => (
                  <option key={k} value={k}>{tr(v.label)}</option>
                ))}
              </select>
            </label>
            <label className={label}>
              {tr('Modelo')}
              <input className={field} type="text" value={model} placeholder={p.model || ''} autoComplete="off" spellCheck={false} onChange={(e) => setModels({ ...models, [provider]: e.target.value })} />
            </label>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className={label}>
              {tr('Clave API')}
              <input className={field} type="password" value={key} autoComplete="off" placeholder={provider === 'gemini' ? 'AIza…' : provider === 'claude' ? 'sk-ant-…' : provider === 'openai' ? 'sk-…' : '—'} onChange={(e) => setKeys({ ...keys, [provider]: e.target.value })} />
            </label>
            {p.needsBase && (
              <label className={label}>
                {tr('URL base')}
                <input className={field} type="text" value={base || p.base} autoComplete="off" spellCheck={false} placeholder="http://localhost:11434/v1" onChange={(e) => setBases({ ...bases, [provider]: e.target.value })} />
              </label>
            )}
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-[0.76rem] text-faint">{tr('La clave se guarda solo en este navegador.')}</span>
            <button onClick={() => setCfgOpen(false)} className="font-sans text-[0.76rem] font-semibold px-2.5 py-1.5 rounded-lg border border-accent bg-accent text-[#140a03] cursor-pointer">
              {tr('Guardar')}
            </button>
          </div>
        </div>
      )}

      {/* Transcripción */}
      <div ref={transcriptRef} className="max-h-[340px] overflow-y-auto px-4 py-3.5 flex flex-col gap-3.5">
        {messages.length === 0 ? (
          <div className="text-muted text-[0.86rem] text-center py-5">{tr('Configura un proveedor y una clave API para empezar.')}</div>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={'flex flex-col gap-[5px] ' + (m.role === 'user' ? 'items-end' : '')}>
              <span className="font-mono text-[0.62rem] tracking-wider uppercase text-faint">{m.role === 'user' ? tr('Tú') : tr('IA')}</span>
              <div className={'max-w-[92%] px-3 py-2.5 rounded-xl text-[0.88rem] leading-relaxed border ' + (m.role === 'user' ? 'bg-[color-mix(in_srgb,var(--accent)_14%,var(--panel))] border-[color-mix(in_srgb,var(--accent)_35%,transparent)]' : 'bg-panel2 border-border')}>
                {m.role === 'assistant' ? <AiContent tr={tr} content={m.content} onToast={onToast} /> : m.content}
              </div>
            </div>
          ))
        )}
        {busy && (
          <div className="flex flex-col gap-[5px]">
            <span className="font-mono text-[0.62rem] tracking-wider uppercase text-faint">{tr('IA')}</span>
            <div className="max-w-[92%] px-3 py-2.5 rounded-xl text-[0.88rem] border border-border bg-panel2 text-muted italic">{tr('Pensando…')}</div>
          </div>
        )}
      </div>

      {/* Entrada */}
      <div className="flex gap-2.5 px-4 py-3 border-t border-borderSoft items-end">
        <textarea
          rows={2}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          placeholder={tr('Escribe tu objetivo… (ej. encontrar archivos .env de ejemplo.com)')}
          className="flex-1 resize-y min-h-[42px] max-h-[160px] font-sans text-[0.9rem] px-3 py-2.5 rounded-[10px] bg-panel2 border border-border text-fg focus-visible:outline-none focus-visible:border-accent"
        />
        <button onClick={send} disabled={busy} className="flex-none font-semibold text-[0.88rem] px-[18px] py-[11px] rounded-[10px] border border-accent bg-accent text-[#140a03] cursor-pointer hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed">
          {tr('Enviar')}
        </button>
      </div>
      <div className="px-4 py-2.5 border-t border-borderSoft text-faint text-[0.74rem]">
        {tr('Solo para objetivos autorizados. La IA puede equivocarse; revisa cada consulta.')}
      </div>
    </div>
  )
}
