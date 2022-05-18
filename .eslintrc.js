module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["some-other-config-you-use", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};
