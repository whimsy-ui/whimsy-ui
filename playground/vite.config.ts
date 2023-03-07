import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { WhimsyResolver } from 'whimsy-ui';
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
  }
});
