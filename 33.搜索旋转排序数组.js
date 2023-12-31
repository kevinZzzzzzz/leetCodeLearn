/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) return false
  let left = 0, mid, right = nums.length - 1
  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[left] === nums[mid]) {
      ++left
      continue
    }
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
};
// @lc code=end

