/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 * 每个数x的平方根都在[1, x/2 + 1]之间
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let L = 1 // 左边界
  let R = Math.floor(x / 2) + 1 // 右边界
  let M = null
  while (L <= R) {
    M = Math.floor((L + R) / 2)
    if (M * M > x) {
      R = M - 1
    } else if (M * M < x) {
      L = M + 1
    } else {
      return M
    }
  }
  return R
};
// @lc code=end

