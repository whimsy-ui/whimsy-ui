import { useNamespace } from '../utils';
const ns = useNamespace('image');
export const imageShortcuts: Record<string, string> = {
  [ns.b()]: `bg-gray relative inline-block`
};
