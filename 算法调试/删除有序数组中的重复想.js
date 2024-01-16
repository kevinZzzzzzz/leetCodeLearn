
var removeDuplicates = function(nums) {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] == nums[i]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length;
};
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))