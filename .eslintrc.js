module.exports = {
  root: true,
  extends: [
    './node.js',
    // add more generic rule sets here, such as:
    // 'eslint:recommended',
    'svelte/recommended',
    'svelte/prettier',
    "@unocss"

  ],

  plugins: [
    'prettier',
    'svelte/recommended',
    'svelte/prettier'
  ]

  rules: {
    // override/add rules settings here, such as:
    // 'svelte/rule-name': 'error'
  }

overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser'
        }
      }
    }  // ...
  ]

  settings: {
    svelte: {
      ignoreWarnings: [
        '@typescript-eslint/no-unsafe-assignment',
        '@typescript-eslint/no-unsafe-member-access'
      ],
      compileOptions: {

      },
      kit: {
        files: {
          routes: 'src/routes'
        }
      }
    }
  }

  rules: {
    'prettier/prettier': 'warn',
    "@unocss/<rule-name>": "warn", // or "error",
    "@unocss/<another-rule-name>": ["warn" /* or "error" */, { /* options */ }]
  }

};