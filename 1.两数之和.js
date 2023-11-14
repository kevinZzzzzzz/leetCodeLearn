/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let idx1 = 0
    let idx2 = 0
    nums.forEach((e, idx) => {
        for (let i = idx + 1; i < nums.length; i++) {
            if (e + nums[i] === target) {
                idx1 = idx
                idx2 = i
            }
        }
    })
    return [idx1, idx2]
};
// @lc code=end

