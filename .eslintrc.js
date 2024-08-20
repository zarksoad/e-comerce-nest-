module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sonarjs',
    'import',
    'unused-imports',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Reglas generales
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Single Responsibility Principle (SRP)
    'max-lines-per-function': ['warn', { max: 50, skipComments: true }],
    'complexity': ['warn', { max: 10 }],
    'sonarjs/cognitive-complexity': ['warn', 15],

    // Open/Closed Principle (OCP)
    'no-prototype-builtins': 'off', // Avoid extending built-in prototypes

    // Liskov Substitution Principle (LSP)
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',

    // Interface Segregation Principle (ISP)
    'max-params': ['warn', { max: 3 }],

    // Dependency Inversion Principle (DIP)
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    'import/order': ['warn', {
      'groups': [['builtin', 'external'], 'internal'],
      'newlines-between': 'always'
    }],

    // Otras Reglas Útiles
    'unused-imports/no-unused-imports-ts': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
