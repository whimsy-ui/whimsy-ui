import { ExtractPropTypes } from 'vue';
import { unknownProp, makeStringProp, makeNumericProp, isString, numericProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
export type InputType =
  | 'tel'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local';
export const inputProps = {
  modelValue: unknownProp,
  // input组件唯一id
  id: String,
  // 左边标签传参
  label: String,
  required: Boolean,
  labelAlign: makeStringProp<'center' | 'right' | ''>('center'),
  labelWidth: makeNumericProp(''),
  placeholder: String,
  type: makeStringProp<InputType>('text'),
  showWordLimit: Boolean,
  maxLength: numericProp
};
export const inputEmits = {
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  input: (value: string) => isString(value),
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  composingstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  composingend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  keypress: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
  [CHANGE_EVENT]: (value: string) => isString(value),
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value)
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
