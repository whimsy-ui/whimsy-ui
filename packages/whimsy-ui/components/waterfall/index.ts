import WhWaterfall from './src/waterfall';
import { App } from 'vue';
// 导出Button组件
export { WhWaterfall };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WhWaterfall.name, WhWaterfall);
  }
};
