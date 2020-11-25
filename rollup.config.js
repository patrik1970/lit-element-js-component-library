import multi from '@rollup/plugin-multi-entry';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: ['simple-button.js', 'my-element.js'],
  output: {
    file: 'dist/web-components.bundled.js',
  },
  plugins: [multi(),nodeResolve()],
};