module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    experimental: {
      jsx: true,
    },
  },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react-refresh', 'jsx-a11y', 'import'],
  rules: {
    // React-specific rules (stricter)
    'react/prop-types': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-comp': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',

    // Import rules
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    // General JavaScript rules
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],

    // Existing rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
