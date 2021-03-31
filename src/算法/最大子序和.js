/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0
    let maxAns = nums[0]
    nums.map(item => {
        // 这里很关键，用累加值和最新的一个元素相比，如果不如最新的一个元素，那么就直接从最新的元素开始
        pre = Math.max(pre + item, item)
        maxAns = Math.max(maxAns, pre)
        console.log('这时候的最大数组', pre, maxAns)
    })
    return maxAns
};
const nums = [-2,1,-3,4,-1,2,1,-5,4]
const a = maxSubArray(nums)
console.log('最大子序列', a)