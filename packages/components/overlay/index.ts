import WsOverlay from './src/overlay.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsOverlay };
// 导出所有模块

export * from './src/overlay';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsOverlay.name, WsOverlay);
  }
};
