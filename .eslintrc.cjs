module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prefer-stateless-function": "error",
"react/button-has-type": "error",
"react/no-unused-prop-types": "error",
"react/jsx-pascal-case": "error",
"react/jsx-no-script-url": "error",
"react/no-children-prop": "error",
"react/no-danger": "error",
"react/no-danger-with-children": "error",
"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
"react/jsx-fragments": "error",
"react/destructuring-assignment": [
  "error",
  "always",
  { destructureInSignature: "always" },
],
"react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
"react/jsx-max-depth": ["error", { max: 5 }],
"react/function-component-definition": [
  "warn",
  { namedComponents: "arrow-function" },
],
"react/jsx-key": [
  "error",
  {
    checkFragmentShorthand: true,
    checkKeyMustBeforeSpread: true,
    warnOnDuplicates: true,
  },
],
"react/jsx-no-useless-fragment": "warn",
"react/jsx-curly-brace-presence": "warn",
"react/no-typos": "warn",
"react/display-name": "warn",
"react/self-closing-comp": "warn",
"react/jsx-sort-props": "warn",
"react/react-in-jsx-scope": "off",
"react/jsx-one-expression-per-line": "off",
"react/prop-types": "off",
  },
}