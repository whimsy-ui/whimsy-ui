// 默认命名前缀

export const defaultNamespace = 'ws';

export const statePrefix = 'is';

const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
// 命名空间hook 规范命名 防止全局命名冲突
export const useNamespace = (block: string) => {
  const namespace = defaultNamespace;
  // 创建块 例如：ws-form
  const b = (blockSuffix: string = '') => _bem(namespace, block, blockSuffix, '', '');
  // 创建元素 例如：ws-form__inner
  const e = (element?: string) => (element ? _bem(namespace, block, '', element, '') : '');
  // 创建修改器 例如：ws-form--default
  const m = (modifier?: string) => (modifier ? _bem(namespace, block, '', '', modifier) : '');
  // 创建后缀块+元素 例如：ws-form-item__inner
  const be = (blockSuffix?: string, element?: string) => (blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : '');
  // 创建元素+修改器 例如：ws-scrollbar__wrap--hidden
  const em = (element?: string, modifier?: string) => (element && modifier ? _bem(namespace, block, '', element, modifier) : '');
  // 创建后缀块+修改器 例如：ws-form-item--default
  const bm = (blockSuffix?: string, modifier?: string) => (blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : '');
  // 创建后缀块+元素+修改器 例如：ws-form-item__content--default
  const bem = (blockSuffix?: string, element?: string, modifier?: string) => (blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : '');

  const is: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}-${name}` : '';
  };
  const theme: {
    (name: string, state: boolean | undefined): string;
    (name: string): string;
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${defaultNamespace}-${name}` : '';
  };
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    theme,
    namespace
  };
};
