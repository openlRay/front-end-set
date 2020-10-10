/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (43.05%)
 * Likes:    657
 * Dislikes: 0
 * Total Accepted:    133K
 * Total Submissions: 305.8K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true
  let slow = fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  reverseBehind = reverseList(slow.next)
  let prev = reverseBehind
  let last = head
  while (prev) {
    if(prev.val !== last.val) return false
    prev = prev.next
    last = last.next
  }
  return true
};

function reverseList(head) {
  let prev = null, cur = head
  while(cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
// @lc code=end

