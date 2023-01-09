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
  return computed(nums, target, 0, nums.length - 1)
};
function computed(array, target, start, end) {
  if (start > end) return start
  const mid = Math.floor((start + end) / 2)
  if (array[mid] === target) return mid
  if (array[mid] > target) return computed(array, target, 0, mid - 1)
  if (array[mid] < target) return computed(array, target, mid + 1, end)
}
// @lc code=end

