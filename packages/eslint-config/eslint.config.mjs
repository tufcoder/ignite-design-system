import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js, prettier },
    extends: ['js/recommended', configPrettier],
    settings: { react: { version: 'detect' } },
    rules: { 'prettier/prettier': ['error'] },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
])
