import { ExtractPropTypes } from 'vue';
import { numericProp } from '@whimsy-ui/utils';
import { CLICK_EVENT } from '@whimsy-ui/constants';
export const cellProps = {
  title: numericProp,
  content: numericProp,
  isLink: Boolean,
  clickable: Boolean
};
export const cellEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent
};
export type CellProp = ExtractPropTypes<typeof cellProps>;
export type CellEmits = typeof cellEmits;
