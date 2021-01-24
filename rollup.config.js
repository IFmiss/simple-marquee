// import path from 'path';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript2 from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const GLOBALS_MAP = {
  globals: {
    'react': 'React',
    'classnames': 'classnames',
    'prop-types': 'prop-types'
  }
};

export default {
  input: `src/Marquee/index.ts`,
  output: [{
    file: `lib/cjs/index.js`,
    format: 'cjs',
    exports: 'named',
    ...GLOBALS_MAP
  }, {
    file: `lib/esm/index.js`,
    format: 'esm',
    ...GLOBALS_MAP
  }, {
    file: `lib/umd/index.js`,
    format: 'umd',
    name: 'index.js',
    ...GLOBALS_MAP
  }],
  external: [
    'react',
    'classnames',
    'prop-types'
  ],
  plugins: [
    clear({
      targets: ['lib']
    }),
    json(),
    postcss({
      modules: true,
      extensions: [".less", ".css"],
      use: [
        ["less", {
          javascriptEnabled: true
        }]
      ],
      minimize: true
    }),
    typescript2({
      tsconfig: './tsconfig.rollup.json'
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: 'runtime'
    }),
    resolve({
      mainFields: 'main',
      modulesOnly: true
    }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: true,
    }),
    terser({
      output: {
        comments: false
      }
    })
  ]
};