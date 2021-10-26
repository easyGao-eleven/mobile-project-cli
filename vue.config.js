const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  outputDir: 'dist',
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75, // 设计稿为750*1334时设置为75，即设计稿宽度除以10
            propList: ['*'],
            exclude: /node_modules|largeScreen/i
          })
        ]
      }
    }
  },
  devServer: {
    https: false,
    // 自动启动浏览器
    open: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL, // 设置调用的接口域名和端口
        changeOrigin: true, // 是否跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
