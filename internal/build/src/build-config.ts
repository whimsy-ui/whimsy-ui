import path from 'path';
import { wsOutput } from '@whimsy-ui/build-utils';

import type { ModuleFormat } from 'rollup';

export const modules = ['esm', 'cjs'] as const;
export type Module = (typeof modules)[number];
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS';
  format: ModuleFormat;
  ext: 'mjs' | 'cjs' | 'js';
  output: {
    /** e.g: `es` */
    name: string;
    /** e.g: `dist/element-plus/es` */
    path: string;
  };

  bundle: {
    /** e.g: `element-plus/es` */
    path: string;
  };
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(wsOutput, 'es')
    },
    bundle: {
      path: `whimsy-ui/es`
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(wsOutput, 'lib')
    },
    bundle: {
      path: `whimsy-ui/lib`
    }
  }
};
export const buildConfigEntries = Object.entries(buildConfig) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];

export const target = 'es2018';
