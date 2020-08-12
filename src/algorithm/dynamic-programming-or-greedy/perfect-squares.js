// title: 完全平方数
// https://leetcode-cn.com/problems/perfect-squares/

// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 示例 1:

// 输入: n = 12
// 输出: 3
// 解释: 12 = 4 + 4 + 4.
// 示例 2:

// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.

// 思路，动态规划

// 首先初始化长度为n+1的数组dp，每个位置都为0
// 如果n为0，则结果为0
// 对数组进行遍历，下标为i，每次都将当前数字先更新为最大的结果，即dp[i]=i，比如i=4，最坏结果为4=1+1+1+1即为4个数字
// 动态转移方程为：dp[i] = MIN(dp[i], dp[i - j * j] + 1)，i表示当前数字，j*j表示平方数
// 时间复杂度：O(n*sqrt(n))，sqrt为平方根

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = [0]
  for (let i = 1; i <= n; i++) {
    let min = n
    for (j = 1; i - j * j >= 0; j++) {
      min = Math.min(min, dp[i - j * j] + 1)
    }
    dp[i] = min
  }
  return dp[n]
}

// case1 输入：12 预期：3
console.log(numSquares(12))

// case2 输入：13 预期：2
console.log(numSquares(13))

console.log(numSquares(1000000000))