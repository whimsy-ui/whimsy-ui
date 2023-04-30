import { ExtractPropTypes } from 'vue';
import { unknownProp, makeStringProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
export const inputProps = {
  modelValue: unknownProp,
  required: Boolean,
  labelAlign: makeStringProp<'center' | 'right' | ''>('')
};
export const inputEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
