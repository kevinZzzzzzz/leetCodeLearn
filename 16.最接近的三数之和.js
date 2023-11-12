/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let res = 0
  let dec = 0
  let len = nums.length
  if (nums == null || len < 3) return res

  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      if ( Math.abs((nums[i] + nums[L] + nums[R]) - target) < dec ) {
        res = (nums[i] + nums[L] + nums[R])
        dec = Math.abs((nums[i] + nums[L] + nums[R]) - target)
      }
    }

  }
  return res
};
// @lc code=end

