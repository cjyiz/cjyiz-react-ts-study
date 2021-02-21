console.log('webpack学习')
document.getElementById('app').innerHTML = '我是中国人'

// npx可以直接运行node_modules/.bin目录下面的命令
// 通过配置package.json中的script 'build':'webpack'运行webpack
// webpack没办法直接识别css文件，所以需要css Loader
require('./index.css')