/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head == null) return null
  let a1 = a2 = head
  while(a2 !== null) {
    if (a2.val !== a1.val) {
      a1.next = a2
      a1 = a1.next
    }
    a2 = a2.next
  }
  a1.next = null
  return head
};
// @lc code=end

