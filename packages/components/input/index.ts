import WsInput from './src/input.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsInput };
// 导出所有模块

export * from './src/input';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsInput.name, WsInput);
  }
};
