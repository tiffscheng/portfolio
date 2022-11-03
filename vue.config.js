const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  transpileDependencies: true,
  devServer: {
    open: {
      target: [`http://localhost:8080`]
    }
  },
})