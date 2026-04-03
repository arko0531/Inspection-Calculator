// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    }
  },
  {
    ignores: ['dist/*']
  }
]);
