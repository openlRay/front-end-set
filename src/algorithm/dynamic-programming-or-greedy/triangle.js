// title: 三角形最小路径和

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

// 例如，给定三角形：

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

// 说明：

// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function (triangle) {
//   if (!triangle.length || !triangle[0].length) return 0
//   let dp = []
//   for (let i = 0; i < triangle.length; i++) {
//     dp[i] = []
//   }
//   for (let i = triangle.length - 1; i >= 0; i--) {
//     for (let j = triangle[i].length - 1; j >= 0; j--) {
//       if (i === triangle.length - 1) {
//         dp[i][j] = triangle[i][j]
//       } else {
//         dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
//       }
//     }
//   }
//   return dp[0][0]
// };

// 自底向上
var minimumTotal = function (triangle) {
  if (!triangle.length || !triangle[0].length) return 0
  let dp = []
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = triangle[triangle.length - 1][i]
  }
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
};

// case1 输入：[[2],[3,4],[6,5,7],[4,1,8,3]] 预期：11
console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))

// case2 输入：[[1]] 预期：-1
// console.log(minimumTotal([
//   [-1],
//   [2, 3],
//   [1, -1, -3]
// ]))

// case2 输入：[[-10]] 预期：-10
// console.log(minimumTotal([
//   [-10]
// ]))