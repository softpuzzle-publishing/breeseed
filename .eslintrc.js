module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  plugins: ["@html-eslint", "eslint-plugin-html"],
  overrides: [
    {
      files: ["src/**/*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/require-closing-tags": [
          "error",
          { selfClosing: "always" },
        ],
        "@html-eslint/no-extra-spacing-attrs": "off",
        "@html-eslint/indent": ["error", 2],

        // gulp-file-include
        "@html-eslint/require-title": "off",
        //"@html-eslint/require-doctype": "off",
      },
    },
  ],
};
