
var generateMatrix = function(n) {
  let matrix = new Array(n).fill(new Array(n).fill(0))
  let value = 1
  const res = []
  // 各个边界取值
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      matrix[top][i] = value++
    }
    for (let i = top; i < bottom; i++) {
      matrix[i][right] = value++
    }
    for (let i = right; i > left; i--) {
      matrix[bottom][i] = value++
    }
    for (let i = bottom; i > top; i--) {
      matrix[i][left] = value++
    }
    top++
    bottom--
    right--
    left++
  }
  console.log(JSON.stringify(matrix))
};
generateMatrix(3)