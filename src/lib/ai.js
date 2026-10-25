// Cliente de IA para generar dorks. Llama a cada API directamente desde el navegador.
// La clave la aporta el usuario y se guarda solo en su localStorage.

import { AI_PROVIDERS } from '../data/catalog.js'

export function systemPrompt() {
  return (
    'Eres un generador experto de Google dorks para reconocimiento AUTORIZADO (pentest, bug bounty o auditoria con permiso). ' +
    'Dada la necesidad del usuario, responde con 1 a 5 consultas de Google dork efectivas usando operadores (site:, inurl:, intitle:, filetype:, ext:, intext:, OR y comillas). ' +
    'Devuelve cada dork en su propio bloque de codigo con triple backtick y una breve explicacion de una linea. ' +
    'Los dorks solo descubren contenido ya indexado: no incluyas exploits, malware ni nada ilegal. Responde en el idioma del usuario.'
  )
}

// cfg = { provider, key, model, base }
// messages = [{ role: 'user'|'assistant', content }]
export async function callAI(cfg, messages) {
  const p = AI_PROVIDERS[cfg.provider]
  const model = cfg.model || p.model
  const sys = systemPrompt()

  if (cfg.provider === 'claude') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': cfg.key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        system: sys,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    })
    if (!r.ok) throw new Error(`HTTP ${r.status} ${(await r.text()).slice(0, 240)}`)
    const j = await r.json()
    return (j.content || []).map((b) => b.text || '').join('').trim()
  }

  if (cfg.provider === 'gemini') {
    const url =
      'https://generativelanguage.googleapis.com/v1beta/models/' +
      encodeURIComponent(model) +
      ':generateContent?key=' +
      encodeURIComponent(cfg.key)
    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ system_instruction: { parts: [{ text: sys }] }, contents }),
    })
    if (!r.ok) throw new Error(`HTTP ${r.status} ${(await r.text()).slice(0, 240)}`)
    const j = await r.json()
    return (((j.candidates || [])[0] || {}).content || {}).parts
      ? j.candidates[0].content.parts.map((x) => x.text || '').join('').trim()
      : ''
  }

  // openai / custom (compatible con OpenAI)
  const base = (cfg.provider === 'custom' ? cfg.base || p.base : 'https://api.openai.com/v1').replace(/\/+$/, '')
  const headers = { 'content-type': 'application/json' }
  if (cfg.key) headers['authorization'] = 'Bearer ' + cfg.key
  const r = await fetch(base + '/chat/completions', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: sys }].concat(
        messages.map((m) => ({ role: m.role, content: m.content })),
      ),
    }),
  })
  if (!r.ok) throw new Error(`HTTP ${r.status} ${(await r.text()).slice(0, 240)}`)
  const j = await r.json()
  return (((j.choices || [])[0] || {}).message || {}).content?.trim() || ''
}
