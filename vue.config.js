const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  parallel: false,
  outputDir: path.join(__dirname, '/dist/'),
  assetsDir: 'static/plugins',
  lintOnSave: process.env.NODE_ENV !== 'production',
  // publicPath: './',
  publicPath: '/',
  configureWebpack: config => {
    return {
      resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.less'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          '@': path.join(__dirname, 'src/'),
          '@styles': path.join(__dirname, './src/styles'),
          '@components': path.join(__dirname, './src/components'),
          '@core': path.join(__dirname, './src/core'),
          '@services': path.join(__dirname, './src/services')
        },
        unsafeCache: true,
        symlinks: false
      },
      plugins: [
        new webpack.DefinePlugin({
          __ENV__: JSON.stringify(process.env.ENV || 'dev'),
          __DEV__: !process.env.ENV || process.env.ENV === 'dev',
          __TEST__: process.env.ENV === 'test',
          __PRE__: process.env.ENV === 'pre',
          __ONLINE__: process.env.ENV === 'online',
          __BUILD__: process.env.NODE_ENV === 'production'
        }),
        new webpack.ProvidePlugin({
          _: 'lodash',
          $: 'jquery'
        })
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'front-end-set',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer()]
      }
    }
  }
}
