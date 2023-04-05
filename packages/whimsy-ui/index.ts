/** @format */
import { type App } from 'vue';
import { WsButton, WsWaterfall, WsCell, WsCellGroup, WsCheckbox, WsCheckboxGroup } from '@whimsy-ui/components';
export { WsButton, WsWaterfall, WsCell, WsCellGroup, WsCheckbox, WsCheckboxGroup };
// import { ElAffix } from 'element-plus';
// export { ElAffix };
export * from './resolver';
export * from '@whimsy-ui/presets';

export default {
  install(app: App) {
    app.component(WsButton.name, WsButton);
    app.component(WsWaterfall.name, WsWaterfall);
    app.component(WsCell.name, WsCell);
    app.component(WsCellGroup.name, WsCellGroup);
    app.component(WsCheckbox.name, WsCheckbox);
    app.component(WsCheckboxGroup.name, WsCheckboxGroup);
  }
};
