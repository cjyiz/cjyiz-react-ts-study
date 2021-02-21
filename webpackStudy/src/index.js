console.log('webpack学习')
// document.getElementById('app').innerHTML = '我是中国人'

// npx可以直接运行node_modules/.bin目录下面的命令
// 通过配置package.json中的script 'build':'webpack'运行webpack
// webpack没办法直接识别css文件，所以需要css Loader
require('./index.css')

import { print } from './print'
import { clone } from 'ramda'
const component = () => {
    const a = {
        name: 'cjyiz',
        age: "18"
    }
    const b = clone(a)
    console.log('这是最后的输出', b)
    const element = document.createElement('div')
    const btn = document.createElement('button')
    element.innerHTML = '你好webpack'
    btn.innerHTML = '点击我'
    btn.onclick = print
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())