import WsCellGroup from './src/cell-group.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsCellGroup };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsCellGroup.name, WsCellGroup);
  }
};
