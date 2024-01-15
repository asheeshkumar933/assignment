import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{

      '/api': 'https://super-duper-winner-v6v7pg76x4r6hwqg-5174.app.github.dev/:3000',
      
    },

  },
  plugins: [react()],
})
