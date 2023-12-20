/* 
  方法一 每次以最后一个值为基准出发，从头开始遍历查找最快能到达最后一个点的第一个下表，并以这个下标为下一个基准从新来过
*/
var jump = function(nums) {
  let lastOne = nums.length - 1 // 要到达的下标 从最后一个开始
  let step = 0 // 步数

  while(lastOne > 0) {
    for (let leftItem = 0; leftItem < lastOne; leftItem++) {
      if (leftItem + nums[leftItem] >= lastOne) {
        lastOne = leftItem
        step++
        break
      }
    }
    if (lastOne === nums.length - 1) {
      step = 0
      break
    }
  }
  return step
};
console.log(jump([3,2,1,0,4]))




/* 
  方法二 从头开始遍历 记录每一次去到的最远的下标
*/
var jump2 = function(nums) {
  let mostLeft = 0, end = 0, step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    mostLeft = Math.max(mostLeft, nums[i]+i)
    if (i === end) {
      end = mostLeft
      step++
    }
  }
  return step
}

// console.log(jump2([3,2,1,0,4]))