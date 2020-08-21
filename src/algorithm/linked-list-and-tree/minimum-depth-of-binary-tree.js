/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 题目中说明:叶子节点是指没有子节点的节点，这句话的意思是 1 不是叶子节点
// 题目问的是到叶子节点的最短距离，所以所有返回结果为 1 当然不是这个结果

// 另外这道题的关键是搞清楚递归结束条件

// 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
// 当 root 节点左右孩子都为空时，返回 1
// 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的最小深度 + 1
// 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值 + 1

/*
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  if (root.left == null && root.right == null) return 1
  let m1 = minDepth(root.left)
  let m2 = minDepth(root.right)
  return root.left == null || root.right == null ? m1 + m2 + 1 : Math.min(m1, m2) + 1
}
