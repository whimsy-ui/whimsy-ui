/** @format */
import { type App } from 'vue';
import {
  WsButton,
  WsWaterfall,
  WsCell,
  WsCellGroup,
  WsCheckbox,
  WsCheckboxGroup,
  WsRadio,
  WsRadioGroup,
  WsSwitch,
  WsInput,
  WsNoticeBar,
  WsOverlay,
  WsNotify,
  WsPopup,
  WsImage
} from '@whimsy-ui/components';
export { WsButton, WsWaterfall, WsCell, WsCellGroup, WsCheckbox, WsCheckboxGroup, WsRadio, WsRadioGroup, WsSwitch, WsInput, WsNoticeBar, WsOverlay, WsNotify, WsPopup, WsImage };

export * from './resolver';
export * from '@whimsy-ui/presets';

export * from '@whimsy-ui/components';

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
    app.component(WsSwitch.name, WsSwitch);
    app.component(WsInput.name, WsInput);
    app.component(WsOverlay.name, WsOverlay);
    app.component(WsNotify.name, WsNotify);
    app.component(WsPopup.name, WsPopup);
    app.component(WsImage.name, WsImage);
  }
};
