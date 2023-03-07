/** @format */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import UnoCss from './config/uno.config';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import dts from 'vite-plugin-dts';

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCss(),
    vueSetupExtend({})
    // dts({
    //   // root: '../../tsconfig.json',
    //   entryRoot: process.cwd(),
    //   outputDir: './dist/types',
    //   insertTypesEntry: false, // 插入TS 入口
    //   copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
    // })
  ],
  build: {
    rollupOptions,
    minify: esbuild,
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: 'index',
      name: 'WhimsyUI',
      fileName: 'whimsy-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife', 'cjs']
    }
  },
  resolve: {
    alias: {}
  }
});
