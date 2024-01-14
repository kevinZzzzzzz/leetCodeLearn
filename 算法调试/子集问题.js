
var subsets = function(nums) {
  let res = []
  let track = []
  const backtrack = (nums, start, track) => {
    console.log(start, track)
    res.push([...track])
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(nums, i + 1, track)
      track.pop() // 选择回溯
    }
  }
  backtrack(nums, 0, track)
  return res
};
subsets([1,2,3])