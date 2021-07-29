/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  root: true,
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'prettier',
    'airbnb-base',
    // 'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'react-hooks',
    'flowtype',
    'jsx-a11y',
    'import',
    'react',
  ],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    // OFF
    'arrow-parens': [0],
    'linebreak-style': [0],
    'import/extensions': [0],
    'no-confusing-arrow': [0],
    'class-methods-use-this': [0],
    'import/no-absolute-path': [0],
    'implicit-arrow-linebreak': [0],
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': [0],
    'import/no-extraneous-dependencies': [0],
    // ERROR
    'simple-import-sort/imports': [2],
    'simple-import-sort/exports': [2],
    'import/first': [2],
    'import/newline-after-import': [2],
    'import/no-duplicates': [2],
    'react/prop-types': [2],
    'react/jsx-uses-vars': [2],
    'object-curly-newline': [2, {
      ImportDeclaration: 'never',
      ExportDeclaration: { multiline: true, minProperties: 3 },
    }],
  },
};
