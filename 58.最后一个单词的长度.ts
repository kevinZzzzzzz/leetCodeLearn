/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let num: number = 0
  let arr: string[] = s.split(' ')
  arr = arr.filter((d:string) => d)
  arr.forEach((e: string, idx: number) => {
    if (idx === arr.length - 1) {
      num = e.length
    }
  })
  return num
};
// @lc code=end

