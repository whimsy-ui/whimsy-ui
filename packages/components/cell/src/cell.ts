import { ExtractPropTypes, PropType, type CSSProperties } from 'vue';
import { numericProp, unknownProp } from '@whimsy-ui/utils';
import { CLICK_EVENT } from '@whimsy-ui/constants';
export const cellProps = {
  title: numericProp,
  content: numericProp,
  isLink: Boolean,
  clickable: Boolean,
  titleClass: unknownProp,
  contentClass: unknownProp,
  titleStyle: null as unknown as PropType<string | CSSProperties>
};
export const cellEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof MouseEvent
};
export type CellProp = ExtractPropTypes<typeof cellProps>;
export type CellEmits = typeof cellEmits;
