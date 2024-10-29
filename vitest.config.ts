import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => ({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  plugins: [svelte({ hot: !process.env.VITEST })],
}));
