import { ExtractPropTypes } from 'vue';
import { unknownProp, numericProp, makeStringProp } from '@whimsy-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@whimsy-ui/constants';
import { makeNumericProp } from '@whimsy-ui/utils';
export const noticeBarProps = {
  mode: makeStringProp<'closable' | 'link' | ''>(''),
  text: String,
  scrollable: Boolean,
  delay: makeNumericProp(1),
  speed: makeNumericProp(60)
};
export const noticeBarEmits = {
  [CHANGE_EVENT]: (newValue: unknown) => true,
  [UPDATE_MODEL_EVENT]: (newValue: unknown) => true
};

export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>;
export type NoticeBarEmits = typeof noticeBarEmits;
