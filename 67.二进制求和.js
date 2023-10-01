/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aBin = BigInt(`0b${a}`)
  let bBin = BigInt(`0b${b}`)
  return (aBin + bBin).toString(2)
};
// @lc code=end

