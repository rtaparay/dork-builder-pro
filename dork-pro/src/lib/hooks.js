import { useCallback, useEffect, useState } from 'react'

// Estado persistido en localStorage (tolerante a errores / modo privado).
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw == null ? initial : JSON.parse(raw)
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* noop */
    }
  }, [key, value])
  return [value, setValue]
}

// Toast simple.
export function useToast() {
  const [toast, setToast] = useState('')
  const show = useCallback((msg) => {
    setToast(msg)
    window.clearTimeout(show._t)
    show._t = window.setTimeout(() => setToast(''), 1600)
  }, [])
  return [toast, show]
}

export async function copyText(txt) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(txt)
      return true
    }
  } catch {
    /* fallthrough */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = txt
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    return true
  } catch {
    return false
  }
}
