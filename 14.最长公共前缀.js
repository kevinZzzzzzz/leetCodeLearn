/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let a = ''
  let temps = strs[0]
  if (!temps.length) return a
  if (strs.length === 1) return temps
  for(let i = 0; i < temps.length; i++) {
    a += temps[i]
    for(let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(a)) return a.length ? a.slice(0, a.length - 1) : ''
    }
  }
  return a
};
// @lc code=end

