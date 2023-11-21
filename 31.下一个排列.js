/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length
  // 从右往左遍历，找到第一个非降序的数
  let l = -1
  for(let i = len - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      l = i - 1
      break
    }
  }

  if (l != -1) {
    let r = -1
    // 找到后从右往l+1遍历，找到第一个大于nums[l]的数
    for(let i = len - 1; i > l; i--) {
      if (nums[i] > nums[l]) {
        r = i
        break
      }
    }
    // 交换数字
    [nums[l], nums[r]] = [nums[r], nums[l]]
  }
  // 交换完后将nums[l]后面的数做一个升序的处理，以求得所谓与原数[较大]的数
  let s = l + 1
  e = len - 1
  while(s < e) {
    [nums[s], nums[e]] = [nums[e], nums[s]]
    s++
    e--
  }
};
// @lc code=end

