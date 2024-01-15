/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length
  let n = board[0].length
  const used = new Array(m) // 存放已经访问过的点
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n)
  }
  /**
    canFind 判断当前点是否是目标路径上的点
    @params row col当前点的坐标
    @params i 当前考察word字符的索引
  */
  const canFind = (row, col, i) => {
    if (i === word.length) { // 递归的出口
      return true
    }
    if (row < 0 || row >= m || col < 0 || col >= n) { // 越界点
      return false
    }
    if (used[row][col] || board[row][col] != word[i]) { // 访问过的点 或者 非目标点
      return false
    }
    used[row][col] = true // 记录点
    const canFindNext = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) || canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1)

    if (canFindNext) { // 基于当前点[row,col]，可以为剩下的字符找到路径
      return true
    }

    used[row][col] = false // 回溯
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

