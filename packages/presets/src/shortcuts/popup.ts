import { useNamespace } from '../utils';
const ns = useNamespace('popup');
export const popupShortcuts: Record<string, string> = {
  [ns.b()]: `fixed box-border max-h-full overflow-y-auto bg-white`,
  [ns.m('top')]: 'w-full top-0 left-0',
  [ns.m('bottom')]: 'w-full bottom-0 left-0',
  [ns.m('left')]: 'h-full top-0 left-0',
  [ns.m('right')]: 'h-full top-0 right-0'
};
