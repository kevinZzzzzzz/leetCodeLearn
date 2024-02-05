/* 
  轮转数组
*/
// 方法一
// var rotate = function(nums, k) {
//   for (let i = k; i > 0; i--) {
//     nums.unshift(nums.pop())
//   }
//   console.log(nums)
// };

/* 
  方法二
    原始数组 : 1 2 3 4 5 6 7
    反转所有数字后 : 7 6 5 4 3 2 1
    反转前 k 个数字后 : 5 6 7 4 3 2 1
    反转后 n-k 个数字后 : 5 6 7 1 2 3 4 --> 结果
*/
var rotate = function(nums, k) {
  // 反转元素
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[end], arr[start]] = [arr[start], arr[end]]
      start++
      end--
    }
  }
  // 将 k 调整为不超过数组长度的值
  k = k % nums.length
  // 将所有元素反转
  reverse(nums, 0, nums.length - 1)
  // 将前k个元素反转
  reverse(nums, 0, k - 1)
  // 将后面n - k个元素反转
  reverse(nums, k, nums.length - 1)
};
rotate([1,2,3,4,5,6,7], 3)