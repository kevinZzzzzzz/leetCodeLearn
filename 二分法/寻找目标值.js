/* 
  给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
  如果数组中不存在目标值 target，返回 [-1, -1]。
  你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题
*/
function biSearchStart(nums, target) {
  let left = 0, right = nums.length - 1
  let ans = -1
  while (left <= right) {
    let mid = left + ((right  - left) >> 1)
    console.log(mid)
    const val = nums[mid]
    if (val < target) {
      left = mid + 1
    } else if (val > target) {
      right = mid - 1
    } else {
      ans = mid
      right = mid - 1
    }
  }
  return ans
}

function biSearchEnd(nums, target) {
  let left = 0, right = nums.length - 1
  let ans = -1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    const val = nums[mid]
    if (val < target) {
      left = mid + 1
    } else if (val > target) {
      right = mid - 1
    } else {
      ans = mid
      left = mid + 1
    }
  }
  return ans
}

function searchRange(nums, target) {
  const start = biSearchStart(nums, target)
  const end = biSearchEnd(nums, target)
  return [start, end]
}

// 测试
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))