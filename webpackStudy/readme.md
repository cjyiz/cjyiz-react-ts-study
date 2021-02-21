# 初始化一个项目
创建一个文件夹，在该文件夹下执行命令行`npm init`

# 安装webpack
推荐本地安装,开发环境,同时还要安装一个webpack脚手架
```
npm install webpack webpack-cli -D
```

# 配置启动命令
--mode 指定模式，
## production  生产环境    混淆编译文件
## development 开发环境  更多的输出信息

# 核心概念
1.Entry :入口
2.Module:模块，一个模块对应一个文件，从entry开始递归寻找所有依赖
3.chunk:代码块，一个chunk有多个模块组合，用于代码分割和合并
4.Loader:模块砖块，把各种模块按照需求编译
5.Plugin:插件
6.Output:


#  执行原理
webpack执行 是在nomodules/bin目录下



# 使用HtmlWebpackPligun使得每次打包都会输出index.html文件

#  每次构建前清理打包输出目录文件夹
使用'clean-webpack-plugin'插件


# 使用source map 将编译后的代码映射回原始源代码，便于排错


# 如果要使用webpack自动检测文件变动，就编译的话，可以配置webpack watch
```
    "watch": "webpack --watch"

```
但是这样的方式每次需要刷新浏览器才会看到修改后的效果。
如果需要自动刷新浏览器，需要使用`webpack-dev-server`

然后在`package.json`中配置启动命令
```
    "start":"webpack serve --open"

```

# webpack-dev-middleware 是一个封装器，可以进行更多自定义设置


# 代码分离
1.入口七点：使用 entry配置手动分离代码
2.防止重复：使用Entry dependencies 或者 splitChunksPlugin去重和分离chunk
3.动态导入：通过模块内联函数调用来分离代码


