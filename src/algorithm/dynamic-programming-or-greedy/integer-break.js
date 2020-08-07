// title: 整数拆分
// https://leetcode-cn.com/problems/integer-break/

// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

// 示例 1:

// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。
// 示例 2:

// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
// 说明: 你可以假设 n 不小于 2 且不大于 58。

// 思路，动态规划

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    let max = 0
    for (let j = 1; j < i; j++) {
      max = Math.max(max, (i - j) * j, dp[i - j] * j)
    }
    dp[i] = max
  }
  return dp[n]
}

// case1 输入：2 预期：1
console.log(integerBreak(2))

// case2 输入：10 预期：36
console.log(integerBreak(10))
