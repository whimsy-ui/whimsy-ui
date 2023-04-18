import { useNamespace } from '../utils';
const ns = useNamespace('notice-bar');
export const noticeBarShortcuts: Record<string, string> = {
  [ns.b()]: `relative flex items-center h-40px px-16px text-14px lh-24px ws-solid`,
  [ns.e('right-icon')]: `text-right cursor-pointer text-20px`,
  [ns.e('wrap')]: `flex-1 relative flex items-center h-full overflow-hidden`,
  [ns.e('content')]: `absolute whitespace-nowrap ease-linear`
};
