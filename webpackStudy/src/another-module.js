import { clone } from 'ramda'
export const mode1 = () => {
    const a = {
        name: '彤彤',
        age: '25'
    }
    const b = clone(a)
    console.log('我是新的模块啦', b)
}