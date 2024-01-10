/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length // 行
  let n = matrix[0].length // 列
  let row = new Array(m).fill(false)
  let col = new Array(n).fill(false)

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = col[j] = true
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};
// @lc code=end

