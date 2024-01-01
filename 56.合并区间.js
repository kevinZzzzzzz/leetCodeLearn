/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const n = intervals.length - 1
  intervals.sort((a, b) => a[0] - b[0])
  let res = [[...intervals[0]]]
  let last = intervals[0][1]
  for (let i = 1; i <= n; i++) {
    if (intervals[i][0] <= last && intervals[i][1] >= last) {
      if (res[res.length - 1]?.length) {
        res[res.length - 1][1] = intervals[i][1]
        last = intervals[i][1]
      }
    } else if (intervals[i][1] <= last) {
      continue
    } else {
      res.push([...intervals[i]])
      last = intervals[i][1]
    }
  }
  return res
};
// @lc code=end

