import { ExtractPropTypes, PropType } from 'vue';
import { makeStringProp } from '@whimsy-ui/utils';
import { LOAD, ERROR } from '@whimsy-ui/constants';
import { truthProp, numericProp } from '@whimsy-ui/utils';
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
  position: String as PropType<ImagePosition>,
  showLoading: truthProp,
  showError: truthProp
};
export const imageEmits = {
  [LOAD]: (event?: Event) => event instanceof Event,
  [ERROR]: (event?: Event) => event instanceof Event
};

export type ImageProps = ExtractPropTypes<typeof imageProps>;
export type ImageEmits = typeof imageEmits;
