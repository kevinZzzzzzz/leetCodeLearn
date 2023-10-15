/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let c = nums1.concat(nums2).sort((a, b) => a - b)
  if (c.length === 1) return c[0]
  let len = c.length
  let center = null
  if (!(len % 2)) {
    console.log(c[len / 2], c[(len / 2) + 1])
    center = (c[(len / 2) - 1] + c[len / 2]) / 2
  } else {
    center = (c[Math.floor(len / 2)])
  }
  return center
};
// @lc code=end

