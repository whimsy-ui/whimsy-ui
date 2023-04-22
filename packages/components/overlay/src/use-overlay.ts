import { ref, reactive, computed, watch, onMounted, onUnmounted, StyleHTMLAttributes } from 'vue';
import type { SetupContext, CSSProperties } from 'vue';
import { OverlayBarProps, OverlayBarEmits } from './overlay';
import { isDef, raf2, getZIndexStyle } from '@whimsy-ui/utils';
export default (props: OverlayBarProps, emits: SetupContext<OverlayBarEmits>['emit']) => {
  const style: CSSProperties = Object.assign(getZIndexStyle(props.zIndex));
  return { customStyle: style };
};
