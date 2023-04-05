import { useNamespace } from '../utils';
const ns = useNamespace('checkbox');
export const checkboxShortcuts: Record<string, string> = {
  [ns.b()]: `flex items-center overflow-hidden cursor-pointer select-none`,
  [ns.m('disabled')]: `cursor-not-allowed`,
  [ns.m('label-disabled')]: `cursor-default`,
  [ns.e('label')]: `ml-1`,
  [ns.em('label', 'disabled')]: ``,
  [ns.e(
    'icon'
  )]: `h-1em lh-1em w-1em box-border border border-solid border-[#C8C9CC] color-white text-5 cursor-pointer flex justify-center items-center animate-zoom-in animate-duration-200`,
  [ns.em('icon', 'disabled')]: `bg-[#EBEDF0] border-[#C8C9CC] dark:bg-[#3A3A3C] text-[#C8C9CC] dark:text-[#4D4D4D]`,
  [ns.em('icon', 'square')]: `is-square`,
  [ns.em('icon', 'round')]: `is-round`,
  [ns.em('icon', 'checked')]: `bg-[#3ac569] `
};
