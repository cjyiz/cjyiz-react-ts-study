// const express = require('express')
// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')

// const app = express()
// const config = require('./webpack.config')
// const compiler = webpack(config)

// // 通知express 使用webpack-dev-middleware
// // jiang webpack.config.js文件配置传入，作为基础配置
// app.use(
//     webpackDevMiddleware(compiler, {
//         publicPath: config.output.publicPath
//     })
// )

// // 将文件serve 到port 3000
// app.listen(3000, () => {
//     console.log('项目运行在端口3000！\n')
// })

const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')
const WebpackDevServer = require('webpack-dev-server')


const options = {
    contentBase: './dist',
    hot: false,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
    console.log('这是服务器')
})