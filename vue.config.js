const path = require('path');
const webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  configureWebpack: {
    // 增加一个plugins  
    plugins: [
      
    ]
  },
  baseUrl: '/', //根路径
  outputDir: 'dist1', //构建输出目录
  assetsDir: 'assets', //静态资源目录(js,css,img,fonts)
  lintOnSave: false, //是否开启eslint检测   有效值:true || false || 'error'
  devServer: {
    open: true, //项目启动是否自动开启页面
    host: 'localhost', //主机域名
    // port: 3000, //端口号
    https: false, //以哪种协议启动
    hotOnly: false, //热更新
    //设置跨域代理  
    //我们在使用vue-cli启动项目的时候npm run serve便可以启动我们的项目了，通常我们的请求地址是以localhost:8080来请求接口数据的，localhost是没有办法设置cookie的
    //我们可以在vue-cli配置文件里面设置一个代理，跨域的方法有很多，通常需要后台来进行配置。我们可以直接通过node.js代理服务器来实现跨域请求。
    //比如通过  fetch("http://www.xxx.com/getList"),设置代理,然后访问接口 fetch("/api/getList")
    proxy: {
      '/api': {
        target: "http://192.168.25.113:3000/",//要跨域的主机名
        ws: true, //是否启用websockets
        changeOrigin: false, //是否跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          '^/api': '/api' //替换后用/api代替跨域主机名
        }
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  }
}