import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  "stories": [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  docs: {
    autodocs: true,
    defaultName: 'Specs',
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite')
    if (configType === 'PRODUCTION') {
      config.base = '/design-system'
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  }
};
export default config;
