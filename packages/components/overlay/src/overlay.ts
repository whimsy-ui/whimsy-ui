import { ExtractPropTypes } from 'vue';
import { unknownProp, numericProp, makeStringProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
import { makeNumericProp, truthProp } from '@whimsy-ui/utils';
export const overlayBarProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  lockScroll: Boolean,
  lazy: truthProp
};
export const overlayBarEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type OverlayBarProps = ExtractPropTypes<typeof overlayBarProps>;
export type OverlayBarEmits = typeof overlayBarEmits;
