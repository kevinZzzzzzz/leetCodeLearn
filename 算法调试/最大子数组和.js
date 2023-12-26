var maxSubArray = function(nums) {
  let big = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    big = i === 0 ? nums[i] : Math.max(big, sum)
  }
  return big
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))