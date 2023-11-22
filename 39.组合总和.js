/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  // start当前选择的起点索引，temp当前的集合，sum当前求和
  const dfs = (start, temp, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice())
      }
      return 
    }
    // 1、用 for 循环去枚举出所有的选择
    for (let i = start; i < candidates.length; i++) {
    // 2、做出一个选择
      temp.push(candidates[i])
    // 3、基于这个选择，继续往下选择（递归）
      dfs(i, temp, sum + candidates[i])
    // 4、上面的递归结束了，撤销这个选择，进入 for 循环的下一次迭代
      temp.pop() // 回溯退回上一步
    }
  }
  dfs(0, [], 0)
  return res
};
// @lc code=end

