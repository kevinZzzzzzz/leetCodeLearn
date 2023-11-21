/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1]
  if (!nums.length) return res
  let left = 0, right = nums.length - 1, mid
  // 1、先找到target相等的mid值 作出分割位置
  while(left <= right) {
    mid = left + ((right - left) >> 1)
    if(nums[mid] === target) break
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (left > right) return res
  let i = j = mid
  // 2、然后从分割位置往两端找
  while(i > 0 && nums[i] === nums[i - 1]) i--
  while(j < nums.length - 1 && nums[j] === nums[j + 1]) j++
  res = [i, j]
  return res
};
// @lc code=end

