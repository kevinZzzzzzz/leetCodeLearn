/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *  二分法
 * 具有单调性（单调递增或者单调递减）
 * 上下边界最好通过index下标访问元素
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
    // >> 1 位运算相当于/2 下取整  考虑left + right 的边界溢出情况
    // (left+right)>>1是用二进制移位运算实现整除（以）2运算，比(left+right)/2运算效率高。
    mid = left + ((right - left) >> 1) // 中位下标
    if (nums[mid] === target) {
      return mid
    }
    if (nums[left] === nums[mid]) { // 避免重复
      ++left
      continue
    }
    if (nums[mid] >= nums[left]) { // 证明mid左侧是升序的
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else { // 证明mid右侧是升序的
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

