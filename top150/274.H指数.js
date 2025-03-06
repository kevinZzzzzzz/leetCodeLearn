/* 
数组 计数排序 排序
给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。

  示例 1：
  输入：citations = [3,0,6,1,5]
  输出：3 
  解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
  示例 2：
  输入：citations = [1,3,1]
  输出：1
*/
// 思路1：排序法，将数组从小往大排序，每当找到大于当前h指数的论文，h+1, 最后返回h
var hIndex = function (citations) {
  citations.sort((a, b) => a - b); // 从小往大排序
  let h = 0;
  let last = citations.length - 1;
  while (last >= 0 && citations[last] > h) {
    h++;
    last--;
  }
  return h;
};
console.log(hIndex([3, 0, 6, 1, 5]));

// 二分法
var hIndex1 = function (citations) {
  let left = 0,
    right = citations.length;
  while (left < right) {
    let mid = (left + right) >> 1; // 取中间值
    let cur = 0;
    for (let v of citations) {
      if (v >= mid) cur++; // 统计大于等于当前mid的值
    }
    if (cur >= mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
console.log(hIndex1([3, 0, 6, 1, 5]));

var hIndex2 = function (citations) {
  citations.sort((a, b) => a - b);
  let n = citations.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    const curH = Math.min(n - i, citations[i]);
    if (curH >= res) {
      res = curH;
    } else {
      break;
    }
  }
  return res;
};

var hIndex3 = function (citations) {
  citations.sort((a, b) => a - b);
  const n = citations.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    // 计算当前位置的 h 指数，通过比较总论文数（n）减当前位置索引（i）和当前位置的引用次数（citations[i]），取两者中的最小值
    const curH = Math.min(n - i, citations[i]);
    // 更新结果（res），取当前结果和当前位置的 h 指数中的最大值，以确保 res 始终是最高的 h 指数
    res = Math.max(res, curH);
  }
  return res;
};
