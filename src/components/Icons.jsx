// Iconos SVG inline (stroke = currentColor).
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Terminal = (p) => (
  <svg {...base} strokeWidth="2.2" {...p}><path d="M5 7l4 5-4 5" /><path d="M13 17h6" /></svg>
)
export const Search = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
)
export const Home = (p) => (
  <svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
)
export const Copy = (p) => (
  <svg {...base} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
)
export const ExternalLink = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M9 7h8v8" /></svg>
)
export const Warning = (p) => (
  <svg {...base} {...p}><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
)
export const Moon = (p) => (
  <svg {...base} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
)
export const Sun = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4" /></svg>
)
export const Books = (p) => (
  <svg {...base} {...p}><path d="M4 5h11v15H4z" /><path d="M15 5h5v15h-5" /></svg>
)
export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
)
