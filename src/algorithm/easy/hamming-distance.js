// title: 汉明距离
// https://leetcode-cn.com/problems/hamming-distance/

// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// 注意：
// 0 ≤ x, y < 231.

// 示例:

// 输入: x = 1, y = 4

// 输出: 2

// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// 思路:
// 布赖恩·克尼根位计数算法的基本思想。该算法使用特定比特位和算术运算移除等于 1 的最右比特位。
// 当我们在 number 和 number-1 上做 AND 位运算时，原数字 number 的最右边等于 1 的比特会被移除。
// 以此算法我们可以知道number转换成二进制后有多少个1
// 在此题中，我们通过将a,b进行异或处理，（相同为0，不同为1）,此题即转换为求异或后的数字中1的个数

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let num = x ^ y,
    count = 0
  while (num) {
    num = num & (num - 1)
    count++
  }
  return count
}

// case1 输入：1, 4 预期：2
console.log(hammingDistance(1, 4))
