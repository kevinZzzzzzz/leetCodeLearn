/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = new Array(n)
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0)
  }
  let value = 1
  let top = 0; bottom = n - 1; left = 0; right = n - 1
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++
    }
    top++
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++
    }
    right--
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value++
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value++
    }
    left++
  }
  return matrix
};
// @lc code=end

