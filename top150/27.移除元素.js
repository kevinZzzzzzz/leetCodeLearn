/* 
  移除元素 
*/
const removeElement = (nums, val) => {
  if (!nums || nums.length) return 0
  let i = 0 // 统计数量
  let j = 0 // 下标指针
  let len = nums.length
  while(j < len) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
    j++
  }
  return i
}