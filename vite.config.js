import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import routes from './src/routes.json' with { type: 'json' };

// One HTML entry per page: /v1/ -> v1/index.html, /pricing/ -> pricing/index.html, …
// `/` is the version picker (index.html, not generated).
const input = {
  index: resolve(import.meta.dirname, 'index.html'),
  ...Object.fromEntries(
    routes.map(({ name, route }) => [name, resolve(import.meta.dirname, '.' + route, 'index.html')]),
  ),
};

export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { input }, chunkSizeWarningLimit: 1200 },
});
