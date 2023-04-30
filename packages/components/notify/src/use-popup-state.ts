import { reactive } from 'vue';
import { assign } from '@whimsy-ui/utils';
import { useExpose } from '@whimsy-ui/hooks';
export function usePopupState() {
  const state = reactive<{
    show: boolean;
    [key: string]: any;
  }>({
    show: false
  });

  const toggle = (show: boolean) => {
    state.show = show;
  };
  const open = (props: Record<string, any>) => {
    assign(state, props);
    toggle(true);
  };
  const close = () => toggle(false);
  useExpose({
    state,
    open,
    close,
    toggle
  });
  return {
    state,
    open,
    close,
    toggle
  };
}
