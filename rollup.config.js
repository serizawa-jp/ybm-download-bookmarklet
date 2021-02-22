import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/ybm-download-bookmarklet.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
};
