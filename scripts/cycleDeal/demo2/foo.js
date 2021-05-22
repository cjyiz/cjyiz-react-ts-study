console.log('foo开始执行')
import { bar } from './bar'
console.log('bar=%j', bar)
setTimeout(() => console.log('bar=%j after 500ms', bar), 500)
console.log('foo 完成')