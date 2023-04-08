import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./cli.ts'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true
  }
});
