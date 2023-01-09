/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let len = x.length
  if(len === 0) return
  let arr = x.toString().split('')
  let isEqual = true
  while(arr.length > 1 && isEqual) {
    if (arr.shift() !== arr.pop()) isEqual = false
  }
  return isEqual
};
// @lc code=end

