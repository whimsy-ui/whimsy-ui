import { ExtractPropTypes } from 'vue';
import { unknownProp } from '@whimsy-ui/utils';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@whimsy-ui/constants';
import { isString, isNumber, isBoolean, makeStringProp } from '@whimsy-ui/utils';
export const checkboxProps = {
  modelValue: unknownProp,
  disabled: Boolean,
  labelDisabled: Boolean,
  shape: makeStringProp<'round' | 'square'>('round'),
  name: {
    type: [Symbol, String]
  }
};
export const checkboxEmits = {
  [CHANGE_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent,
  [UPDATE_MODEL_EVENT]: (val: any) => isString(val) || isNumber(val) || isBoolean(val)
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
