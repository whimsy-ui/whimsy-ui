import { ExtractPropTypes } from 'vue';
import { unknownProp, numericProp, makeStringProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
import { makeNumericProp, truthProp } from '@whimsy-ui/utils';
export const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  lockScroll: Boolean,
  lazy: truthProp,
  // 是否开启失焦
  blur: truthProp
};
export const overlayEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;
export type OverlayEmits = typeof overlayEmits;
