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
const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) return val.length === 0;

  if (val instanceof Map || val instanceof Set) return val.size === 0;

  if (isObject(val)) return Object.keys(val).length === 0;

  return false;
}

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

export function isUrl(path: string): boolean {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  return reg.test(path);
}
