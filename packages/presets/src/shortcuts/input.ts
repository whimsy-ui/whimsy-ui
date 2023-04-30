import { useNamespace } from '../utils';
const ns = useNamespace('input');
export const inputShortcuts: Record<string, string> = {
  [ns.b()]: `flex-wrap`,
  [ns.e('label')]: `!flex-none border-box w-6.2em mr-12px`,
  [ns.m('required')]: `before:mr-2px before:content-['*'] before:color-context before:ws-danger`,
  [ns.em('label', 'center')]: 'text-center',
  [ns.em('label', 'right')]: 'text-right',
  [ns.e('body')]: 'flex items-center',
  [ns.e('content')]:
    'block box-border w-full min-w-0 m-0 p-0 ws-text-color lh-inherit text-left bg-transparent !border-none !border-0 !border-transparent resize-none select-auto text-size-inherit outline-none',
  [ns.e('word-limit')]: ``
};
