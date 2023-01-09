/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums || !nums.length) return 0
  let i = 0
  let j = 0
  let len = nums.length
  while(j < len) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
    j++
  }
  return i
};
// @lc code=end

