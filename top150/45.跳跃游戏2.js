/* 
  给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
  每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
    0 <= j <= nums[i] 
    i + j < n
  返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

  示例 1:
    输入: nums = [2,3,1,1,4]
    输出: 2
    解释: 跳到最后一个位置的最小跳跃数是 2。
      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
  示例 2:
    输入: n  ums = [2,3,0,1,4]
    输出: 2
*/
/**
 * 该方案使用贪心算法，我们的目标是到达数组的最后一个位置，因此我们可以考虑最后一步跳跃前所在的位置，
 * 该位置通过跳跃能够到达最后一个位置。如果有多个位置通过跳跃都能够到达最后一个位置，我们可以「贪心」
 * 地选择距离最后一个位置最远的那个位置，也就是对应下标最小的那个位置。因此，我们可以从左到右遍历数组
 * ，选择第一个满足要求的位置。找到最后一步跳跃前所在的位置之后，我们继续贪心地寻找倒数第二步跳跃前所
 * 在的位置，以此类推，直到找到数组的开始位置。
 */
var jump = function(nums) {
  let lastLen = nums.length - 1 // 需要去到的最远
  let step = 0
  while(lastLen > 0) {
    for (let i = 0; i < lastLen; i++) {
      if (nums[i] + i >= lastLen) {
        lastLen = i
        step++
        break
      }
    }
  }
  return step
};
// const jump = (nums) => {
//   let max = 0 // 目前可达最远的距离
//   let end = 0 // 可达范围右边界
//   let step = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     max = Math.max(max, nums[i] + i)
//     if (i == end) { // 到达上一次的右边界
//       end = max // 目前能跳到的最远位置变成了下次起跳位置的右边界
//       step++
//     }
//   }
//   return step
// }
console.log(jump([2,3,1,1,4]))
