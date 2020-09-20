module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'standard',
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['warn', 'never'],
  },
}
