// @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import react from 'eslint-plugin-react'
import tsEslint from '@typescript-eslint/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importX from 'eslint-plugin-import-x'

export default [
  ...tanstackConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': tsEslint,
      'jsx-a11y': jsxA11y,
      'import-x': importX,
    },
    rules: {
      // Ваши отключения
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',

      // Правила форматирования
      'key-spacing': ['error', { align: 'colon' }],
      'jsx-quotes': ['error', 'prefer-single'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'react/jsx-indent': ['error', 2, { checkAttributes: true }],
      'react/jsx-indent-props': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'always', { omitLastInOneLineBlock: true }],

      'react/destructuring-assignment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

      'linebreak-style': 'off',
      'prefer-arrow-callback': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-return-assign': 'off',
      'max-depth': ['error', { max: 6 }],
      'max-params': 'off',

      'react/jsx-curly-spacing': ['error', 'always'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],

      indent: ['error', 2, {
        ignoredNodes: [
          'JSXAttribute',
          'JSXElement',
          'JSXFragment',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXExpressionContainer',
          'JSXSpreadAttribute',
          'JSXText',
        ],
      }],

      'max-len': 'off',
      'no-multi-spaces': 'off',
      'no-unused-expressions': 'off',
      'react/jsx-equals-spacing': 'off',

      'no-bitwise': 'off',
      'no-underscore-dangle': 'off',
      'react/require-default-props': 0,

      'jsx-a11y/anchor-is-valid': 1,
      'jsx-a11y/label-has-associated-control': 1,
      'jsx-a11y/no-static-element-interactions': 1,

      'react/jsx-one-expression-per-line': 'off',
      'prefer-destructuring': 'off',
      'array-bracket-newline': ['error', 'consistent'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'only-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': [
        'error',
        'never',
        { enforceForClassMembers: true },
      ],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'consistent'],
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'multiline-ternary': ['error', 'always-multiline'],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'new-parens': 'error',
      'no-lonely-if': 'error',
      'no-new-object': 'error',
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': ['error', 'beside'],
      'object-curly-newline': ['error', { consistent: true }],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } },
      ],
      'prefer-exponentiation-operator': 'error',
      'quotes': ['error', 'single'],
      'semi-spacing': ['error', { before: false, after: true }],
      'semi-style': ['error', 'last'],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'switch-colon-spacing': 'error',
      'template-tag-spacing': 'error',
      'wrap-regex': 'error',
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]