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
  nums.sort((a, b) => a - b)
  function nSumTarget(nums, n, start, target) {
    let res = []
    let len = nums.length
    if (n < 2 || len < n) return res
    if (n == 2) {
      let L = start, R = len - 1
      while (L < R) {
        let sum = nums[L] + nums[R]
        let lNum = nums[L]
        let rNum = nums[R]
        if (sum < target) {
          while (L < R && nums[L] == lNum) L++
        } else if (sum > target) {
          while (L < R && nums[R] == rNum) R--
        } else {
          res.push([lNum, rNum])
          while (L < R && nums[L] == lNum) L++
          while (L < R && nums[R] == rNum) R--
        }
      }
    } else {
      for (let i = start; i < len; i++) {
        let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i])
        for (let arr of sub) {
          arr.push(nums[i])
          res.push(arr)
        }
        while (i < len - 1 && nums[i] == nums[i + 1]) i++
      }
    }
    return res
  }
  return nSumTarget(nums, 4, 0, target)
};
// @lc code=end

