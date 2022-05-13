const { defineConfig } = require('@vue/cli-service')
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
  }
})
