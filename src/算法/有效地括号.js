/**
 * @param {string} s
 * @return {boolean}
 */
// 字符串replace方案
var isValid = function (s) {
    // 找出最接近的()匹配出去
    const long = Math.floor(s.length / 2)
    let finalStr = s
    for (let i = 0; i < long; i++) {
        finalStr = finalStr.replace('()', '').replace('[]', '').replace('{}', '')
    }
    console.log('拆分的结果', finalStr, long)
    return finalStr.length === 0
};
const str = '[()]({})'
const a = isValid(str)
console.log('在最后结果', a)