import path from 'path';

import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElementPlus({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
