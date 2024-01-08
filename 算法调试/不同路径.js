var uniquePaths = function(m, n) {
  // dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
  const dp = new Array(m).fill(0)
  for(let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
    dp[i][0] = 1 // 第一行
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1 // 第一列
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  console.log(JSON.stringify(dp))
  return dp[m - 1][n - 1]
};
console.log(uniquePaths(3, 7))