// title: 螺旋矩阵
// https://leetcode-cn.com/problems/spiral-matrix/

// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

// 思路：
// 1、首先设定上下左右边界
// 2、其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
// 3、判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
// 4、若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
// 5、不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length < 1) return []
  let result = []
  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0
  while (true) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i])
    if (++top > bottom) break
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right])
    if (--right < left) break
    for (let i = right; i >= left; i--) result.push(matrix[bottom][i])
    if (--bottom < top) break
    for (let i = bottom; i >= top; i--) result.push(matrix[i][left])
    if (++left > right) break
  }
  return result
}

// case1 输入：[[1, 2, 3], [4, 5, 6], [7, 8, 9]] 预期：[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// case2 输入：[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] 预期：[1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))

// case3 输入：[] 预期：[]
console.log(spiralOrder([[]]))

// case4 输入：[[1,2,3]] 预期：[1,2,3]
console.log(spiralOrder([[1, 2, 3]]))
