import { ref, reactive, computed, watch } from 'vue';
import type { SetupContext, CSSProperties } from 'vue';
import { ImageProps, ImageEmits } from './image';
import { addUnit, isDef } from '@whimsy-ui/utils';
export default (props: ImageProps, emit: SetupContext<ImageEmits>['emit']) => {
  const states = reactive({
    error: false,
    loading: true
  });
  watch(
    () => props.src,
    () => {
      states.error = false;
      states.loading = true;
    }
  );
  const imgRef = ref<HTMLImageElement>();
  const style = computed(() => {
    const style: CSSProperties = {
      width: addUnit(props.width),
      height: addUnit(props.height)
    };
    if (isDef(props.radius)) {
      style.borderRadius = addUnit(props.radius);
      style.overflow = 'hidden';
    }
    return style;
  });
  const imgStyle = computed(() => {
    const style: CSSProperties = {
      objectFit: props.fit,
      objectPosition: props.position
    };
    return style;
  });
  const onload = (evt?: Event) => {
    states.loading = false;
    emit('load', evt);
  };
  const onerror = (evt?: Event) => {
    states.error = true;
    states.loading = false;
    emit('error', evt);
  };
  return { style, imgStyle, imgRef, onload, onerror, states };
};
