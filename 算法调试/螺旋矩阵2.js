
var generateMatrix = function(n) {
  // let matrix = new Array(n).fill(new Array(n).fill(0)) // 创建一个包含 n 个元素的数组，!!!每个元素都是对同一个数组对象的引用
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0)
  }
  let value = 1
  // 各个边界取值
  let top = 0, bottom = n - 1, left = 0, right = n - 1
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++
    }
    top++
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++
    }
    right--
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value++
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value++
    }
    left++
  }
  console.log(JSON.stringify(matrix))
};
generateMatrix(3)