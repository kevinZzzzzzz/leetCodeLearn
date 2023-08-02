/* 
  思路：
    选择数组的中位数作为基数，并从数组中取出此基数
    准备两个数组容器，遍历数组，逐个与基数对比，较小的放在左边容器，较大的放右边容器
    递归处理两容器的元素，直到拆成一个后返回出来，并将处理后的数据与基数按大小合成一个数组
*/
const quickSort = function(arr) {
  if (arr.length <= 1) return arr

  let index = Math.floor(arr.length / 2) // 取出中位数 
  let middle = arr.splice(index, 1)[0] // 中位数对应的数
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (middle > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([middle], quickSort(right))
}