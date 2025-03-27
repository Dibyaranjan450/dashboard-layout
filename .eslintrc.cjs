module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    /**
     * React rules
     */
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/prop-types": "off",
    "react/jsx-key": "error",

    "prettier/prettier": ["error", { endOfLine: "auto" }],

    /**
     * Js rules
     */
    curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    quotes: ["error", "double", { avoidEscape: true }], // Require single quotes
    semi: ["error", "always"], // Require semicolons
    "prefer-const": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "no-var": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-extra-boolean-cast": "error",

    /**
     * General rules
     */
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // Limit consecutive empty lines
    "no-extra-semi": "error",
    "no-duplicate-imports": "error",
    "no-trailing-spaces": "error", // Disallow trailing whitespace at the end of lines
    "no-empty": "error", // Disallow empty block statements
    "no-irregular-whitespace": "error", // Disallow irregular whitespace

    // "arrow-body-style": ["error", "as-needed"], // Require braces in arrow function bodies only when necessary
    // "arrow-parens": ["error", "always"], // Require parens in arrow function arguments
  },
};
