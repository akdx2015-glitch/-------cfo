import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    sourcemap: false,
    minify: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('recharts')) return 'recharts-vendor';
            if (id.includes('lucide')) return 'lucide-vendor';
            if (id.includes('xlsx')) return 'xlsx-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
})
