module.exports = {
  extends: [
    '@mate-academy/eslint-config-react',
    "plugin:react/recommended"
  ],
  rules: {
    strict: 'off',
    "no-console": "off",
  },
  parserOptions: {
    "sourceType": "module",
  }
};
