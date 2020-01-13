const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require('glob')
const PurifyCssPlugin = require('purifycss-webpack')
const HTMLPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    progress: true, // 显示详细打包过程
    contentBase: path.resolve(__dirname, './dist'), // 打包目录
    compress: true,
    port: 8081,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
              // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
              publicPath: './',
              // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
              hmr: devMode // 仅dev环境启用HMR功能
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSAssetsPlugin({
      // 默认是全部的CSS都压缩，该字段可以指定某些要处理的文件
      assetNameRegExp: /\.(sa|sc|c)ss$/g,
      // 指定一个优化css的处理器，默认cssnano
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true }, //对注释的处理
            normalizeUnicode: false // 建议false,否则在使用unicode-range的时候会产生乱码
          }
        ]
      },
      canPrint: true // 是否打印编译过程中的日志
    }),
    new PurifyCssPlugin({
      paths: glob.sync(path.join(__dirname, '/*.html'))
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: devMode ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin({
      template: './index.html', //指定模板页面,将来会根据此页面生成内存中的页面
      filename: 'index.html', //指定生成页面的名称，index.html浏览器才会默认直接打开
      showErrors: true
    })
  ],
  optimization: {
    minimize: true
  }
}
