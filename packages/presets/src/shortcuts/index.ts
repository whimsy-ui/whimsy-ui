import { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { buttonShortcuts } from './button';
import { baseShortcuts } from './base';
import { cellShortcuts } from './cell';
import { cellGroupShortcuts } from './cell-group';
import { checkboxShortcuts } from './checkbox';
export default [baseShortcuts, buttonShortcuts, cellShortcuts, cellGroupShortcuts, checkboxShortcuts] as UserShortcuts<Theme>;
