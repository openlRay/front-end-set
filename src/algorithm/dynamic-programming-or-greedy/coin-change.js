// title: 零钱兑换
// https://leetcode-cn.com/problems/coin-change/

// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

//

// 示例 1:

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 示例 2:

// 输入: coins = [2], amount = 3
// 输出: -1
//

// 说明:
// 你可以认为每种硬币的数量是无限的。

// 思路，动态规划
// 假设coins = [1, 2, 5]
// 自底向上的动态规划，dp[i]=min(dp[i - 1], dp[i - 2], dp[i - 5]) + 1
// 同时也需要判断i 是否大于 1，2，5

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!coins.length) return -1
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

// case1 输入：coins = [1, 2, 5], amount = 11 预期：3
console.log(coinChange([1, 2, 5], 11))

// case2 输入：coins = [2], amount = 3 预期：-1
console.log(coinChange([2], 3))
