// webpack内部有一个事件流，tapable??
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path");
module.exports = {
  // 设置开发环境
  mode: "development",
  entry: {
    index: './src/index.js',
  },
  // 开发的时候定位错误，其实就是平时的控制台显示的报错
  devtool: 'inline-source-map',
  output: {
    // filename: "bundle.js", //打包后的文件名
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"), //输出的文件夹，只能是绝对路径
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css?$/, //正则匹配css文件
        //css-loader用来解析处理css文件中的url路径
        //style-loader可以把css文件变成style标签插入head中
        //多个loader是有顺序要求。从右往左写，因为转换的时候是从右往左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: ['file-loader']
      },
      // 字体也是file-loader解析
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
      // 还有csv-loader,xml-loader等loader解析文件
    ]
  },
  plugins: [
    // 会在打包的时候输出index.html文件
    new HtmlWebpackPlugin({
      title: 'development'
    }),
    // 每次打包都会清空之前的打包文件夹
    new CleanWebpackPlugin(
      {
        // 这样不会每次文件变动都删除index.html
        cleanStaleWebpackAssets: false
      }
    ),
  ],
  // 修改文件位置,告知dev server，从什么位置找文件
  devServer: {
    inline: false,
    // 将dist文件夹映射到默认端口 不修改的话就是8080
    contentBase: "./dist",
  }
};
