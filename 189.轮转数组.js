/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 反转元素
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[end], arr[start]] = [arr[start], arr[end]]
      start++
      end--
    }
  }
  // 将 k 调整为不超过数组长度的值
  k = k % nums.length
  // 将所有元素反转
  reverse(nums, 0, nums.length - 1)
  // 将前k个元素反转
  reverse(nums, 0, k - 1)
  // 将后面n - k个元素反转
  reverse(nums, k, nums.length - 1)
};
// @lc code=end

