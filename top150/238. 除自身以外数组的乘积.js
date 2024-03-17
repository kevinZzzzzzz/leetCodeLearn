/* 
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

  示例 1:

  输入: nums = [1,2,3,4]
  输出: [24,12,8,6]
  示例 2:

  输入: nums = [-1,1,0,-3,3]
  输出: [0,0,9,0,0]
*/
// 思路：
// 从左往右遍历，记录从左到当前位置前一位的乘积，然后从右往左遍历，从左到当前位置前一位的乘积乘上右边元素的积。
var productExceptSelf = function(nums) {
  let len = nums.length
  let answer = new Array(len)
  answer[0] = 1
  for (let i = 1; i < len; i++) { // 该元素乘以左边的乘积
    answer[i] = answer[i - 1] * nums[i - 1]
  }
  console.log(answer, 'answer1')
  let R = 1
  for (let i = len - 1; i >= 0; i--) { // 该元素乘以右边的乘积
    answer[i] = answer[i] * R
    R = R * nums[i]
  }
  console.log(answer, 'answer2')
  return answer
};
console.log(productExceptSelf([1,2,3,4]))