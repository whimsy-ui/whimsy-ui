import { ExtractPropTypes } from 'vue';
import { unknownProp } from '@whimsy-ui/utils';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@whimsy-ui/constants';
import { isArray, makeStringProp } from '@whimsy-ui/utils';
export const checkboxGroupProps = {
  modelValue: unknownProp,
  disabled: Boolean,
  max: Number,
  direction: makeStringProp<'horizontal' | 'vertical'>('vertical'),
  checkedColor: String
};
export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (newValue: any[]) => isArray(newValue)
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
