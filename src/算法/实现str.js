/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const a = haystack.indexOf(needle, 0)
    console.log('搜索结果', a)
};
const haystack = 'hello'
const needle = 'ae'
const a = strStr(haystack, needle)
console.log('打印', a)