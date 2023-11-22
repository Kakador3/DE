module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    // override "simple-import-sort" config
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-shadow': [1, { hoist: 'functions' }],
    'react/prop-types': [0],
    'no-param-reassign': [0],
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-expressions': 1,
    'react/no-array-index-key': 1,
    'jsx-a11y/label-has-associated-control': 1,
    camelcase: 0,
    'no-unused-vars': 1,
    'import/order': 0,
    'no-prototype-builtins': 1,
    'no-plusplus': 1,
    'no-unsafe-optional-chaining': 1,
    'no-nested-ternary': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/button-has-type': 1,
    'import/no-extraneous-dependencies': 1,
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unneeded-ternary': 0,
    'jsx-a11y/anchor-has-content': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w', 'index(/.*|$)'],
          // Internal packages.
          ['^(@|API)(/.*|$)', 'API(/.*|$)'],
          ['^(@|components)(/.*|$)'],
          ['^(@|UI)(/.*|$)', 'UI(/.*|$)'],
          ['^(@|hooks)(/.*|$)', 'hooks(/.*|$)'],
          ['^(@|utils)(/.*|$)', 'utils(/.*|$)'],
          ['^.+\\.?(consts)$', '^.+\\.?(Helpers)$', '^.+\\.?(helpers)$'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$', '^.+\\.?(scss)$'],
        ],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unescaped-entities': 'off',
    'max-len': ['off', { code: 120 }],
  },
};
