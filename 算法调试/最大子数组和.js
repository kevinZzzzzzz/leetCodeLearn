var maxSubArray = function(nums) {
  let res = -Infinity
  let n = nums.length
  let dp = new Array(n)
  dp[0] = nums[0]
  for(let i = 1; i < n; i++){
    dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
    res = Math.max(res, dp[i])
  }
  console.log(dp)
  return res
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))