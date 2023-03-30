import { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { buttonShortcuts } from './button';
import { baseShortcuts } from './base';
import { cellShortcuts } from './cell';
import { cellGroupShortcuts } from './cell-group';
export default [baseShortcuts, buttonShortcuts, cellShortcuts, cellGroupShortcuts] as UserShortcuts<Theme>;
