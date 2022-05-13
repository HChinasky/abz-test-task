const {defineConfig} = require('@vue/cli-service')
const ImageminPlugin = require('imagemin-webpack-plugin').default
var imageminMozjpeg = require('imagemin-mozjpeg')

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
    devtool: 'source-map',
    plugins: [
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
