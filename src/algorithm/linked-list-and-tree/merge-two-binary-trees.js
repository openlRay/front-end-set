/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 *
 * https://leetcode-cn.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (77.05%)
 * Likes:    457
 * Dislikes: 0
 * Total Accepted:    69.7K
 * Total Submissions: 90.3K
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 *
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL
 * 的节点将直接作为新二叉树的节点。
 *
 * 示例 1:
 *
 *
 * 输入:
 * Tree 1                     Tree 2
 * ⁠         1                         2
 * ⁠        / \                       / \
 * ⁠       3   2                     1   3
 * ⁠      /                           \   \
 * ⁠     5                             4   7
 * 输出:
 * 合并后的树:
 * 3
 * / \
 * 4   5
 * / \   \
 * 5   4   7
 *
 *
 * 注意: 合并必须从两个树的根节点开始。
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  function recur(n1, n2) {
    if (!n1) return n2
    if (!n2) return n1
    n1.val = n1.val + n2.val
    n1.left = recur(n1.left, n2.left)
    n1.right = recur(n1.right, n2.right)
    return n1
  }
  return recur(t1, t2)
}
// @lc code=end
