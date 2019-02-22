module.exports = {
  extends: ['airbnb', '@wkovacs64/eslint-config', 'prettier/react'],
  env: {
    browser: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
