/* 
  多数元素
    给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
  输入：nums = [3,2,3]
  输出：3
  输入：nums = [2,2,1,1,1,2,2]
  输出：2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length / 2;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map).find((key) => map[key] > n);
};
