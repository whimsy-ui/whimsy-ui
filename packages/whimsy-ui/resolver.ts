import { ComponentResolver, ComponentInfo } from 'unplugin-vue-components';

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
        return resolveComponent(name, { ...option, importStyle: false });
      }
    }
  ];
}
function resolveComponent(name: string, options: WhimsyResolverOptionsResolved): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return;

  if (!name.match(/^Ws[A-Z]/)) return;

  return {
    name,
    from: 'whimsy-ui/es'
  };
}
