import WsPopup from './src/popup.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsPopup };
// 导出所有模块

export * from './src/popup';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsPopup.name, WsPopup);
  }
};
