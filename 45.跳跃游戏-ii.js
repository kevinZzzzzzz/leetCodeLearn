/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 该方案使用贪心算法，我们的目标是到达数组的最后一个位置，因此我们可以考虑最后一步跳跃前所在的位置，
 * 该位置通过跳跃能够到达最后一个位置。如果有多个位置通过跳跃都能够到达最后一个位置，我们可以「贪心」
 * 地选择距离最后一个位置最远的那个位置，也就是对应下标最小的那个位置。因此，我们可以从左到右遍历数组
 * ，选择第一个满足要求的位置。找到最后一步跳跃前所在的位置之后，我们继续贪心地寻找倒数第二步跳跃前所
 * 在的位置，以此类推，直到找到数组的开始位置。
 */
var jump = function(nums) {
  let lastOne = nums.length - 1 // 要到达的下标 从最后一个开始
  let step = 0 // 步数

  while(lastOne > 0) {
    for (let leftItem = 0; leftItem < lastOne; leftItem++) {
      if (leftItem + nums[leftItem] >= lastOne) {
        lastOne = leftItem
        step++
        break
      }
    }
  }
  return step
};
// @lc code=end

