/*
 * [41] 缺失的第一个正数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  if (!nums.length) return 1
  if (nums.length === 1 && nums[0] <= 0) return 1
  let numM = nums.sort((a, b) => a - b)[nums.length - 1]
  if (numM < 0) return 1
  let res = null
  for (let i = 1; i <= numM; i++) {
    if (!nums.includes(i)) {
      res = i
      break
    }
    res = i + 1
  }
  return res
};
