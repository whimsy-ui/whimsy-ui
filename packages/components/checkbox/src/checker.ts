import { ExtractPropTypes } from 'vue';
import { makeRequiredProp } from '@whimsy-ui/utils';
import { TOGGLE_EVENT } from '@whimsy-ui/constants';
import { checkboxProps } from './checkbox';
export const checkerProps = {
  checked: Boolean,
  ns: makeRequiredProp(Object),
  ...checkboxProps
};
// 为发出事件添加类型校验,返回值为true则通过校验
export const checkerEmits = {
  [TOGGLE_EVENT]: (newValue?: boolean) => true
};
export type CheckerProps = ExtractPropTypes<typeof checkerProps>;
export type CheckerEmits = typeof checkerEmits;
