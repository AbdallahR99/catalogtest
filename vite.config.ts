/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';
// import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src/assets/styles'],
      },
    },
  },
  force: true,
  server: {
    force: true,
    fs: {
      cachedChecks: false,
    },
  },
  build: {
    ssr: false,
    force: true,

    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/app/core'),
      '@pages': resolve(__dirname, 'src/app/pages'),
      '@environments': resolve(__dirname, 'src/app/environments'),
      '@app': resolve(__dirname, 'src/app'),
      '@server': resolve(__dirname, 'src/server'),
    },
  },

  plugins: [
    viteTsConfigPaths(),

    analog({
      ssr: false,
    }),
    angular({
      inlineStylesExtension: 'scss',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
