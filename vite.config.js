import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 5176
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    esbuild: {
      drop: ['console', 'debugger']
    }
  }
})
