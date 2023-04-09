import { ExtractPropTypes } from 'vue';
import { unknownProp, makeStringProp, isString, isNumber } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT } from '@whimsy-ui/constants';
export const radioProps = {
  modelValue: unknownProp,
  disabled: Boolean,
  labelDisabled: Boolean,
  shape: makeStringProp<'round' | 'square'>('round'),
  checkedColor: String,
  name: {
    type: [Symbol, String]
  }
};
export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (newValue: any) => isString(newValue) || isNumber(newValue)
};
export type RadioProps = ExtractPropTypes<typeof radioProps>;
