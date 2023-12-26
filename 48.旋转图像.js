/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  const swap = (i, j) => {
    let temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp
  }
  // 沿对角线对换位置
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      swap(i, j)
    }
  }
  // 每行的数组反转
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
};
// @lc code=end

