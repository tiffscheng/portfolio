const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: {
      target: [`http://localhost:8080`]
    }
  }
})