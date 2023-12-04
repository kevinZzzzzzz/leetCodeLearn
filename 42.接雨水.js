/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) {
    return 0;
  }
  let n = height.length
  let res = 0
  let lMax = new Array(n).fill(0)
  let rMax = new Array(n).fill(0)
  lMax[0] = height[0]
  rMax[n - 1] = height[n - 1]
  // 从左向右开始计算
  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1])
  }
  // 从右向左开始计算
  for (let j = n - 2; j >= 0; j--) {
    rMax[j] = Math.max(height[j], rMax[j + 1])
  }
  // 开始计算
  for (let i = 1; i < n - 1; i++) {
    res += Math.min(lMax[i], rMax[i]) - height[i]
  }
  return res
}
// @lc code=end
