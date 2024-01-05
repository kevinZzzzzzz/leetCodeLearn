/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return []
  const res = []
  // 各个边界取值
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
  // 边界 临界
  while(top < bottom && left < right) {
    for (let i = left; i < right; i++) { // 上层
      res.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) { // 右层
      res.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) { // 下层
      res.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) { // 左层
      res.push(matrix[i][left])
    }
    top++
    bottom--
    right--
    left++
  }
  if (top === bottom) { // 剩下最后一行 从左至右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (left === right) { // 剩下最后一列 从上至下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left])
    }
  }
  return res
};
// @lc code=end

