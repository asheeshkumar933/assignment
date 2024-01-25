import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD

  server:{

    proxy:{
      '/api': 'http://localhost:3000',
    },

  },


=======
  server: {
    proxy:{

      '/api': 'https://super-duper-winner-v6v7pg76x4r6hwqg-5174.app.github.dev/:3000',
      
    },

  },
>>>>>>> 8eddd2c4f09c630713deba00b8627e1047da5beb
  plugins: [react()],
})
