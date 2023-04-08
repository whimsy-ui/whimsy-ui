/** @format */
import { type App } from 'vue';
import { WsButton, WsWaterfall, WsCell, WsCellGroup, WsCheckbox, WsCheckboxGroup, WsRadio, WsRadioGroup } from '@whimsy-ui/components';
export { WsButton, WsWaterfall, WsCell, WsCellGroup, WsCheckbox, WsCheckboxGroup, WsRadio, WsRadioGroup };
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
    app.component(WsRadio.name, WsRadio);
    app.component(WsRadioGroup.name, WsRadioGroup);
  }
};
