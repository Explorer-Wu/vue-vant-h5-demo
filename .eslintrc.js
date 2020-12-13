module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6,
  },
  rules: {
    'quotes': [0, 'single'],
    'semi': 0,
    'vue/html-self-closing': 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'indent': 'off',
    // 强制在块之前使用一致的空格
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 0,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    'no-trailing-spaces': 0, //  禁用行尾空格
    'no-multi-spaces': 0,
    'eol-last': 0,
    'comma-dangle': 0,
    'camelcase': 0,
    'prefer-const': 0,
    'no-unneeded-ternary': 0,
    'no-useless-return': 0,
    'no-useless-escape': 0,
    'lines-between-class-members': 0,
    'object-curly-spacing': 0,
    // 'no-console': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
