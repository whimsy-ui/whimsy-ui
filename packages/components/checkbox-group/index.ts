import WsCheckboxGroup from './src/checkbox-group.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsCheckboxGroup };
// 导出所有模块

export * from './src/checkbox-group';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsCheckboxGroup.name, WsCheckboxGroup);
  }
};
