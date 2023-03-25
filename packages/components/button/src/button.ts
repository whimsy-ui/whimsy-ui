import type { ExtractPropTypes, PropType } from 'vue';
import { VariantProp, TypeProp, BooleanProp } from '../../composables';
import { ButtonSize } from './type';
export const ButtonSizeProp = {
  type: String as PropType<ButtonSize>,
  validator: (value: string) => ['mini', 'small', 'normal', 'large'].includes(value),
  default: 'normal'
};
export const buttonProps = {
  size: ButtonSizeProp,
  variant: VariantProp,
  type: TypeProp,
  icon: String,
  square: BooleanProp,
  round: BooleanProp,
  loading: BooleanProp
};
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
