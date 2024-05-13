/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@simplethings/eslint-config/library.js", "plugin:@figma/figma-plugins/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};