/* 
  给你一个整数 n ，表示有 n 间零售商店。总共有 m 种产品，每种产品的数目用一个下标从 0 开始的整数数组 quantities 表示，其中 quantities[i] 表示第 i 种商品的数目。
  你需要将 所有商品 分配到零售商店，并遵守这些规则：
  一间商店 至多 只能有 一种商品 ，但一间商店拥有的商品数目可以为 任意 件。
  分配后，每间商店都会被分配一定数目的商品（可能为 0 件）。用 x 表示所有商店中分配商品数目的最大值，你希望 x 越小越好。也就是说，你想 最小化 分配给任意商店商品数目的 最大值 。
  请你返回最小的可能的 x
*/
function isValid(n, quantities, x) {
  let count = 0
  for (let i = 0; i < quantities.length; i++) {
    count += Math.ceil(quantities[i] / x)
  }
  return count <= n
}

/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
  let l = 1, r = 100000
  let ans = l
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (isValid(n, quantities, mid)) {
      // 如果当前mid合法 我们就记录答案 然后再尝试小于mid的值中是否有合法值
      ans = mid
      r = mid - 1
    } else {
      // 如果不合法就缩小范围，去大于mid的值只查找
      l = mid + 1
    }
  }
  return ans
};
