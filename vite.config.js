import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import routes from './src/routes.json' with { type: 'json' };

// One HTML entry per page: / -> index.html, /pricing/ -> pricing/index.html, …
const input = Object.fromEntries(
  routes.map(({ name, route }) => [name, resolve(import.meta.dirname, '.' + route, 'index.html')]),
);

export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { input }, chunkSizeWarningLimit: 1200 },
});
