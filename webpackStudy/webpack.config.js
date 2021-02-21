// webpack内部有一个事件流，tapable??
const path = require("path");
module.exports = {
  entry: "./src/index.js", //入口,可以是相对路径
  output: {
    filename: "bundle.js", //打包后的文件名
    path: path.resolve(__dirname, "dist"), //输出的文件夹，只能是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css?$/, //正则匹配css文件
        //css-loader用来解析处理css文件中的url路径
        //style-loader可以把css文件变成style标签插入head中
        //多个loader是有顺序要求。从右往左写，因为转换的时候是从右往左
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [],
  devServer: {
    inline: false,
    contentBase: "./dist",
  }
};
