/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = -Infinity
  let cur = prices[0]
  for (let i = 1; i < prices.length; i++) {
    sum = Math.max(sum, prices[i] - cur)
    cur = Math.min(cur, prices[i])
  }
  return sum > 0 ? sum : 0
};
// @lc code=end

