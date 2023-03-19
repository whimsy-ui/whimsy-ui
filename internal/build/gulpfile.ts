import path from 'path';

import { series, parallel } from 'gulp';
import { copyFile, mkdir } from 'fs/promises';
import { copy } from 'fs-extra';

import { withTaskName, run, runTask, buildConfig } from './src';

import { buildOutput, wsOutput, projRoot, wsPkg } from '@whimsy-ui/build-utils';
import type { TaskFunction } from 'gulp';
import type { Module } from './src';

export const copyFullStyle = async () => {
  await mkdir(path.resolve(wsOutput, 'dist'), { recursive: true });
  await copyFile(path.resolve(wsOutput, 'themes/index.css'), path.resolve(wsOutput, 'dist/index.css'));
};
// 拷贝packages/whimsy-ui中的package.json 以及
export const copyFiles = () =>
  Promise.all([
    copyFile(wsPkg, path.join(wsOutput, 'package.json')),
    copyFile(path.resolve(projRoot, 'README.md'), path.resolve(wsOutput, 'README.md')),
    copyFile(path.resolve(projRoot, 'global.d.ts'), path.resolve(wsOutput, 'global.d.ts'))
  ]);
// 拷贝类型定义文件
export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages');
  const copyTypes = (module: Module) => withTaskName(`copyTypes:${module}`, () => copy(src, buildConfig[module].output.path));

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done);
};
export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () =>
    mkdir(wsOutput, {
      // 递归构建
      recursive: true
    })
  ),
  parallel(runTask('buildModules'), runTask('buildFullBundle'), runTask('generateTypesDefinitions')),
  series(
    withTaskName('buildThemes', () => run('pnpm run -C packages/themes build')),
    copyFullStyle
  ),
  parallel(copyTypesDefinitions, copyFiles)
);

export * from './src';
