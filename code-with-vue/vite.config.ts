import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    // host: "0.0.0.0",
    proxy: {
      "^/api/.*": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
        // ws:true,
        headers: {
          "Origin": "http://127.0.0.1:8080",
          "X-Forwarded-Port": "5173",
          "X-Forwarded-Host": "localhost",
          "X-Forwarded-For": "http://localhost:5173",
        }
      }
    }
  },
})