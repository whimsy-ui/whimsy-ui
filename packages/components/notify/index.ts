import WsNotify from './src/notify.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsNotify };
// 导出所有模块
export { showNotify, closeNotify } from './src/func-call';
export * from './src/notify';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsNotify.name, WsNotify);
  }
};
