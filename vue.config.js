const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const pxtoviewport = require('postcss-px-to-viewport');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 3619; // dev port

module.exports = {
  outputDir: 'dist',
  // assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-vant-h5demo/' : '/',
  filenameHashing: true,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    // output: {
    //   // 把子应用打包成 umd 库格式
    //   library: `${name}-[name]`,
    //   libraryTarget: 'umd',
    //   jsonpFunction: `webpackJsonp_${name}`,
    // },
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'tabbar-background-color': 'rgba(0,0,0,0.86)',
            // 'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "your-less-file-path.less";`,
          },
          postcss: {
            plugins: [
              autoprefixer(),
              // pxtorem({
              //   rootValue: 37.5,
              //   propList: ['*']
              // }),
              pxtoviewport({
                viewportWidth: 375
              })
            ]
          }
        },
      },
    },
  },
  // chainWebpack: config => {
  //   // file Loader
  //   config.module
  //     .rule()
  //       .test(/\.(png|jpe?g|gif)$/i)
  //       // .use('file-loader')
  //       .use('url-loader')
  //         .loader('url-loader')
  //         // .options({ 
  //         //   // limit: 10000,
  //         //   name: '[path][name].[ext]',
  //         //   // name: resolve('assets/images/[name].[hash:7].[ext]')
  //         // })
  //         .end()

  //       // .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
  //       // .use('url-loader')
  //       //   .loader('url-loader')
  //       //   options({
  //       //     limit: 10000,
  //       //     name: '[path][name].[hash:7].[ext]'
  //       //   })
  //       //   .end()
  //       // .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
  //       // .use('url-loader')
  //       //   .loader('url-loader')
  //       //   options({
  //       //     limit: 10000,
  //       //     name: '[path][name].[hash:7].[ext]'
  //       //   })
  //       //   .end()
  // }
}
