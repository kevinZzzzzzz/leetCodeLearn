/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let maps = {
    'I': 1, 
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let maps2 = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  }
  let a = 0
  for(let i of Object.keys(maps2)) {
    if (s.includes(i)) {
      s = s.replace(i, '')
      a += maps2[i]
    }
  }
  let b = s.split('')
  while(b.length) {
    a += maps[b.pop()]
  }
  return a
};
// @lc code=end

