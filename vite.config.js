import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => ({
  plugins: [react()],

  /**
   * Since prod and dev are separate domains,
   * the base path is always root.
   */
  base: '/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}))
