module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: [
    "react"
  ],
  ignorePatterns: ["build/*"],
  rules: {
    "semi": 0,
    "space-before-function-paren": "off",
    "quotes": [2, "double"],
    "quote-props": [2, "consistent"],
    "multiline-ternary": "off",
    "comma-dangle": "off",
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: true },
      },
    ],
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 2],
    "react/prop-types": "off",
    "jsx-quotes": [2, "prefer-double"],
    "react/no-unescaped-entities": "off"
  },
}
