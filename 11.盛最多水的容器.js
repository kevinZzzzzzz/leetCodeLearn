/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let res = 0;
  while (left < right) {
    // 求left和right之间的面积
    const area = Math.min(height[left], height[right]) * (right - left)
    res = Math.max(area, res)
    // 移动较低的一边，往中间收缩
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return res
};
// @lc code=end

