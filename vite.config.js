import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nikhil_profile25/', // 👈 matches your repo name
  plugins: [react()],
})
