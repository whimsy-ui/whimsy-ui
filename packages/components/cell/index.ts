import WsCell from './src/cell.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsCell };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsCell.name, WsCell);
  }
};
