import { type ComponentPublicInstance } from 'vue';
import Notify from './notify.vue';
import { mountComponent, Numeric, assign, isObject } from '@whimsy-ui/utils';
import { usePopupState } from './use-popup-state';

type NotifyOptions = {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  zIndex?: boolean;
  background?: string;
  color?: string;
  message?: string;
  position?: 'top' | 'bottom';
  duration: number | string;
  onClose?: () => void;
  onOpened?: () => void;
};

let instance: ComponentPublicInstance<{}, any>;
function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      return () => <Notify {...state} onUpdate:show={toggle}></Notify>;
    }
  }));
  return instance;
}
const getDefaultOptions = (): NotifyOptions => ({
  type: 'primary',
  message: '',
  duration: 3000
});

let currentOptions = getDefaultOptions();

let timer: ReturnType<typeof setTimeout>;
export function closeNotify() {
  if (instance) instance.close();
}
export function parseOptions(message: Numeric | NotifyOptions) {
  return isObject(message) ? message : { message };
}
export function showNotify(options: Numeric | NotifyOptions) {
  if (!instance) initInstance();

  options = assign({}, currentOptions, parseOptions(options));
  console.log(options);

  instance.open(options);
  clearTimeout(timer);
  if (options.duration! > 0) {
    timer = setTimeout(closeNotify, Number(options.duration));
  }
  return instance;
}

export function setNotifyDefaultOptions(options: NotifyOptions) {
  return assign(currentOptions, options);
}
export function resetNotifyDefaultOptions(options: NotifyOptions) {
  return (currentOptions = getDefaultOptions());
}
