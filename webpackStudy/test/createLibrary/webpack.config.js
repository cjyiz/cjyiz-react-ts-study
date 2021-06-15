const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// 要使用env变量，必须将module.exports转换成一个函数
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].bundle.js',
        // 通过这个暴露出去，如果需要设置类型，改为对象
        // library:'webpackNumbers'
        library: {
            name: 'webpackNumbers',
            // 这个字段可以使library兼容CommonJS，AMD及script标签
            type: 'umd'
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Hot Module Replacement'
            })
        ],
        // 使用externals配置将一个library放在外面
        externals: {
            loadash: {
                commons: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        }
    }
}