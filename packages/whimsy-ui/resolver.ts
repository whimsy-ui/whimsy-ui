import { ComponentResolver, ComponentInfo, SideEffectsInfo } from 'unplugin-vue-components';

export interface WhimsyResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass';

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean;

  /**
   * specify element-plus version to load style
   *
   * @default installed version
   */
  version?: string;

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean;

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp;

  /**
   * a list of component names that have no styles, so resolving their styles file should be prevented
   */
  noStylesComponents?: string[];
}
export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}
function getSideEffects(dirName: string, options: WhimsyResolverOptionsResolved): SideEffectsInfo | undefined {
  const { importStyle, ssr } = options;
  const themeFolder = 'whimsy-ui/themes';
  const esComponentsFolder = 'whimsy-ui/es/components';

  if (importStyle === 'sass') {
    return ssr
      ? [
          // `${themeFolder}/src/base.scss`,
          `${themeFolder}/src/${dirName}.scss`
        ]
      : [
          // `${esComponentsFolder}/base/style/index`,
          `${esComponentsFolder}/${dirName}/style/index`
        ];
  } else if (importStyle === true || importStyle === 'css') {
    return ssr ? [`${themeFolder}/base.css`, `${themeFolder}/el-${dirName}.css`] : [`${esComponentsFolder}/base/style/css`, `${esComponentsFolder}/${dirName}/style/css`];
  }
}
// Required 让所有属性变成必传的
type WhimsyResolverOptionsResolved = Required<Omit<WhimsyResolverOptions, 'exclude'>> & Pick<WhimsyResolverOptions, 'exclude'>;
// unplugin-vue-components resolver
export function WhimsyResolver(options: WhimsyResolverOptions): ComponentResolver[] {
  let optionsResolved: WhimsyResolverOptionsResolved;
  async function resolveOptions() {
    if (optionsResolved) return optionsResolved;
    optionsResolved = {
      ssr: false,
      version: '1.1.1',
      importStyle: 'css',
      directives: true,
      exclude: undefined,
      noStylesComponents: options.noStylesComponents || [],
      ...options
    };
    return optionsResolved;
  }
  return [
    {
      type: 'component',
      resolve: async (name: string) => {
        const option = await resolveOptions();

        if (option.noStylesComponents.includes(name)) {
          return resolveComponent(name, { ...option, importStyle: false });
        }
        return resolveComponent(name, { ...option });
      }
    }
  ];
}
function resolveComponent(name: string, options: WhimsyResolverOptionsResolved): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return;

  if (!name.match(/^Ws[A-Z]/)) return;
  const partialName = kebabCase(name.slice(2)); // ElTableColumn -> table-column

  return {
    name,
    from: 'whimsy-ui/es',
    sideEffects: getSideEffects(partialName, options)
  };
}
