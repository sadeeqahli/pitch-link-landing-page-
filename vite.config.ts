import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['pitchlinkapp.net']
    // OR: allowedHosts: 'all'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  }
})