/* 
贪心 数组 动态规划
  给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
  判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

  示例 1：

  输入：nums = [2,3,1,1,4]
  输出：true
  解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
  示例 2：

  输入：nums = [3,2,1,0,4]
  输出：false
  解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
*/
var canJump = function (nums) {
  let len = nums.length;
  let farthest = 0; // 用于记录最远可达距离
  for (let i = 0; i < len - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]); // 计算当前一步最远可达哪个位置
    if (farthest <= i) break;
  }
  return farthest >= len - 1; // 判断是否能够到达最后一位
};
console.log(canJump([2, 3, 1, 1, 4]));
