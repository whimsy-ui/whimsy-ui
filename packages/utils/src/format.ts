import { CSSProperties } from 'vue';
import { Numeric } from './basic';
export function getZIndexStyle(zIndex?: Numeric) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}
