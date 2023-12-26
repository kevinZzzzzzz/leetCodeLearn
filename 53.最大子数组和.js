/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let big = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    big = i === 0 ? nums[i] : Math.max(big, sum)
  }
};
// @lc code=end

