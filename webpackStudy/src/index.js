import { cube } from './math'
import { printMe } from './print'
/** 这里没有引入另外一个函数，打包后的Bundle文件中依然有这个 */
/** 可以再package.json文件中标记side-effect-free无副作用，这样就可以安全删除未用到的export */

// document.getElementById('app').innerHTML = '我是中国人'

// npx可以直接运行node_modules/.bin目录下面的命令
// 通过配置package.json中的script 'build':'webpack'运行webpack
// webpack没办法直接识别css文件，所以需要css Loader
require('./index.css')
console.log('webpack的module是什么东西', module.hot)
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
        btn.onclick = printMe
        element.appendChild(btn)
        return element
    }).catch(err => console.log('如果错误，那就错了', err))
}
// let element = component()
// window.document.body.appendChild(element)
// if (module.hot) {
//     module.hot.accept('./print.js', () => {
//         console.log('接受模块会更新并移除旧的绑定')
//         window.document.body.removeChild(element)
//         console.log('绑定新的节点')
//         element = component()
//         document.body.appendChild(element)
//     })
// }
let element = component()

component().then((component) => {
    document.body.appendChild(component)
    if (module.hot) {
        module.hot.accept('./print.js', () => {
            console.log('接受模块会更新并移除旧的绑定')
            window.document.body.removeChild(element)
            console.log('绑定新的节点')
            element = component()
            document.body.appendChild(element)
        })
    }
})