console.log('bar开始执行')
export let bar = false
setTimeout(() => bar === true, 500)
console.log('bar执行结束')