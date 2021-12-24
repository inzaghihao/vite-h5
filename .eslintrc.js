module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    'plugin:vue/vue3-strongly-recommended',
    "standard"
  ],
  "parserOptions": {
    "ecmaVersion": 13,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    "no-unused-vars": 1,
    "no-console": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "vue/first-attribute-linebreak": 0,
    "vue/max-attributes-per-line": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/multi-word-component-names": 0
  }
};
