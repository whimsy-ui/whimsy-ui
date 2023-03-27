import type { Theme } from 'unocss/preset-mini';
// 使用时
export default {
  colors: {
    context: 'rgb(var(--ws-c-context))',
    primary: '#409eff',
    success: '#3AC569',
    info: '#0080FF',
    warning: '#F17F42',
    danger: '#F15C5C',
    'black-1': '#000',
    'white-1': ' #fff',
    'gray-1': '#f7f8fa',
    'gray-2': '#f2f3f5',
    'gray-3': '#ebedf0',
    'gray-4': '#dcdee0',
    'gray-5': '#c8c9cc',
    'gray-6': '#969799',
    'gray-7': '#646566',
    'gray-8': '#323233',

    lightBg: '#F3F4F6',
    darkBg: '#373739',
    placeholder: '#DCDCDC',
    grayBg: '#484849',
    darkBd: '#4C4D4F',
    softBg: '#E5E6EB',
    darkTitle: '#ECECEC',
    darkText: '#7C7C7D',
    darkSubText: 'rgba(255,255,255,.7)'
  }
} as Theme;
