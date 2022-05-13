const {defineConfig} = require('@vue/cli-service')
const ImageminPlugin = require('imagemin-webpack-plugin').default
var imageminMozjpeg = require('imagemin-mozjpeg')
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/base/_variables.scss";
          @import "@/scss/base/_utilities.scss";
        `
      }
    }
  },
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devtool: 'source-map',
    plugins: [
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new ImageminPlugin({
        pngquant: {
          quality: '55-60'
        },
        plugins: [
          imageminMozjpeg({
            quality: 50
          })
        ]
      })
    ]
  }
})
