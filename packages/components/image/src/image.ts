import { ExtractPropTypes, PropType } from 'vue';
import { makeStringProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
import { makeNumericProp, numericProp } from '@whimsy-ui/utils';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type ImagePosition = 'center' | 'top' | 'right' | 'bottom' | 'left' | string;
export const imageProps = {
  src: String,
  alt: String,
  width: numericProp,
  height: numericProp,
  radius: numericProp,
  round: Boolean,
  fit: String as PropType<ImageFit>,
  position: String as PropType<ImagePosition>
};
export const imageEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;
export type ImageEmits = typeof imageEmits;
