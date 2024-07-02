import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getHashDigest } from 'loader-utils';

export default defineConfig({
  plugins: [
    react(),
    svgr({ include: ['**/*.svg', '@**/*.svg'] }),
    tsconfigPaths(),
  ],
  base: "/",
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename) => {
        let componentName = filename
            .replace(/(\.module)?\.[\w?]+$/, '')
            .split('/')
            .pop();

        // Generate hash
        const hash = getHashDigest(Buffer.from(filename), 'md5', 'base62', 5);

        return `${componentName}_${name}__${hash}`;
      },
    },
  },
})
