import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '',
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr(), TanStackRouterVite()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@i18n', replacement: path.resolve(__dirname, 'src/i18n') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
});
