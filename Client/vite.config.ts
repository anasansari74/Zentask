import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Shortcut for imports (e.g., `@/components/Button`)
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // CSS Modules → camelCase classNames
    },
  },
})