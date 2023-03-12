import type { TaskFunction } from 'undertaker';
import { run } from './process';
import { buildRoot } from '@whimsy-ui/build-utils';

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name });
// 运行gulp指定任务
export const runTask = (name: string) => withTaskName(`shellTask:${name}`, () => run(`pnpm run start ${name}`, buildRoot));
