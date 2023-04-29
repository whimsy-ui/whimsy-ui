import { ExtractPropTypes } from 'vue';
import { TypeProp } from '../../composables';
import { makeStringProp } from '@whimsy-ui/utils';
import { globalPopupProps } from '@whimsy-ui/components/popup';
import { UPDATE_SHOW_EVENT } from '@whimsy-ui/constants';
export type NotifyPosition = 'top' | 'bottom';

export const notifyProps = {
  ...globalPopupProps,
  type: TypeProp,
  message: makeStringProp(''),
  position: makeStringProp<NotifyPosition>('top'),
  background: String,
  color: String
};
export const notifyEmits = {
  [UPDATE_SHOW_EVENT]: (newValue: boolean) => true
};
export type NotifyProps = ExtractPropTypes<typeof notifyProps>;
export type NotifyEmits = typeof notifyEmits;
