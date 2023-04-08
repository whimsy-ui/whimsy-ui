import WsRadio from './src/radio.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsRadio };
// 导出所有模块

export * from './src/radio';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsRadio.name, WsRadio);
  }
};
