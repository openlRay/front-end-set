/*
 *
 * 剑指 Offer 33. 二叉搜索树的后序遍历序列
 *
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 *
 * algorithms
 * Medium
 *
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 参考以下这颗二叉搜索树：

 *     5
 *    / \
 *   2   6
 *  / \
 * 1   3
 * 示例 1：

 * 输入: [1,6,3,2,5]
 * 输出: false
 * 示例 2：

 * 输入: [1,3,2,6,5]
 * 输出: true
 
 * 提示：

 * 数组长度 <= 1000
 *
 *
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  function recur(i, j) {
    if (i >= j) return true
    let p = i
    while (postorder[p] < postorder[j]) p++
    let m = p
    while (postorder[p] > postorder[j]) p++
    return p === j && recur(i, m - 1) && recur(m, j - 1)
  }
  return recur(0, postorder.length - 1)
}

// case1 输入：[4, 6, 7, 5] 预期：true
console.log(verifyPostorder([4, 6, 7, 5]))

// case2 输入：[1, 6, 3, 2, 5] 预期：false
console.log(verifyPostorder([1, 6, 3, 2, 5]))

// case3 输入：[1, 3, 2, 6, 5] 预期：true
console.log(verifyPostorder([1, 3, 2, 6, 5]))
