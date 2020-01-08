module.exports = {
  presets: [
    [
      '@vue/app'
      // '@babel/preset-env',
      // {
      //   useBuiltIns: 'usage'
      // }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    [
      'import',
      {
        libraryName: 'plugins',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
  ]
  // plugins: [
  //   ['@babel/plugin-transform-runtime', { corejs: 3 }],
  //   ['@babel/plugin-syntax-dynamic-import'],
  //   [require('./src/babel-test/babel-plugin/addition-plugin')],
  //   [require('./src/babel-test/babel-plugin/plugin-handbook')],
  //   [require('./src/babel-test/babel-plugin/congruent-symbol')],
  //   [require('./src/babel-test/babel-plugin/visitor')],
  //   [require('./src/babel-test/babel-plugin/replaceWith/replaceWith.js')],
  //   [require('./src/babel-test/babel-plugin/consoleLogAddFuncName')]
  // ]
}
