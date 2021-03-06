module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
   },
}
