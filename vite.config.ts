import path from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: true,
    port: 3001
  },
  preview: {
    host: true,
    port: 3001
  },
  resolve: {
    // eslint-disable-next-line no-undef
    alias: { '@': path.resolve(__dirname, './src') }
  },
})