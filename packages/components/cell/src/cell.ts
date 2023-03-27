import { ExtractPropTypes } from 'vue';
import { numericProp } from '@whimsy-ui/utils';
export const cellProps = {
  title: numericProp,
  value: numericProp,
  isLink: Boolean
};
export type CellProp = ExtractPropTypes<typeof cellProps>;
