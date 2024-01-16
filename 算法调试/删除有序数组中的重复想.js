
var removeDuplicates = function(nums) {
  let j = 0
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 1] == nums[i]) {
      j++
    } else {
      j = 0
    }
    console.log(nums[i - 1], nums[i], j, i)
    if (j > 1) {
      console.log(i)
      nums.splice(i, 1)
    }
  }
  console.log(nums)
  return nums.length;
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))