/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let result: string = ''
  let num: number = parseInt(a, 2) + parseInt(b, 2)
  result = num.toString(2)
  return result
};
// @lc code=end

