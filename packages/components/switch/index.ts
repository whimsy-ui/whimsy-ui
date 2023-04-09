import WsSwitch from './src/switch.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsSwitch };
// 导出所有模块

export * from './src/switch';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsSwitch.name, WsSwitch);
  }
};
