import { useNamespace } from '../utils';
const ns = useNamespace('input');
export const inputShortcuts: Record<string, string> = {
  [ns.b()]: `flex-wrap`,
  [ns.e('label')]: `!flex-none border-box w-6.2em mr-12px`,
  [ns.m('required')]: `before:mr-2px before:content-['*'] before:color-context before:ws-danger`,
  [ns.em('label', 'center')]: 'justify-center text-center',
  [ns.em('label', 'right')]: 'justify-end text-right'
};
