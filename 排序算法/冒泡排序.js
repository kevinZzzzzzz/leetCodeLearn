/* 
  冒泡排序：
    原理：升序每次遍历将最大的往前排
         倒序每次遍历将最小的往前排
*/
let BobbleSort = function (arr, flag = 0) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) { // 设置指针一的边界
    for (let j = 0; j < len - 1 - i; j++) { // 设置指针二的边界，且不能超过指针一
      if (arr[j] > arr[j + 1]) { // 当比较前者大于后者， 相互换位
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return flag ? arr.reverse() : arr
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(BobbleSort(arr, 1))
let BobbleSort2 = function(arr) {
  let len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}