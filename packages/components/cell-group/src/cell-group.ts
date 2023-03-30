import { ExtractPropTypes } from 'vue';
import { truthProp } from '../../composables';
export const cellGroupProps = {
  title: String,
  inset: Boolean,
  border: truthProp
};
export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;
