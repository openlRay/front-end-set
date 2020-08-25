/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层次遍历如下：
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 双栈思路:
// 我们用两个栈，栈stack1用保存奇数层的节点，栈stack2用来保存偶数层的节点，第一层入栈stack1，进入循环.TreeNode
// 我们来思考下第二层入栈的顺序题目要求我们第二层是从右到左，那么我们利用栈的话就应该是从左到右入栈(栈是先入后出)
// 当第二层入栈操作完后，第三层入栈，第三层是从左到右，所以我们的入栈顺序是从右往左
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let stack1 = [root],
    stack2 = [],
    ans = [] // 结果
  while (stack1.length || stack2.length) {
    let result = []
    if (stack1.length) {
      while (stack1.length) {
        // 栈二，也就是偶数行从左往右入栈
        // 在上例中就是先是9入栈，然后是20入栈
        // 出栈的顺序是20 > 9，因此得到的第二层的数是[20, 9]
        let pop = stack1.pop()
        result.push(pop.val)
        pop.left && stack2.push(pop.left)
        pop.right && stack2.push(pop.right)
      }
      ans.push(result)
      continue
    }
    if (stack2.length) {
      while (stack2.length) {
        // 栈一，也就是奇数行从右往左入栈
        // 在上一个循环中出栈顺序是20 > 9，我们先看20，因为我们是从右往左入栈
        // 所以我们的入栈顺序是7 > 15，再看9，9已经没有子节点了，因此结束
        // 出栈的顺序是15 > 7，因此得到的第三层的数是[15, 7]
        let pop = stack2.pop()
        result.push(pop.val)
        pop.right && stack1.push(pop.right)
        pop.left && stack1.push(pop.left)
      }
      ans.push(result)
    }
  }
  return ans
}

// 双端队列思路:
// 双端队列采用的是可以从两头插入，也可以从两头取出的形式
// 主要做法是，才偶数层即0、2等层，我们采用从首端取，然后从尾端插入从左到右获取的子节点
// 那上例说明，假如当前我们在第0层，首端取出，即是取出3，然后我们从左到右获取子节点，分别是9 > 20
// 此时队列为[9, 20]
// 然后到第一层奇数层即9、20这一层，我们采用从尾端取，然后从首端插入从右往左获取的子节点
// 一个取出来的是20，它的子节点从右往左分别是7,15，我们将7,15放到首端
// 此时的队列为[15,7,9]（注意我们是先取的7然后将7放入首端，然后取的15所以队列里15在7前面）
// 然后我们取出9,9没有子节点，结束
// 此时队列为[15,7]
// 这时候我们到了第二层，偶数层。从首端取即15，然后取7
// 最后得到的结果
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let queue = [root],
    ans = [],
    deep = 0
  while (queue.length) {
    let result = [],
      queueLen = queue.length
    for (let i = 0; i < queueLen; i++) {
      if (deep % 2 === 0) {
        let el = queue.shift()
        result.push(el.val)
        el.left && queue.push(el.left)
        el.right && queue.push(el.right)
      } else {
        let el = queue.pop()
        result.push(el.val)
        el.right && queue.unshift(el.right)
        el.left && queue.unshift(el.left)
      }
    }
    deep++
    ans.push(result)
  }
  return ans
}
// @lc code=end
