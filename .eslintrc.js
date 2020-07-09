const off = "off";
const warn = "warn";
const error = "error";

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": off,
    "@typescript-eslint/explicit-module-boundary-types": off,
    "react/react-in-jsx-scope": off,
    "@typescript-eslint/no-explicit-any": off,
    "react/display-name": off,
    "react/prop-types": off,
  },
  overrides: [
    {
      files: ".eslintrc.js",
      env: {
        node: true,
      },
    },
  ],
};
