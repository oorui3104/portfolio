const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'docs',
  assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})
