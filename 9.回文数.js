
// var isPalindrome = function(x) {
//   let len = x.length
//   if(len === 0) return
//   let arr = x.toString().split('')
//   let isEqual = true
//   while(arr.length > 1 && isEqual) {
//     if (arr.shift() !== arr.pop()) isEqual = false
//   }
//   return isEqual
// };


// var isPalindrome = function(x) {
//   if (x < 0) return false
//   let temp = x.toString().split('')
//   if (temp.length == 2 && temp[0] != temp[1]) return false
//      let y = 0
//      while(temp.length) {
//        y = 10 * y + (temp.pop() - '0')
//      }
//   return y == x
// };
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
  if (x < 0) return false
  let temp = x
  let y = 0
  while(temp > 0) {
    let lastNum = temp % 10
    temp = Math.floor(temp / 10)
    y = y * 10 + lastNum
  }
  return y == x
};
// @lc code=end

