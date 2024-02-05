/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let n = nums.length / 2
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }
  return Object.keys(map).find(key => map[key] > n)
};
// @lc code=end

