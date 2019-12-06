// title: 合并K个排序链表

// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let len = lists.length
  if (len < 3) {
    return merge(lists[0] || null, lists[1] || null)
  } else {
    let mid = Math.floor(len / 2)
    return mergeKLists([mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid))])
  }
};

function merge(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val > l2.val) {
    l2.next = merge(l1, l2.next)
    return l2
  } else {
    l1.next = merge(l1.next, l2)
    return l1
  }
}