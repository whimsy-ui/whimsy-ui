import WsNoticeBar from './src/notice-bar.vue';
import type { App } from 'vue';
// 导出Button组件
export { WsNoticeBar };
// 导出所有模块

export * from './src/notice-bar';
// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsNoticeBar.name, WsNoticeBar);
  }
};
