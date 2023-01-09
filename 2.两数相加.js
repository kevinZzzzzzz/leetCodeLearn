/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const array2List = (arr) => {
        if (arr.length === 0){
            return null
        }
        const head = new ListNode(arr[0])
        let p = head
        for(let i = 1; i < arr.length; i++) {
            p = p.next = new ListNode(arr[i])
        }
        return head
    }
    const List2Arr = (list) => {
        const arr = []
        while(list.head) {
            arr.push(head.val)
            head = head.next
        }
        return arr
    }
    let num1 = Number(List2Arr(l1).reverse().join(''))
    let num2 = Number(List2Arr(l2).reverse().join(''))
    console.log(List2Arr(l1), List2Arr(l2))
    return array2List((num1 + num2 + '').split('').reverse().map(e => {
        return Number(e)
    }))
};
// @lc code=end

