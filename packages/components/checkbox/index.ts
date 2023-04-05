import WsCheckbox from './src/checkbox.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsCheckbox };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsCheckbox.name, WsCheckbox);
  }
};
