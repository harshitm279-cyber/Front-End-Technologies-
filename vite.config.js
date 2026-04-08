import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Keep this in sync with the backend port from launchSettings / dotnet run.
        target: "http://localhost:5098",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
