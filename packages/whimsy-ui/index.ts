/** @format */
import { type App } from 'vue';
import { WsButton, WsWaterfall } from '@whimsy-ui/components';
export { WsButton, WsWaterfall };
import 'uno.css';

export default {
  install(app: App) {
    app.component(WsButton.name, WsButton);
    app.component(WsWaterfall.name, WsWaterfall);
  }
};
