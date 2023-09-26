/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 * 思路  将字符串反过来便利查询
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let a = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != ' ') a++
    if (s[i] == ' ' && a) break
  }
  return a
};
// @lc code=end

