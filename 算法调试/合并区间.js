
var merge = function(intervals) {
  const n = intervals.length - 1
  intervals.sort((a, b) => a[0] - b[0])
  console.log(JSON.stringify(intervals))
  let res = [[...intervals[0]]]
  let last = intervals[0][1]
  for (let i = 1; i <= n; i++) {
    console.log(JSON.stringify(res), last)
    if (intervals[i][0] <= last && intervals[i][1] >= last) {
      if (res[res.length - 1]?.length) {
        res[res.length - 1][1] = intervals[i][1]
        last = intervals[i][1]
      }
    } else if (intervals[i][1] <= last) {
      continue
    } else {
      res.push([...intervals[i]])
      last = intervals[i][1]
    }
  }
  return res
};
console.log(JSON.stringify(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])))