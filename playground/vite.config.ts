import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { WhimsyResolver } from 'whimsy-ui';
import path from 'path';
import buildUtils from '@whimsy-ui/build-utils';
const { wsRoot } = buildUtils;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: `${__dirname}/**/*.vue`,
      resolvers: WhimsyResolver({}),
      dts: true
    })
  ],
  optimizeDeps: {
    include: ['vue', '@vue/shared']
  },
  resolve: {
    // 此处设置别名是为了配合unplugin的路径解析
    alias: [
      {
        find: /^whimsy-ui(\/(es|lib))?$/,
        replacement: path.resolve(wsRoot, 'index.ts')
      },
      {
        find: /^whimsy-ui\/(es|lib)\/(.*)$/,
        replacement: `${wsRoot}/$2`
      }
    ]
  }
});
