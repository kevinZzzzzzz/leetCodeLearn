/* 
  给定一个有序数组和一个数字x，快速查找数组中x对应的下标，不存在返回-1
*/

function biSearch(arr, x) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    // let mid = left + ((right - left) >> 1)
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === x) {
      return mid
    }
    if (arr[mid] > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
let arr = [1, 2, 3, 5, 8, 13, 21]
console.log(biSearch(arr, 3)); // 2
console.log(biSearch(arr, 7)); // -1