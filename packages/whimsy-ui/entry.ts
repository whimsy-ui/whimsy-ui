/** @format */
import { type App } from 'vue';
import { WhButton } from './components';
import { WhWaterfall } from './components';
export { WhButton, WhWaterfall };
export default {
  install(app: App) {
    app.component(WhButton.name, WhButton);
    app.component(WhWaterfall.name, WhWaterfall);
  }
};
