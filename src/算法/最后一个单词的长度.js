/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const a = s.split(' ')
    console.log('计算结果', a)
    let length = 0
    for (let i = a.length - 1; i >= 0; i--) {
        console.log('结束循环', a[i].length)
        if (a[i].length) {
            length = a[i].length
            console.log('没走在这里吗')
            return length
        }
    }
    return length
};
const params = 'a       '
const a = lengthOfLastWord(params)
console.log('计算的结果', a)