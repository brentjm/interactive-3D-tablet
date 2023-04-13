import resolve from '@rollup/plugin-node-resolve'; // locate and bundle dependencies in node_modules (mandatory)
import { terser } from "rollup-plugin-terser"; // code minification (optional)

export default {
  input: 'synthetic-tablet/js/main.js',
  output: [
    {
      format: 'umd',
      name: 'MYAPP',
      file: 'synthetic-tablet/js/bundle.js'
    }
  ],
  plugins: [ resolve(), terser() ],
  plugins: [ resolve() ]
};
