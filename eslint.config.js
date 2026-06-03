import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'dist', 'coverage'],

    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      parser: tsParser,

      globals: globals.browser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      'prettier/prettier': 'error',

      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-unused-vars': 'warn'
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  prettierConfig
];
