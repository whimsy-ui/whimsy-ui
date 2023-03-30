import { inBrowser, type Numeric } from './basic';
// 是否定义
export const isDef = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null;
// 是否是函数
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
// 是否是对象
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';
// 是否是promise对象
export const isPromise = <T = any>(val: unknown): val is Promise<T> => isObject(val) && isFunction(val.then) && isFunction(val.catch);
// 是否是有效日期
export const isDate = (val: unknown): val is Date => Object.prototype.toString.call(val) === '[object Date]' && !Number.isNaN((val as Date).getTime());
// 是否是手机号码
export function isMobile(value: string): boolean {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
// 是否是数字或可被转换成数字类型
export const isNumeric = (val: Numeric): val is string => typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
// 是否是ios
export const isIOS = (): boolean => (inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false);
