/* 
  选择排序
  思路
    有n个数,需要排序n-1次
    第一次选择最小值,放在第一位
    第二次选择最小值,放在第二位
    …..重复该过程
    第n-1次选择最小值,放在第n-1位
*/

let selectSort = function (arr) {
  let len = arr.length, temp = 0

  for (let i = 0; i < len - 1; i++) {
    temp = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[temp]) temp = j
    }
    if (temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
  }
  return arr
}