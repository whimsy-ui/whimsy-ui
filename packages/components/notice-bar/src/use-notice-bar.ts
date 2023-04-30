import { ref, reactive, computed } from 'vue';
import type { SetupContext, CSSProperties } from 'vue';
import { NoticeBarProps, NoticeBarEmits } from './notice-bar';
import { onMountedOrActivated, useRect } from '@whimsy-ui/hooks';
import { isDef, raf2 } from '@whimsy-ui/utils';
export default (props: NoticeBarProps, emits: SetupContext<NoticeBarEmits>['emit']) => {
  // wrap计算宽度 content进行位移
  const wrapper = ref<HTMLDivElement>();
  const content = ref<HTMLDivElement>();
  // @ts-ignore
  let wrapperWidth = 0;
  let contentWidth = 0;
  const stats = reactive({
    show: true,
    offset: 0,
    duration: 0
  });
  const ellipsis = computed(() => !props.scrollable);
  const rightIconClick = () => {
    console.log('右侧按钮点击');
  };
  const contentStyle = computed(
    () =>
      ({
        transform: stats.offset ? `translateX(${stats.offset}px)` : '',
        transitionDuration: `${stats.duration}s`
      } as CSSProperties)
  );
  const init = () => {
    // 默认 1s 延迟，速度为 60px/s
    const { delay, speed, scrollable } = props;
    // @ts-ignore
    const ms = isDef(delay) ? +delay * 1000 : 0;
    // @ts-ignore
    wrapperWidth = 0;
    contentWidth = 0;
    stats.offset = 0;
    stats.duration = 0;
    const wrapperRefWidth = useRect(wrapper).width;
    const contentRefWidth = useRect(content).width;

    if (scrollable || contentRefWidth > wrapperRefWidth) {
      raf2(() => {
        wrapperWidth = wrapperRefWidth;
        contentWidth = contentRefWidth;
        stats.offset = -contentWidth;
        stats.duration = contentWidth / +speed;
      });
    }
  };
  onMountedOrActivated(init);
  return {
    stats,
    ellipsis,
    rightIconClick,
    init,
    wrapper,
    content,
    contentStyle
  };
};
