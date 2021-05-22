/**
 * commonsJs模块两个特性：
 * 1.加载时执行
 * 2.已加载的模块会进行缓存，不会重复加载
 *
 * 在commonsJs中，遇到require（）语句时候，会执行require模块中的代码，并缓存执行结果。
 * 因此如果有循环引用，可能执行的代码并不是想要的结果。
 */
console.log('主程序开启')
const a = require('./a.js')
const b = require('./b.js')
console.log('在主程序中，a.done=%j,b.done=%j', a.done, b.done)