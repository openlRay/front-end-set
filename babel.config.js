module.exports = {
  presets: [
    [
      // '@vue/app',
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [['@babel/plugin-transform-runtime']]
}
