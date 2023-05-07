import { useNamespace } from '../utils';
const ns = useNamespace('image');
export const imageShortcuts: Record<string, string> = {
  [ns.b()]: `relative inline-block text-1 color-inherit`,
  [ns.e('img')]: `block w-full h-full`,
  [ns.e('loading')]: `block w-full h-full absolute top-0 left-0 flex justify-center items-center`,
  [ns.e('loading-icon')]: `w-50% h-50% i-tabler:loader animate-spin bg-gray`,
  [ns.e('error')]: `block w-full h-full absolute top-0 left-0 flex justify-center items-center`,
  [ns.e('error-icon')]: `w-50% h-50%  i-tabler:photo-off bg-gray`
};
