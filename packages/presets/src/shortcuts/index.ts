import { UserShortcuts } from 'unocss';
import type { Theme } from '@unocss/preset-mini';
import { buttonShortcuts } from './button';
import { baseShortcuts } from './base';
import { cellShortcuts } from './cell';
import { cellGroupShortcuts } from './cell-group';
import { checkboxShortcuts } from './checkbox';
import { checkboxGroupShortcuts } from './checkbox-group';
import { radioShortcuts } from './radio';
import { radioGroupShortcuts } from './radio-group';
import { switchShortcuts } from './switch';
import { inputShortcuts } from './input';
export default [
  baseShortcuts,
  buttonShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
  checkboxShortcuts,
  checkboxGroupShortcuts,
  radioShortcuts,
  radioGroupShortcuts,
  switchShortcuts,
  inputShortcuts
] as UserShortcuts<Theme>;
