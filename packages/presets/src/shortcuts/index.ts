import { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { buttonShortcuts } from './button';
import { baseShortcuts } from './base';
export default [baseShortcuts, buttonShortcuts] as UserShortcuts<Theme>;
