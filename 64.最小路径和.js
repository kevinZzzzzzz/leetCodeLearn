/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length // 列数
  const n = grid[0].length // 行数
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  dp[0][0] = grid[0][0]
  // 设置第一个列的值
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }
  // 设置第一行的值
  for (let i = 1; i < n; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1]
  }
  // 设置其他值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
    }
  }
  return dp[m - 1][n - 1]
};;
// @lc code=end

