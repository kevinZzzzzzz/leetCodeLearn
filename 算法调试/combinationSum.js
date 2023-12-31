
/*
 * [39] 组合总和
 */
var combinationSum = function(candidates, target) {
  let res = []
  // start当前选择的起点索引，temp当前的集合，sum当前求和
  const dfs = (start, temp, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice())
      }
      return 
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i])
      dfs(i, temp, sum + candidates[i])
      temp.pop()
    }
  }
  dfs(0, [], 0)
  console.log(res, '-------------------')
  return res
};
combinationSum([10,1,2,7,6,1,5], 8)