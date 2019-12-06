// title: 排序链表

// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

// 示例 1:

// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例 2:

// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head == null || head.next == null) return head
  let fast = head,
    slow = head
  while (fast.next && fast.next.next) { // 快指针比慢指针快一步，这样找出中间的链表值
    slow = slow.next
    fast = fast.next.next
  }
  let right = slow.next // 拆分出左右两个链表
  slow.next = null
  return merge(sortList(head), sortList(right)) // 归并链表
};

// 有序链表合并
function merge(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val > l2.val) {
    l2.next = merge(l1, l2.next)
    return l2
  } else {
    l1.next = merge(l1.next, l2)
    return l1
  }
}