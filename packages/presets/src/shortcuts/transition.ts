import { useNamespace } from '../utils';
const fade = useNamespace('fade');
const fadeShortcuts: Record<string, string> = {
  [fade.b('enter-active')]: `animate-fade-in animate-ease-linear animate-duration-200 animate-both`,
  [fade.b('leave-active')]: `animate-fade-out animate-ease-linear animate-duration-200 animate-both`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const slideTop = useNamespace('slide-top');
const slideUpShortcuts: Record<string, string> = {
  [slideTop.b('enter-active')]: `animate-slide-in-down animate-ease-linear animate-duration-200 animate-both`,
  [slideTop.b('leave-active')]: `animate-slide-in-down animate-ease-linear animate-duration-200 animate-both animate-reverse`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const slideBottom = useNamespace('slide-bottom');
const slideBottomShortcuts: Record<string, string> = {
  [slideBottom.b('enter-active')]: `animate-slide-in-up animate-ease-linear animate-duration-200 animate-both`,
  [slideBottom.b('leave-active')]: `animate-slide-in-up animate-ease-linear animate-duration-200 animate-both animate-reverse`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const slideLeft = useNamespace('slide-left');
const slideLeftShortcuts: Record<string, string> = {
  [slideLeft.b('enter-active')]: `animate-slide-in-left animate-ease-linear animate-duration-200 animate-both`,
  [slideLeft.b('leave-active')]: `animate-slide-in-left animate-ease-linear animate-duration-200 animate-both animate-reverse`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const slideRight = useNamespace('slide-right');
const slideRightShortcuts: Record<string, string> = {
  [slideRight.b('enter-active')]: `animate-slide-in-right animate-ease-linear animate-duration-200 animate-both`,
  [slideRight.b('leave-active')]: `animate-slide-in-right animate-ease-linear animate-duration-200 animate-both animate-reverse`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};
const rotate = useNamespace('rotate');
const rotateShortcuts: Record<string, string> = {
  [rotate.b('enter-active')]: `animate-rotate-in animate-ease-linear animate-duration-200`,
  [rotate.b('leave-active')]: `animate-rotate-out animate-ease-linear animate-duration-200`
  // [fade.b('enter-from')]: `opacity-0`,
  // [fade.b('leave-to')]: `opacity-0`
};

export const transitionShortcuts: Record<string, string> = {
  ...fadeShortcuts,
  ...rotateShortcuts,
  ...slideUpShortcuts,
  ...slideBottomShortcuts,
  ...slideLeftShortcuts,
  ...slideRightShortcuts
};
