import type { Preset } from 'unocss';
import rules from './src/rules';
import shortcuts from './src/shortcuts';
import theme from './src/theme';
export const colors = Object.keys(theme.colors!);
const shortcutsArray = shortcuts as [];
export function presetUno(): Preset {
  return {
    name: '@whimsy-ui/preset',
    theme,
    shortcuts,
    rules,
    safelist: [
      ...colors.map((c) => `ws-${c}`),
      // shortcuts
      ...shortcutsArray.map((s) => Object.keys(s)).flat()
    ]
  };
}
