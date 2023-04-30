import { reactive, watch } from 'vue';
import type { SetupContext, CSSProperties } from 'vue';
import { OverlayProps, OverlayEmits } from './overlay';
import { getZIndexStyle } from '@whimsy-ui/utils';
export default (props: OverlayProps, emits: SetupContext<OverlayEmits>['emit']) => {
  const style: CSSProperties = reactive({});
  watch(
    () => props.zIndex,
    () => {
      Object.assign(style, getZIndexStyle(props.zIndex));
    }
  );
  return { customStyle: style };
};
