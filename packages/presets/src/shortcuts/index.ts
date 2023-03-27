import { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { buttonShortcuts } from './button';
import { baseShortcuts } from './base';
import { cellShortcuts } from './cell';
export default [baseShortcuts, buttonShortcuts, cellShortcuts] as UserShortcuts<Theme>;
