import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import vue from '@vitejs/plugin-vue';
import VueMacros from 'unplugin-vue-macros/rollup';
import vueJsx from '@vitejs/plugin-vue-jsx';
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild';
import { parallel } from 'gulp';
import { wsOutput, wsRoot } from '@whimsy-ui/build-utils';
import { formatBundleFilename, withTaskName, writeBundles, generateExternal } from '../utils';
import { target } from '../build-config';
import type { Plugin } from 'rollup';

async function buildFullEntry(minify: boolean) {
  const plugins: Plugin[] = [
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
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target,
      loaders: {
        '.vue': 'ts'
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      treeShaking: true,
      legalComments: 'eof'
    }),
    json()
  ];
  if (minify) {
    plugins.push(
      minifyPlugin({
        target,
        sourceMap: true
      })
    );
  }

  const bundle = await rollup({
    input: path.resolve(wsRoot, 'index.ts'),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true
  });
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(wsOutput, 'dist', formatBundleFilename('index.full', minify, 'js')),
      exports: 'named',
      name: 'WhimsyUI',
      globals: {
        vue: 'Vue'
      },
      sourcemap: minify
    },
    {
      format: 'esm',
      file: path.resolve(wsOutput, 'dist', formatBundleFilename('index.full', minify, 'mjs')),
      sourcemap: minify
    }
  ]);
}

export const buildFull = (minify: boolean) => async () => Promise.all([buildFullEntry(minify)]);

export const buildFullBundle = parallel(withTaskName('buildFullMinified', buildFull(true)), withTaskName('buildFull', buildFull(false)));
