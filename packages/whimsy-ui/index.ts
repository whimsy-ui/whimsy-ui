/** @format */
import { type App } from 'vue';
import { WsButton, WsWaterfall } from '@whimsy-ui/components';
export { WsButton, WsWaterfall };
// import { ElAffix } from 'element-plus';
// export { ElAffix };
export * from './resolver';
export * from '@whimsy-ui/presets';

export default {
  install(app: App) {
    app.component(WsButton.name, WsButton);
    app.component(WsWaterfall.name, WsWaterfall);
  }
};
