import { useNamespace } from '../utils';
const ns = useNamespace('switch');
export const switchShortcuts: Record<string, string> = {
  'switch-background': 'bg-[rgba(120,120,120,.16)] dark:bg-[rgba(120,120,120,.32)]',
  [ns.b()]: `relative inline-block box-content w-2em h-1.15em text-26px switch-background border-rd-1em cursor-pointer transition-background-color duration-200`,
  [ns.e('dot')]: `absolute top-2px left-2px w-1em h-1em text-size-inherit bg-white is-round shadow-cyan ws-transition`,
  [ns.is('checked', true)]: `ws-bg-primary transform-translate-x-.9em`
};
