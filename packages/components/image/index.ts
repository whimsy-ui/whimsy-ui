import WsImage from './src/image.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsImage };
// 导出所有模块

export * from './src/image';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsImage.name, WsImage);
  }
};
