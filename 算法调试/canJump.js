function canJump(nums) {
  let n = nums.length
  // 当前所能跳转的最大步数
  let farthest = 0
  for(let i = 0; i < n - 1; i++) {
    // 更新当前所能跳转的最大步数 nums[i] + i表示你最远能跳到下标几
    farthest = Math.max(farthest, nums[i] + i)
    // if (farthest <= i) return false
  }
  // 判断是否能到达最后一位的下标
  return farthest >= (n - 1)
};
console.log(canJump([3,2,1,0,4]), 123)