// 上图可以表示为
const graph1 = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}


// 深度优先遍历，对根节点没访问过的相邻节点挨个进行遍历
    // 记录节点是否访问过
    const visited = new Set();
    const dfs = (n) => {
      visited.add(n);
      // 遍历相邻节点
      // console.log(graph1[n])
      graph1[n].forEach(c => {
        // 没访问过才可以，进行递归访问
        if(!visited.has(c)){
          dfs(c)
        }
      });
    }
    
    // 从2开始进行遍历
    // dfs(0)
    // console.log(visited)


// // 广度优先遍历 
// {
//     const visited = new Set();
//     // 新建一个队列， 根节点入队， 设2为根节点
//     const q = [2];
//     visited.add(2)
//     while (q.length) {
    
//       // 队头出队，并访问
//       const n = q.shift();
//       console.log(n);
//       graph1[n].forEach(c => {
      
//         // 对没访问过的相邻节点入队
//         if (!visited.has(c)) {
//           q.push(c)
//           visited.add(c)
//         }
//       })
//     }
// }

// 生成数字关系图 只有状态为 3 5 6 的时候才为一个数字
const graph2 = {
  0: { 'blank': 0, 'sign': 1, ".": 2, "digit": 6 },
  1: { "digit": 6, ".": 2 },
  2: { "digit": 3 },
  3: { "digit": 3, "e": 4 },
  4: { "digit": 5, "sign": 7 },
  5: { "digit": 5 },
  6: { "digit": 6, ".": 3, "e": 4 },
  7: { "digit": 5 },
}


// 时间复杂度 O(n) n是字符串长度
// 空间复杂度 O(1) 
var isNumber = function (s) {

  // 记录状态
  let state = 0;

  // 遍历字符串
  for (c of s.trim()) {
    // 把字符进行转换
    if (c >= '0' && c <= '9') {
      c = 'digit';
    } else if (c === " ") {
      c = 'blank';
    } else if (c === "+" || c === "-") {
      c = "sign";
    } else if (c === "E" || c === "e") {
      c = "e";
    }

    // 开始寻找图
    state = graph2[state][c];

    // 如果最后是undefined就是错误
    if (state === undefined) return false
  }
  console.log(state)
  // 判断最后的结果是不是合法的数字
  if (state === 3 || state === 5 || state === 6) return true
  return false
}; 

console.log(isNumber('qweqw123w123'))