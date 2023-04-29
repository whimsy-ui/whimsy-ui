import { useNamespace } from '../utils';
const ns = useNamespace('overlay');
export const overlayShortcuts: Record<string, string> = {
  [ns.b()]: `fixed top-0 left-0 w-full h-full bg-grayBg bg-opacity-70`,
  [ns.is('blur')]: `backdrop-blur-2`
};
