/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) return 0
  let i = 0
  let j = 1
  while(j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i+1] = nums[j]
      i++
    }
    j++
  }
  return i + 1
};
// @lc code=end

