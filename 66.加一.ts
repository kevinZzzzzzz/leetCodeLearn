/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let str: string = ''
  for(let i in digits) {
    str += digits[i]
  }
  str =( BigInt(str) + BigInt(1)) + ''
  let arr = str.replace('n', '').split('').map((e:string) => Number(e))
  return arr
};
// @lc code=end

