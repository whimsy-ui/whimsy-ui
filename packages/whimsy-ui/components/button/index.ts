import WhButton from './src/button.vue';
import { App } from 'vue';
// 导出Button组件
export { WhButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WhButton.name, WhButton);
  }
};
