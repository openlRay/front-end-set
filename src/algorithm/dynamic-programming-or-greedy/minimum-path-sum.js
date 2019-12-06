/*
 * @Author: ray_sun
 * @Date: 2019-11-29 17:40:21
 * @LastEditors: ray_sun
 * @LastEditTime: 2019-12-06 11:41:50
 */

// title: 最小路径和

// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。

var minPathSum = function(grid) {
  let m = grid.length,
    n = grid[0].length; // arr[m - 1][n - 1] = Math.min(arr[m - 2][n - 1], arr[m - 1][n - 2])
};
function next(grid, m, n, total) {
  if (!m && !n) {
    return total;
  }
  if (!m) {
    return;
  }
}

// case1 输入：[-2,1,-3,4,-1,2,1,-5,4] 预期：6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// case2 输入：[1,2,3,4] 预期：10
console.log(maxSubArray([1, 2, 3, 4]));
