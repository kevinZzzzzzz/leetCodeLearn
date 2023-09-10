/* 
  思路
  将一个数组拆成A、B两个小组，两个小组继续拆，直到每个小组只有一个元素为止。
  按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以被看做是合并两个有序数组的过程。
  对左右两个小数列重复第二步，直至各区间只有1个数。  
*/
const merge = (left, right) => {
  console.log('-------')
  let result = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  console.log('-------', result)
  return result
}
let mergeSort = function(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  console.log(mid, left, right)
  let mergeLeftArr = mergeSort(left)
  let mergeRightArr = mergeSort(right)
  console.log(mergeLeftArr, 1)
  console.log(mergeRightArr, 2)
  return merge(mergeLeftArr, mergeRightArr)
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(mergeSort(arr))