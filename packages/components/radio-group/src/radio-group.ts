import { ExtractPropTypes } from 'vue';
import { unknownProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT } from '@whimsy-ui/constants';
import { isArray, makeStringProp } from '@whimsy-ui/utils';
export const radioGroupProps = {
  modelValue: unknownProp,
  disabled: Boolean,
  direction: makeStringProp<'horizontal' | 'vertical'>('vertical'),
  checkedColor: String
};
export const radioGroupEmits = {
  [UPDATE_MODEL_EVENT]: (newValue: any[]) => isArray(newValue)
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
