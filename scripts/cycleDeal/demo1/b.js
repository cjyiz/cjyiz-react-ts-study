console.log('b开始')
exports.done = false
/** 这时候加载a，因为a已经加载过一次，存在缓存中，所以没有再次加载 */
const a = require('./a.js')
/** 这种写法%j等于后面的变量 */
console.log('在b，a.done=%j', a.done)
exports.done = true
console.log('b结束')