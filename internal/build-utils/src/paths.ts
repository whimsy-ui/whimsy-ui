/**
 *
 * 项目目录管理
 *
 */

import { resolve } from 'path';

// 项目根目录
export const projRoot = resolve(__dirname, '..', '..', '..');
// 构建目录
export const buildRoot = resolve(projRoot, 'internal', 'build');
// packages
export const pkgRoot = resolve(projRoot, 'packages');
// 组件
export const compRoot = resolve(pkgRoot, 'components');
// 样式主题
export const themeRoot = resolve(pkgRoot, 'themes');
// hooks
export const hookRoot = resolve(pkgRoot, 'hooks');
// whimsy-ui 主目录
export const wsRoot = resolve(pkgRoot, 'whimsy-ui');
// 工具包
export const utilRoot = resolve(pkgRoot, 'utils');
// 打包输出目录 dist
export const buildOutput = resolve(projRoot, 'dist');
// 组件源码目录 dist/whimsy-ui
export const wsOutput = resolve(buildOutput, 'whimsy-ui');
// wsPkg
export const wsPkg = resolve(wsRoot, 'package.json');
