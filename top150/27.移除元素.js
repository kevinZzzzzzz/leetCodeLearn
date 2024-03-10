/* 
  移除元素 
*/
const removeElement = (nums, val) => {
  if (!nums || !nums.length) return 0
  let i = 0 // 统计数量
  let j = 0 // 下标指针
  let len = nums.length
  while (j < len) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
    j++
  }
  return i
}
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))