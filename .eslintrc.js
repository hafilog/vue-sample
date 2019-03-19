module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'import/no-named-as-default-member': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
