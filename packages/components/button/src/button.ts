import type { ExtractPropTypes } from 'vue';

export const size = {
  small: {
    x: '2',
    y: '1',
    text: 'sm'
  },
  medium: {
    x: '3',
    y: '2',
    text: 'base'
  },
  large: {
    x: '4',
    y: '3',
    text: 'lg'
  }
};
const sizeValues = ['small', 'medium', 'large'];
const colorValues = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
export const buttonProps = {
  size: {
    type: String,
    values: sizeValues,
    default: 'medium'
  },
  color: {
    type: String,
    values: colorValues,
    default: 'gray'
  },
  round: Boolean,
  plain: Boolean,
  icon: String
};
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
