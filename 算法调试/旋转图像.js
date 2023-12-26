var rotate = function(matrix) {
  const n = matrix.length
  const swap = (i, j) => {
    let temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      swap(i, j)
    }
  }
  // 每行的数组反转
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
  console.log(JSON.stringify(matrix),' matrix')
};
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])