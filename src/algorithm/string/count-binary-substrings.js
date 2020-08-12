// title: 数二进制子串
// https://leetcode-cn.com/problems/count-binary-substrings/

// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

// 重复出现的子串要计算它们出现的次数。

// 示例 1 :

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
// 示例 2 :

// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
// 注意：

// s.length 在1到50,000之间。
// s 只包含“0”或“1”字符。

// 思路：
// 我们可以将字符串 s 按照 0 和 1 的连续段分组，存在 counts 数组中
// 例如 s=00111011，可以得到这样的 counts 数组：counts={2,3,1,2}。

// 这里 counts 数组中两个相邻的数一定代表的是两种不同的字符。
// 假设 counts 数组中两个相邻的数字为 u 或者 v，它们对应着 u 个 0 和 v 个 1，或者 u 个 1 和 v 个 0。
// 它们能组成的满足条件的子串数目为 min{u,v}，即一对相邻的数字对答案的贡献。

// 我们只要遍历所有相邻的数对，求它们的贡献总和，即可得到答案。
// 对于某一个位置 i，其实我们只关心 i−1 位置的 counts 值是多少
// 所以可以用一个 last 变量来维护当前位置的前一个位置，这样可以省去一个 counts 数组的空间。

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let prev = (count = 0),
    cur = 1,
    temp = s[0]
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === temp) {
      cur++
    } else {
      count += Math.min(prev, cur)
      temp = s[i]
      prev = cur
      cur = 1
    }
  }
  return count
}

// case1 输入：'00110011' 预期：6
// [2, 2, 2, 2]
console.log(countBinarySubstrings('00110011'))

// case2 输入：'10101' 预期：4
console.log(countBinarySubstrings('10101'))
