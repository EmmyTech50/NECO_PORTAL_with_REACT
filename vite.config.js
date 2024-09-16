import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://beautifulcolourslaundry.com.ng/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          // 'charting-lib': ['chart.js'],
        },
      },
    },
  },
})


