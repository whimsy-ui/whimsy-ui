import { ref, reactive, computed } from 'vue';
import type { SetupContext, CSSProperties } from 'vue';
import { ImageProps, ImageEmits } from './image';
import { addUnit, isDef } from '@whimsy-ui/utils';
export default (props: ImageProps, emits: SetupContext<ImageEmits>['emit']) => {
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
  return { style, imgStyle, imgRef };
};
