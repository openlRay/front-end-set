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
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let queue = [root],
    ans = []
  while (queue.length) {
    let queueLen = queue.length,
      result = []
    for (let i = 0; i < queueLen; i++) {
      let pop = queue.pop()
      result.push(pop.val)
      if (ans.length % 2 === 0) {
        pop.right && queue.push(pop.right)
        pop.left && queue.push(pop.left)
      } else {
        pop.left && queue.push(pop.left)
        pop.right && queue.push(pop.right)
      }
    }
    ans.push(result.reverse())
  }
  return ans
}
// @lc code=end
