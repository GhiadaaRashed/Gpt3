import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/GPT3_react_project",
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/deploy_react_app_github_pages_vercel',
})
