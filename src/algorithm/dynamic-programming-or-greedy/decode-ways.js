// title: 解码方法
// https://leetcode-cn.com/problems/decode-ways/

// 一条包含字母 A-Z 的消息通过以下方式进行了编码：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 给定一个只包含数字的非空字符串，请计算解码方法的总数。

// 示例 1:

// 输入: "12"
// 输出: 2
// 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
// 示例 2:

// 输入: "226"
// 输出: 3
// 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

// 思路：动态规划思路，此题case较多

// 解法一
// 定义dp[i]是nums前i个字符可以得到的解码种数，假设之前的字符串是abcx，现在新加入了y，则有以下5种情况：

// 如果x=='0'，且y=='0'，无法解码，返回0；
// 如果只有x=='0'，则y只能单独放在最后，不能与x合并(不能以0开头)，此时有：
// dp[i] = dp[i-1]
// 如果只有y=='0'，则y不能单独放置，必须与x合并，并且如果合并结果大于26，返回0，否则有：
// dp[i] = dp[i-2]
// 如果 xy<=26: 则y可以“单独”放在abcx的每个解码结果之后后，并且如果abcx以x单独结尾，此时可以合并xy作为结尾，而这种解码种数就是abc的解码结果，此时有：
// dp[i] = dp[i-1] + dp[i-2]
// 如果 xy>26: 此时x又不能与y合并，y只能单独放在dp[i]的每一种情况的最后，此时有：
// dp[i] = dp[i-1]

// 解法二
// 本题利用动态规划比较容易解决，但需要注意分情况讨论：
// 若 s[i] = '0'，那么若 s[i-1] = '1' or '2'，则 dp[i] = dp[i-2];否则 return 0
//   解释：s[i-1]+s[i]唯一被译码，不増加情况
// 若 s[i-1] = '1'，则 dp[i] = dp[i-1] + dp[i-2]
//   解释：s[i-1]与s[i]分开译码，为dp[i-1];合并译码，为dp[i-2]
// 若s[i-1]='2' and，1<=s[i]<=6，则 dp[i] = dp[i-1] + dp[i-2]
//   解釋：同上
// s[i-1]为0,3-9（此时已排除s[i]==0的情况），dp[i]=dp[i-1]。代码中cur相当于dp[i-1],所以直接省略了一个else语句
// 由分析可知，dp[i]仅可能与前两项有关，故可以用单变量代替dp[]数组，将空间复杂度从O(n)降到O(1)

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = [],
    len = s.length
  if (!len) return 0
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      if (s[i] === '0') return 0
      dp[i] = 1
    } else if (i === 1) {
      let str = s.slice(i - 1, i + 1)
      if (+str <= 26) {
        dp[i] = str[1] === '0' ? 1 : 2
      } else {
        if (str[1] === '0') return 0
        dp[i] = 1
      }
    } else {
      let x = +s[i - 1],
        y = +s[i],
        xy = x * 10 + y
      if (!x && !y) {
        return 0
      } else if (!x) {
        dp[i] = dp[i - 1]
      } else if (!y) {
        if (xy > 26) return 0
        dp[i] = dp[i - 2]
      } else if (xy <= 26) {
        dp[i] = dp[i - 1] + dp[i - 2]
      } else {
        dp[i] = dp[i - 1]
      }
    }
  }
  return dp[len - 1]
}

var numDecodings = function(s) {
  const len = s.length
  if (!len || s[0] === '0') return 0
  let prev = 1,
    cur = 1
  for (let i = 1; i < len; i++) {
    const temp = cur
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        cur = prev
      } else {
        return 0
      }
    } else if (s[i - 1] === '1' || (s[i - 1] === '2' && +s[i] >= 1 && +s[i] <= 6)) {
      cur = cur + prev
    }
    prev = temp
  }
  return cur
}

// case1 输入：'12' 预期：2
console.log(numDecodings('12'))

// case2 输入：'226' 预期：3
console.log(numDecodings('226'))
console.log(numDecodings('12356'))
