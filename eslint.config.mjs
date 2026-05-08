import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1) React / Next
            ['^react$', '^react-dom$', '^next(/.*)?$'],
            // 2) Сторонние библиотеки (npm)
            ['^@?\\w'],
            // 3) Импорты из проекта (алиасы + относительные), кроме стилей
            [
              '^@/(?!.*\\.(?:css|scss|sass|less|styl|pcss|postcss)$)',
              '^~/(?!.*\\.(?:css|scss|sass|less|styl|pcss|postcss)$)',
              '^(?!.*\\.(?:css|scss|sass|less|styl|pcss|postcss)$)\\./',
              '^(?!.*\\.(?:css|scss|sass|less|styl|pcss|postcss)$)\\.\\./',
            ],
            // 4) Стили в самом конце
            ['^.+\\.(?:css|scss|sass|less|styl|pcss|postcss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  eslintConfigPrettier,
]);

export default eslintConfig;
