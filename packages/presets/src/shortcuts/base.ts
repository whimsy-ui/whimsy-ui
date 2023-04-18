export const baseShortcuts: Record<string, string> = {
  // 通用背景1
  'ws-bg': 'bg-gray-100 dark:bg-black',
  // 通用背景2
  'ws-bg-2': 'bg-white dark:bg-[#1c1c1e]',
  // 通用背景3
  'ws-bg-3': 'bg-white dark:bg-[#37363b]',

  'ws-bg-primary': 'bg-context ws-primary dark:bg-[#37363b]',
  // 通用文字颜色1
  'ws-text-color': 'text-[#323233] ws-gray-8 dark:text-[#f5f5f5]',
  // 通用文字颜色2
  'ws-text-color-2': 'text-[#969799] ws-gray-6 dark:text-[#707070]',
  // 通用文字颜色3
  'ws-text-color-3': 'text-[#c8c9cc] ws-gray-5 dark:text-[#4D4D4D]',

  // 通用过度
  'ws-transition': 'transition-all duration-200',
  // 通用线边框
  'ws-solid': 'bg-context border border-solid border-context text-white dark:bg-op80 dark:border-op80 dark:text-op80 ws-bg-primary',
  // 通用轮廓边框
  'ws-outline': 'bg-transparent border border-solid border-context text-context dark:border-op80 dark:text-op80',
  // 通用幽灵边框
  'ws-ghost': 'bg-transparent border border-dashed border-context text-context dark:border-op80 dark:text-op80',
  // 通用轻边框
  'ws-light': 'bg-context border border-solid border-context text-context bg-op20 border-op20 dark:text-op80',
  // 通用文本边框
  'ws-text': 'bg-transparent border-context !border-op0 text-context dark:text-op80',
  // 方块
  'is-square': 'rounded-none',
  // 圆形
  'is-round': 'rounded-full',

  // 1px 线条 适配retina屏幕
  'hairline-common': 'absolute box-border content-empty pointer-events-none',
  hairline: 'hairline-common left-[-50%] top-[-50%] right-[-50%] bottom-[-50%]',
  'hairline-top': 'hairline-common left-0 top-0 right-0  border-0 border-t b-solid border-context transform-scale-y-50',
  'hairline-bottom': 'hairline-common left-0 bottom-0 right-0 border-0 border-b b-solid border-context transform-scale-y-50',

  'ws-active-bg-color': 'bg-context ws-gray-2 dark:bg-[#3a3a3c]'
};
