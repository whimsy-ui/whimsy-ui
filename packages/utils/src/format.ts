import { CSSProperties } from 'vue';
import { Numeric } from './basic';
import { isDef, isNumeric } from './validate';
export function getZIndexStyle(zIndex?: Numeric) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}
export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return void 0;
}
