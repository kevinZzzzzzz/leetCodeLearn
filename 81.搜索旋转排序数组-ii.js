/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (!nums.length) return false
  let left = 0, mid, right = nums.length - 1
  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return true
    }
    if (nums[left] === nums[mid]) {
      ++left
      continue
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return false
};
// @lc code=end

