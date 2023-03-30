import { useNamespace } from '../utils';
const ns = useNamespace('cell-group');
export const cellGroupShortcuts: Record<string, string> = {
  [ns.b()]: `ws-bg-2`,
  [ns.e('title')]: `pd-1 ws-text-color text-5 lh-8`,
  [ns.m('inset')]: `ma-4 rd-4 overflow-hidden`
};
