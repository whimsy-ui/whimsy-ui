import WsButton from './src/button.vue';
import { App } from 'vue';
// 导出Button组件
export { WsButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsButton.name, WsButton);
  }
};
