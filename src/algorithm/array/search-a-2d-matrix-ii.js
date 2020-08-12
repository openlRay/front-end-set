// title: 搜索二维矩阵 II
// https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

// 思路：
// 因为矩阵的行和列是排序的（分别从左到右和从上到下），所以在查看任何特定值时，我们可以修剪O(m)或O(n)元素。

// 算法：
// 首先，我们初始化一个指向矩阵左下角的 (row，col) 指针。然后，直到找到目标并返回 true（或者指针指向矩阵维度之外的 (row，col) 为止
// 我们执行以下操作：如果当前指向的值大于目标值，则可以 “向上” 移动一行。
// 否则，如果当前指向的值小于目标值，则可以移动一列。不难理解为什么这样做永远不会删减正确的答案；
// 因为行是从左到右排序的，所以我们知道当前值右侧的每个值都较大。
// 因此，如果当前值已经大于目标值，我们知道它右边的每个值会比较大。
// 也可以对列进行非常类似的论证，因此这种搜索方式将始终在矩阵中找到目标（如果存在）。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length < 1) return false
  let m = matrix.length,
    n = matrix[0].length
  let left = m - 1,
    right = 0
  while (left >= 0 && right < n) {
    if (matrix[left][right] === target) {
      return true
    } else if (matrix[left][right] < target) {
      right++
    } else {
      left--
    }
  }
  return false
}

// case1 输入：[
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ] 5 预期：true
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    5
  )
)

// case2 输入：[
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ] 20 预期：false

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    20
  )
)

console.log(searchMatrix([[1, 4, 7, 11, 15]], 7))
