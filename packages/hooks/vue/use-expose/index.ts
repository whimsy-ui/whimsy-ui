import { getCurrentInstance } from 'vue';
import { assign } from '@whimsy-ui/utils';
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance();
  if (instance) {
    assign(instance!.proxy as object, apis);
  }
}
