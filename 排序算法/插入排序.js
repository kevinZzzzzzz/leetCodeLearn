/* 
  插入排序
  思路：
    从第一个元素开始，该元素可以认为已经被排序；
    取出下一个元素，在已经排序的元素序列中从后向前扫描；
    如果该元素（已排序）大于新元素，将该元素移到下一位置；
    重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
    重复步骤2~5。
*/
let insertSort = function (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let preIndex = i - 1
    let cur = arr[i]

    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }
  return arr
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(insertionSort(arr))
