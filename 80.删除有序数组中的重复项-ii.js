/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = 0
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i]) {
      if (j < 1) {
        j++
        continue
      } else {
        nums.splice(i, 1)
        j = 0
      }
    }
  }
  return nums.length;
};
// @lc code=end

