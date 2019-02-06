module.exports = {
  extends: ['airbnb', '@wkovacs64/eslint-config', 'prettier/react'],
  env: {
    browser: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
};
