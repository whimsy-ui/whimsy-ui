import { rollup } from 'rollup';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueMacros from 'unplugin-vue-macros/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import glob from 'fast-glob';
import { pkgRoot, excludeFiles, wsRoot } from '@whimsy-ui/build-utils';
import { writeBundles, generateExternal } from '../utils';
import { buildConfig, buildConfigEntries, target } from '../build-config';
import { WhimsyAlias } from '../plugins/whimsy-alias';

import type { OutputOptions } from 'rollup';

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  );
  const bundle = await rollup({
    input,
    plugins: [
      WhimsyAlias(),
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false
          }),
          vueJsx: vueJsx()
        }
      }),
      nodeResolve({
        preferBuiltins: true,
        mainFields: ['browser'],
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2020',
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    treeshake: false,
    external: await generateExternal({ full: false })
  });
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: wsRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`
      };
    })
  );
};
