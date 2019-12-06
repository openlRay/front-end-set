// title: 环形链表 II

// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 说明：不允许修改给定的链表。

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：tail connects to node index 1
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：tail connects to node index 0
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 示例 3：

// 输入：head = [1], pos = -1
// 输出：no cycle
// 解释：链表中没有环。

// 进阶：
// 你是否可以不用额外空间解决此题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 假设变量:

// 非环部分长度为a
// 环的长度为b
// 环首与快慢指针的环内相遇点距离x
// 快慢指针相遇时走过的长度:

// slow: a + nb + x
// fast: a + mb + x
// 其中m, n皆为正整数, 代表快慢指针走过环的圈数

// 由于快指针比慢指针多走两倍, 所以得出:

// a + mb + x = 2(a + nb + x)
// => a + x = (m - n) b

// 得出慢指针走过的路径:

// a + nb + x
// => mb - nb + nb
// => mb

// 所以慢指针继续走a步即可到达环首:

// mb + a
// => a + mb
// 表示慢指针先走过非环的距离, 再在环内绕了m个圈

// 此时如果将fast指针重置为head，之后和slow指针一样每次只走一步，当fast和slow相遇时，正好走了a步

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head == null || head.next == null) return null
  let fast = head,
    slow = head
  do {
    fast = fast.next && fast.next.next
    slow = slow.next
    if (slow == null || fast == null) {
      return null
    }
  } while (fast != slow)
  fast = head
  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};