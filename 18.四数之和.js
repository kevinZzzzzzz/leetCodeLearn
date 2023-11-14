/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return res

  nums.sort((a, b) => a - b)
  function nSumTarget(nums, n, start, target) {
    let res = []
    let len = nums.length
    if (n < 2 || len < n) return res
    if (n == 2) {
      let L = start, R = len - 1
      while (L < R) {
        let sum = nums[L] + nums[R]
        if (sum < target) {
          while (L < R && nums[L] === nums[L + 1]) L++
        } else if (sum > target) {
          while (L < R && nums[R] === nums[R - 1]) R--
        } else {
          res.push([L, R])
          while (L < R && nums[L] === nums[L + 1]) L++
          while (L < R && nums[R] === nums[R - 1]) R--
        }
      }
    } else {
      for (let i = start; i < len; i++) {
        let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i])
        for (let arr of sub) {
          arr.push(nums[i])
          res.push(arr)
        }
        while (i < len - 1 && nums[i] === nums[i + 1]) i++
      }
    }
    return res
  }
  return nSumTarget(nums, 4, 0, target)
};
// @lc code=end

