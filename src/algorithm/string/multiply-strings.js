// title: 字符串相乘

// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

// 从后往前而不是从前往后因为如果从前往后，那么后面计算出来的进位需要考虑之前所有的数字
// 思路，https://leetcode-cn.com/problems/multiply-strings/solution/c-shu-shi-cheng-fa-dai-ma-jian-ji-you-ya-yi-dong-b/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let l1 = num1.length,
    l2 = num2.length
  let arr = Array(l1 + l2).fill(0)
  for (let i = l1 - 1; i > -1; i--) {
    for (let j = l2 - 1; j > -1; j--) {
      let temp = +num1[i] * +num2[j]
      result1 = arr[i + j] + Math.floor(temp / 10)
      arr[i + j] = result1 % 10
      result1 >= 10 && arr[i + j - 1]++
      result2 = arr[i + j + 1] + temp % 10
      arr[i + j + 1] = result2 % 10
      result2 >= 10 && arr[i + j]++
    }
  }!arr[0] && arr.shift()
  return arr.join('')
};

// case1 输入：num1 = '778878', num2 = '182918298192' 预期：'142471038259188576'
// console.log(multiply('778878', '182918298192'))

// case2 输入：num1 = '2', num2 = '3' 预期：'6'
// console.log(multiply('2', '3'))

// case3 输入：num1 = '123', num2 = '456' 预期：'56088'
console.log(multiply('123', '456'))