import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tailwindcss from 'eslint-plugin-tailwindcss';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: [
      '.idea',
      '.config',
      'node_modules/*',
      'config/*',
      'public/*',
      'dist',
      'vite',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.app.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tsEslintPlugin,
      tailwindcss: tailwindcss,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...prettierConfig.rules,
      'prettier/prettier': 'error', // Avoid conflict rule between Prettier and Eslint
      'import/extensions': 'off', // Avoid missing file extension errors, TypeScript already provides a similar feature
      'react/require-default-props': 'off', // Allow non-defined react props as undefined
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
      '@typescript-eslint/consistent-type-imports': 'error', // Ensure import type is used when it's necessary
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
      'simple-import-sort/imports': 'error', // Import configuration for eslint-plugin-simple-import-sort
      'simple-import-sort/exports': 'error', // Export configuration for eslint-plugin-simple-import-sort
      'import/order': 'off', // Avoid conflict rule between eslint-plugin-import and eslint-plugin-simple-import-sort
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'tailwindcss/enforces-negative-arbitrary-values': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
);
