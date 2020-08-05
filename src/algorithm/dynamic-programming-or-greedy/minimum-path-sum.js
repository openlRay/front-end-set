// title: 最小路径和
// https://leetcode-cn.com/problems/minimum-path-sum/

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

// 思路：
// 此类问题可以用一维数组来存储dp数据，也可以在原数组上直接存储
// dp[i][j] = Math.min(dp[i-1][j], arr[i][j-1]) + grid[i][j]

var minPathSum = function(grid) {
  let m = grid.length,
    n = grid[0].length
  const dp = [grid[0][0]]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && !j) continue
      dp[j] = (!i ? dp[j - 1] : !j ? dp[j] : Math.min(dp[j], dp[j - 1])) + grid[i][j]
    }
  }
  return dp[n - 1]
}

// case1 输入：[[1,3,1],[1,5,1],[4,2,1]] 预期：7
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)

// case2 输入：[[1,3,2]] 预期：6
console.log(minPathSum([[1, 3, 2]]))
