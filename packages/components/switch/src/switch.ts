import { ExtractPropTypes } from 'vue';
import { unknownProp, numericProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
export const switchProps = {
  modelValue: unknownProp,
  loading: Boolean,
  disabled: Boolean,
  size: numericProp,
  activeValue: {
    type: unknownProp,
    default: true as unknown
  },
  inactiveValue: {
    type: unknownProp,
    default: false as unknown
  }
};
export const switchEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
export type SwitchEmits = typeof switchEmits;
