import { print } from './print'
import { cube } from './math'
/** 这里没有引入另外一个函数，打包后的Bundle文件中依然有这个 */
console.log('webpack学习')
print()
/** 可以再package.json文件中标记side-effect-free无副作用，这样就可以安全删除未用到的export */

// document.getElementById('app').innerHTML = '我是中国人'

// npx可以直接运行node_modules/.bin目录下面的命令
// 通过配置package.json中的script 'build':'webpack'运行webpack
// webpack没办法直接识别css文件，所以需要css Loader
require('./index.css')

// import { clone } from 'ramda'
const component = () => {
    return import('ramda').then(({ clone }) => {
        const a = {
            name: 'cjyiz',
            age: "18"
        }
        const b = clone(a)
        console.log('这是最后的输出', b)
        const element = document.createElement('div')
        const btn = document.createElement('button')
        // element.innerHTML = '你好webpack'
        element.innerHTML = `hello cjyiz,5 cubed is equal to ${cube(5)}`
        btn.innerHTML = '点击我'
        btn.onclick = print
        element.appendChild(btn)
        return element
    }).catch(err => console.log('如果错误，那就错了', err))
}

// document.body.appendChild(component())
component().then((component) => {
    document.body.appendChild(component)
})