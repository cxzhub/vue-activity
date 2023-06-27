const { defineConfig } = require('@vue/cli-service')
const ImportPlugin = require('unplugin-auto-import/webpack')
const path = require('path')
const fs = require('fs')

const { PAGE_NAME } = process.env
const isProd = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/',
  outputDir: `dist/${PAGE_NAME}`,
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      ImportPlugin({
        imports: ['vue', '@vueuse/core']
      })
    ],
    entry: {
      app: path.resolve(__dirname, `src/pages/${PAGE_NAME}/main.js`)
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          assets: {
            name: 'chunk-assets',
            test: /[\\/]assets/,
            priority: 20,
            chunks: 'all'
          }
        }
      }
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].template = fs.existsSync(`src/pages/${PAGE_NAME}/index.html`)
        ? `src/pages/${PAGE_NAME}/index.html`
        : 'public/index.html'
      return args
    })
  },
  devServer: {
    // proxy: 'http://localhost' // 本地
  }
})
