import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: '../../dist/extensions',
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 5173,
  },
}); 