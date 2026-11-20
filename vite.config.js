import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pagesBasePath = process.env.VITE_BASE_PATH
const base = pagesBasePath ? `${pagesBasePath.replace(/\/+$/, '')}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
