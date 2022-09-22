module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
