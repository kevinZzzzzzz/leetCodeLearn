/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums 
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, mid, right = nums.length
  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      right = mid
    } else if (nums[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

