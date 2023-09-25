/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let x = 0, y = needle.length
  let temp = ''
  let flag = false
  while(y <= haystack.length && !flag) {
    temp = haystack.slice(x, y)
    if (temp != needle) {
      x++
      y++
    } else {
      flag = true
    }
  }
  return flag ? x : -1

};
// @lc code=end

