/* 
  给你一个非负整b 数 x ，计算并返回 x 的 算术平方根 。
*/
function mySqrt(x) {
  let i
  for (i = 1; i <= x; i++) {
    if (i * i > x) break
  }
  return i - 1
}
console.log(mySqrt(2))

function mySqrt2(x) {
  let left = 0, right = x
  let ans = 0
  while (left <= right) {
    let mid = left + ((right - left) >> 1) 
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ans
}
console.log(mySqrt2(2))