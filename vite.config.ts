import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets like JS and CSS
    sourcemap: true, // Enable sourcemaps for debugging
  },
})
