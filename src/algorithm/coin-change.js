/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0
  let min = 10000
  for (let i = 0; i < coins.length; i++) {
    if (amount - coins[i] < 0) continue
    let subProb = Math.min(coinChange(coins, amount - coins[i]))
    if (subProb === -1) continue
    min = Math.min(min, subProb) + 1
  }
  return min === 10000 ? -1 : min
};
console.log(coinChange([1, 2, 5], 100))