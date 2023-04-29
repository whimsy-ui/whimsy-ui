import { ExtractPropTypes } from 'vue';
import { TypeProp } from '../../composables';
import { makeStringProp } from '@whimsy-ui/utils';

export const notifyProps = {
  type: TypeProp,
  message: makeStringProp('')
};
export const notifyEmits = {};
export type NotifyProps = ExtractPropTypes<typeof notifyProps>;
export type NotifyEmits = typeof notifyEmits;
