/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (56.33%)
 * Likes:    351
 * Dislikes: 0
 * Total Accepted:    45.4K
 * Total Submissions: 78.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例 1:
 * 
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 示例 2:
 * 
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 * 
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return head
  let slow = fast = head
  while(fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  function reverse(node) {
    let prev = null, cur = node
    while(cur) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    return prev
  }
  let lastList = reverse(slow.next)
  slow.next = null
  function merge(a, b, dire = true) {
    if (!a) return b
    if (!b) return a
    if (dire) {
      a.next = merge(a.next, b, false)
      return a
    } else {
      b.next = merge(a, b.next, true)
      return b
    }
  }
  return merge(head, lastList)
};

// @lc code=end

