/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
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
var levelOrder = function(root) {
  let ans = []
  function recur(node, deep) {
    if (!node) return
    if (!ans[deep]) {
      ans[deep] = []
    }
    ans[deep].push(node.val)
    recur(node.left, deep + 1)
    recur(node.right, deep + 1)
  }
  recur(root)
  return ans
}

var levelOrder = function(root) {
  if (!root) return []
  let ans = [],
    queue = [root]
  while (queue.length > 0) {
    let queueLen = queue.length,
      result = []
    for (let i = 0; i < queueLen; i++) {
      let pop = queue.shift()
      result.push(pop.val)
      pop.left && queue.push(pop.left)
      pop.right && queue.push(pop.right)
    }
    ans.push(result)
  }
  return ans
}
// @lc code=end
