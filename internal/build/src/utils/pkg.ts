import { buildConfig } from '../build-config';

import type { Module } from '../build-config';

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module];

  return (id: string) => {
    id = id.replaceAll(`@whimsy-ui/`, `${config.bundle.path}/`);
    return id;
  };
};
