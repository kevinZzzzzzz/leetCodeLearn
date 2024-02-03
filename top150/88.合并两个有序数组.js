/* 
  合并两个有序数组

  方法一 双指针
  利用数组 nums1与 nums2已经被排序的性质。为了利用这一性质，我们可以使用双指针方法。这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。
*/
var merge = function(num1, m, num2, n) {
  let i = 0, j = 0;
  const sorted = new Array(m + n).fill(0)
  let cur // 当前值
  while (i < m || j < n) {
    if (i === m) {
      cur = num2[j++]
    } else if (j === n) {
      cur = num1[i++]
    } else if (num1[i] < num2[j]) {
      cur = num1[i++]
    } else {
      cur = num2[j++]
    }
    sorted[i + j - 1] = cur
  }
  for (let k = 0; k < m + n; k++) {
    num1[k] = sorted[k]
  }
  console.log(num1)
}

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)