/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.length) return 1
  if (nums.length === 1 && nums[0] <= 0) return 1
  let arr = []
  nums.forEach(d => {
    if (d > 0) {
      arr[d] = 1
    }
  })
  if (!arr.length) return 1
  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return i
    }
  }
  return arr.length
};
// @lc code=end

