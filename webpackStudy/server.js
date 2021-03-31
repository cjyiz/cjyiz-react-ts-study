const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

// 通知express 使用webpack-dev-middleware
// jiang webpack.config.js文件配置传入，作为基础配置
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
)

// 将文件serve 到port 3000
app.listen(3000, () => {
    console.log('项目运行在端口3000！\n')
})