module.exports = {
  extends: [
    '@mate-academy/eslint-config',
    "plugin:react/recommended"
  ],
  // extends: process.env.DISABLE_ESLINT
  //   ? ["plugin:react/recommended"]
  //   : ['@mate-academy/eslint-config-react', "plugin:react/recommended"],
  rules: {
    strict: 'off',
    "no-console": "off",
  },
  parserOptions: {
    "sourceType": "module",
  }
};
