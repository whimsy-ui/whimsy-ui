import { PopupProps, PopupEmits } from './popup';
import { watch, ref, type SetupContext, type CSSProperties, computed, reactive } from 'vue';
import { callInterceptor, isDef } from '@whimsy-ui/utils';
import { useGlobalZIndex } from '@whimsy-ui/hooks';
export default (props: PopupProps, emit: SetupContext<PopupEmits>['emit']) => {
  // <--------------- 表现控制 ------------------->
  const customZIndex = ref<number>();
  const style = computed(() => {
    const style: CSSProperties = {
      zIndex: customZIndex.value
    };

    return style;
  });
  // <--------------- 逻辑控制 ------------------->
  const opened = ref(false);
  const open = () => {
    if (!opened.value) {
      opened.value = true;
      customZIndex.value = isDef(props.zIndex) ? +props.zIndex : useGlobalZIndex();

      emit('open');
    }
  };
  const close = () => {
    if (!props.show && opened.value) {
      opened.value = false;
      emit('close');
    }
  };
  const closeInterceptor = () => {
    callInterceptor(props.beforeClose, {
      done: () => {
        emit('update:show', false);
        emit('close');
      }
    });
  };
  const overlayClick = (event: MouseEvent) => {
    emit('overlayClick', event);
    if (props.closeOnClickOverlay) {
      closeInterceptor();
    }
  };
  watch(
    () => props.show,
    (show) => {
      if (show && !opened.value) open();

      if (!show && opened.value) {
        opened.value = false;
        emit('close');
      }
    }
  );

  // <--------------- 动作控制 ------------------->
  const transitionName = ref<string>();
  watch(
    () => props.position,
    (pos) => {
      transitionName.value = pos === 'center' ? 'ws-fade' : `ws-slide-${pos}`;
      console.log(transitionName);
    },
    {
      immediate: true
    }
  );
  return {
    style,
    opened,
    customZIndex,
    open,
    close,
    overlayClick,
    transitionName
  };
};
