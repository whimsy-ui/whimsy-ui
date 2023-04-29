import { ExtractPropTypes, PropType } from 'vue';
import { TypeProp } from '../../composables';
import { OPEN, CLOSE, UPDATE_SHOW_EVENT } from '@whimsy-ui/constants';
import { makeStringProp, numericProp, truthProp } from '@whimsy-ui/utils';
export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export const popupProps = {
  show: Boolean,
  overlay: truthProp,
  zIndex: numericProp,
  closeOnClickOverlay: truthProp,
  beforeClose: Function as PropType<(...args: any[]) => Promise<boolean> | boolean | undefined | void>,
  position: makeStringProp<PopupPosition>('center'),
  blur: truthProp
};
export const popupEmits = {
  overlayClick: (event: MouseEvent) => true,
  [UPDATE_SHOW_EVENT]: (newValue: boolean) => true,
  [OPEN]: () => true,
  [CLOSE]: () => true
};
export type PopupProps = ExtractPropTypes<typeof popupProps>;
export type PopupEmits = typeof popupEmits;
