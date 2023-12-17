module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', 'import'],
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'multiline-ternary': 0,
    'no-return-assign': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@uiKit',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@uiKit/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@*/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ]
  }
};
