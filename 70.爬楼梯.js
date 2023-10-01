/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 斐波那契数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) return 1
  let a = 1
  let b = 1
  let c = 0
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
};
// @lc code=end

