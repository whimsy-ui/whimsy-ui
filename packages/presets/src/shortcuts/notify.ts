import { useNamespace } from '../utils';
const ns = useNamespace('notify');
export const notifyShortcuts: Record<string, string> = {
  [ns.b()]: `flex items-center lh-20px box-border justify-center p-x-16px p-y-8px flex-wrap`,
  [ns.m('primary')]: `ws-primary bg-context color-white`,
  [ns.m('success')]: `ws-success bg-context color-white`,
  [ns.m('info')]: `ws-info bg-context color-white`,
  [ns.m('warning')]: `ws-warning bg-context color-white`,
  [ns.m('danger')]: `ws-danger bg-context color-white`
};
