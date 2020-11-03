const path = require('path')
module.exports = {
  // entry: './main',
  entry: {
    main: './src/main'
  },

  mode: 'none',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
