/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let low = 0
  let height = nums.length - 1
  let i = 0
  while (i <= height) {
    if (nums[i] == 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]]
      low++
      i++
    } else if (nums[i] == 2) {
      [nums[i], nums[height]] = [nums[height], nums[i]]
      height--
    } else {
      i++
    }
  }
  return nums
};
// @lc code=end

