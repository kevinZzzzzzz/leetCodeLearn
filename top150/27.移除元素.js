/* 
  移除元素 
  给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。
  假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
  更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
  返回 k。
*/
const removeElement = (nums, val) => {
  if (!nums || !nums.length) return 0;
  let i = 0; // 统计数量
  let j = 0; // 下标指针
  let len = nums.length;
  while (j < len) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
    j++;
  }
  return i;
};
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

var removeElement1 = function (nums, val) {
  if (!nums || !nums.length) return 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
console.log(removeElement1([3, 2, 2, 3], 3));
console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2));
