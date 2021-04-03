/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 练习splice
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2)
    console.log('改变了', nums1)
    nums1.sort((a, b) => a - b)
};
merge([1, 2, 3, 4, 0, 0, 0], 4, [2, 1, 3], 3)