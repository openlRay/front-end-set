// title: 一次编辑
// https://leetcode-cn.com/problems/one-away-lcci

// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

//

// 示例 1:

// 输入:
// first = "pale"
// second = "ple"
// 输出: True
//

// 示例 2:

// 输入:
// first = "pales"
// second = "pal"
// 输出: False

// 思路
// 分四种情况
// 1、字符串长度之差>1 说明一定不可能一次性完成 return false
// 2、first.length !== second.length 长度不一致，我们选择比较长的那个字符串，不一致的那个字符
// 此处需要注意我们跳过不能使用++，这样会导致无法判断下一个，应该是类似长的字符串删除一个，然后在原位置再比一次
// 3、first.length === second.length 替换操作 直接对比数个数

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  let firstLength = first.length,
    secondLength = second.length
  if (!firstLength && !secondLength) return true
  if (Math.abs(firstLength - secondLength) > 1) return false
  let flag = 0
  for (let i = 0, j = 0; i < firstLength; i++, j++) {
    if (first[i] === second[j]) {
      continue
    } else {
      flag++
      if (flag > 1) return false
      if (flag === 1 && firstLength != secondLength) {
        if (firstLength > secondLength) {
          j--
        } else {
          i--
        }
      }
    }
  }
  return true
}

// case1 输入：'islander', 'slander' 预期：true
console.log(oneEditAway('islander', 'slander')) // true
// case1 输入：'teacher', 'bleacher' 预期：false
console.log(oneEditAway('teacher', 'bleacher')) // false
// case1 输入：'teacher', 'beacher' 预期：true
console.log(oneEditAway('teacher', 'beacher')) // true
// case1 输入：'pale', 'ple' 预期：true
console.log(oneEditAway('pale', 'ple')) // true
// case1 输入：'pales', 'ple' 预期：false
console.log(oneEditAway('pales', 'ple')) // false
