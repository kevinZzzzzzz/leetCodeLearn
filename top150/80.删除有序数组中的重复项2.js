/* 
  删除有序数组中的重复项2
    输入：nums = [1,1,1,2,2,3]
    输出：5, nums = [1,1,2,2,3]

    输入：nums = [0,0,1,1,1,1,2,3,3]
    输出：7, nums = [0,0,1,1,2,3,3]
*/

const removeDuplicates = (nums) => {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length
}