// Map对象，new创建
let map = new Map()
// size方法返回所包含的键值对个数
console.log(map.size)
// 向Map中添加新元素
/** Map中的key不能重复，重复的值会被后者覆盖 */
map.set('age1', 18)
map.set('age2', 28)
map.set('age3', 13)

console.log('检查结果', map.size)
// 通过键值查找特定的树脂并返回
const a1 = map.get('age1')
console.log('获取的参数', a1)

/** 使用has判断是否有对应的值 */
const a2 = map.has('age4')
const a3 = map.has('age1')
console.log('has判断', a2, a3)
// console.log('当前的map值', map)
/** delete移除对应的数据 */
map.delete('age1')

/** 清空数据 */
map.clear()
console.log('清空数据结构', map)


/** 转数组 */
// [...map]