/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b) // 升序
  const res = []
  // start当前选择的起点索引，temp当前的集合，sum当前求和
  const dfs = function(start, temp, sum) {
    if (sum >= target) {
      if (sum === target)  {
        res.push(temp.slice())
      }
      return
    }
    for (let i = start; i < candidates.length; i++) {
      // 从起始项开始，后面一旦出现重复的项直接跳过
      if (i - 1 >= start && candidates[i - 1] === candidates[i]) continue
      temp.push(candidates[i])
      // 因为每个数字在每个组合中只能使用 一次 ，给子递归传i+1，避免与当前选的i重复
      dfs(i + 1, temp, sum + candidates[i])
      temp.pop()
    }
  }
  dfs(0, [], 0)
  return res
};
// @lc code=end

