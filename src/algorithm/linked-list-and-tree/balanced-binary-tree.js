// title: 平衡二叉树
// https://leetcode-cn.com/problems/balanced-binary-tree/

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。

// 思路:
// 从底至顶（提前阻断）
// 此方法为本题的最优解法，但“从底至顶”的思路不易第一时间想到。

// 思路是对二叉树做先序遍历，从底至顶返回子树最大高度，若判定某子树不是平衡树则 “剪枝” ，直接向上返回。

// 算法流程：
// recur(root):

// 递归返回值：
// 当节点root 左 / 右子树的高度差 < 2 ：则返回以节点root为根节点的子树的最大高度，
// 即节点 root 的左右子树中最大高度加 1 （ max(left, right) + 1 ）；
// 当节点 root 左 / 右子树的高度差 ≥2 ：则返回 −1 ，代表此子树不是平衡树 。
// 递归终止条件：
// 当越过叶子节点时，返回高度 0 ；
// 当左（右）子树高度 left== -1 时，代表此子树的 左（右）子树 不是平衡树，因此直接返回 −1 ；
// isBalanced(root) ：

// 返回值： 若 recur(root) != 1 ，则说明此树平衡，返回 true ； 否则返回 false 。
// 复杂度分析：
// 时间复杂度 O(N)： N 为树的节点数；最差情况下，需要递归遍历树的所有节点。
// 空间复杂度 O(N)： 最差情况下（树退化为链表时），系统递归需要使用 O(N) 的栈空间。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return recur(root) !== -1
  function recur(node) {
    if (!node) return 0
    let left = recur(node.left)
    if (left === -1) return -1
    let right = recur(node.right)
    if (right === -1) return -1
    return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1
  }
};
