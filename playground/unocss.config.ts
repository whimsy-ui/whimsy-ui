import { defineConfig, presetAttributify, transformerDirectives, transformerVariantGroup, type Preset } from 'unocss';
import { presetUno } from '../packages/presets';
import presets from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
export default defineConfig({
  presets: [
    presetIcons({
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetAttributify(),
    presets(),
    presetUno()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
