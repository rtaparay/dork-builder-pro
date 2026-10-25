import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite + React 19 + Tailwind CSS v4 (plugin oficial, sin postcss.config)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
