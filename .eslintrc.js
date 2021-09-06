module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-uses-vars': 2,
    'react/jsx-first-prop-new-line': 1,
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/order': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
