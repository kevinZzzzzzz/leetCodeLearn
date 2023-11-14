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
  let res = Number.MAX_SAFE_INTEGER // 最大的有效数
  let len = nums.length
  if (nums == null || len < 3) return res

  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      // 跟目标值比较往中间走
      if (sum < target) {
        L++
      } else if (sum > target) {
        R--
      } else {
        return sum
      }
    }

  }
  return res
};
// @lc code=end

