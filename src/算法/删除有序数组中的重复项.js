/**
 * @param {number[]} nums
 * @return {number}
 */
// 考察了双指针的使用，不用数组的去重方法
var removeDuplicates = function (nums) {
    if (!nums.length) return 0
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    console.log('最后的长度', i, nums)
    return i + 1
};
const arr = [1, 1, 2]
const a = removeDuplicates(arr)
console.log('a12323', a)