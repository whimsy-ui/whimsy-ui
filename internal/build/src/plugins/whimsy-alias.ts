import type { Plugin } from 'rollup';

export function WhimsyAlias(): Plugin {
  const source = `@whimsy-ui/themes/` as const;
  const bundleTheme = `whimsy-ui/themes/` as const;

  return {
    name: 'whimsy-plus-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(source)) return;
      return {
        id: id.replaceAll(source, bundleTheme),
        external: 'absolute'
      };
    }
  };
}
