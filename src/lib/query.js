// Construcción de la consulta final a partir de un dork + dominio + alcance.

export function cleanDomain(d) {
  return (d || '').trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/\s+/g, '')
}

export function buildFull(dork, domain, scope) {
  const dom = cleanDomain(domain) || 'tudominio.com'
  const filled = (dork.q || '').replace(/\{dom\}/g, dom)
  if (dork.noSite) return filled.trim()
  const d = cleanDomain(domain)
  const prefix = scope === 'site' && d ? `site:${d} ` : ''
  return (prefix + filled).trim()
}

export function engineUrl(engine, full) {
  return engine.url + encodeURIComponent(full)
}

export function needsDomain(dork) {
  return !!(dork.noSite && /\{dom\}|\*\./.test(dork.q))
}
