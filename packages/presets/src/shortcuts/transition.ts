import { useNamespace } from '../utils';
const fade = useNamespace('fade');
const fadeShortcuts: Record<string, string> = {
  [fade.b('enter-active')]: `animate-fade-in animate-ease-linear`,
  [fade.b('leave-active')]: `animate-fade-out animate-ease-linear`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const rotate = useNamespace('rotate');
const rotateShortcuts: Record<string, string> = {
  [rotate.b('enter-active')]: `animate-rotate-in animate-ease-linear`,
  [rotate.b('leave-active')]: `animate-rotate-out animate-ease-linear`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};

export const transitionShortcuts: Record<string, string> = {
  ...fadeShortcuts,
  ...rotateShortcuts
};
