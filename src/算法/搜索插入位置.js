/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力穷举   时间复杂度2n
var searchInsert = function (nums, target) {
    let i = 0
    if (nums[0] === target) return 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === target) {
            i = j
        }
    }
    console.log('数组中有目标值', i)
    if (!i) {
        // 如果比数组中所有元素都大，直接返回最后一位索引
        if (nums[nums.length - 1] < target) return nums.length
        if (nums[0] > target) return 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > target) {
                i = j
                return i
            }
        }
    }
    return i
};

const nums = [1, 3, 5, 6]
const target = 2
const a = searchInsert(nums, target)
console.log('打印的参数', a)