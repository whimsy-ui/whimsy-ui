import { ref, Ref, unref } from 'vue';
const isWindow = (val: unknown): val is Window => val === window;

let width: Ref<number>;
let height: Ref<number>;

export function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);

    if (typeof window !== 'undefined') {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };

      update();
      window.addEventListener('resize', update, { passive: true });
      window.addEventListener('orientationchange', update, { passive: true });
    }
  }

  return { width, height };
}

const makeDOMRect = (width: number, height: number) =>
  ({
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  } as DOMRect);

export const useRect = (elementOrRef: Element | Window | Ref<Element | Window | undefined>) => {
  const element = unref(elementOrRef);

  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return makeDOMRect(width, height);
  }

  if (element?.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }

  return makeDOMRect(0, 0);
};
