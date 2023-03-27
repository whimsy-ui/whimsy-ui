import type { Rule, RuleContext } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { parseColor } from '@unocss/preset-mini';
export default [
  // 定义css变量
  [
    /^ws-(.*)$/,
    ([, body]: string[], { theme }: RuleContext<Theme>) => {
      const color = parseColor(body, theme);
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
        return {
          '--ws-c-context': `${color.cssColor.components.join(',')}`
        };
      }
    }
  ],
  /**
   *  安全区域指的是一个可视窗口范围，处于安全区域的内容不受圆角（corners）、齐刘海（sensor housing）、小黑条（Home Indicator）影响。
      env函数说明: iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量：
      safe-area-inset-left：安全区域距离左边边界距离
      safe-area-inset-right：安全区域距离右边边界距离
      safe-area-inset-top：安全区域距离顶部边界距离
      safe-area-inset-bottom：安全区域距离底部边界距离
   */
  ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
  ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ['pl-safe', { 'padding-left': 'env(safe-area-inset-left)' }],
  ['pr-safe', { 'padding-right': 'env(safe-area-inset-right)' }],
  ['m-safe', { margin: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ['mt-safe', { 'margin-top': 'env(safe-area-inset-top)' }],
  ['mb-safe', { 'margin-bottom': 'env(safe-area-inset-bottom)' }],
  ['ml-safe', { 'margin-left': 'env(safe-area-inset-left)' }],
  ['mr-safe', { 'margin-right': 'env(safe-area-inset-right)' }]
] as Rule<Theme>[];
