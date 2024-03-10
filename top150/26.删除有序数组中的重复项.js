/* 
  删除有序数组的重复项
    输入：nums = [1,1,2]
    输出：2, nums = [1,2,_]

    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
*/
const removeDuplicates = (nums) => {
  if (!nums || !nums.length) return 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i-- // ！关键每删除一位对应的指针需要往前挪一位
    }
  }
  return nums.length
}