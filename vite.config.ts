import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from https://<user>.github.io/Mabo-Asp-Test/,
// so `npm run build:pages` publishes under that base. Local dev keeps "/".
const pagesBase = '/Mabo-Asp-Test/'

export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? pagesBase : '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5178,
  },
}))
