module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'google',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    env: {
        node: true,
        es6: true,
    },
    rules: {
        'require-jsdoc': 'off',
        'max-len': [2, 120, 4],
        'no-debugger': 'error',
        'no-alert': 'error',
        'indent': ['error', 2],
        'dot-location': ['error', 'property'],
        'no-extra-semi': 'error',
        'complexity': ['error', 10],
        'no-cond-assign': 'error',
        'curly': ['error', 'all'],
        'no-multi-spaces': 'error',
        'space-in-parens': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'new-cap': 'off',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/newline-after-import': ['error', { 'count': 1 }],
    },
}