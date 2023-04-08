import WsRadioGroup from './src/radio-group.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsRadioGroup };
// 导出所有模块

export * from './src/radio-group';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsRadioGroup.name, WsRadioGroup);
  }
};
