// title: 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let index = 0,
    max = ''
  while (true) {
    let cur = strs[0][index]
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i][index] || cur !== strs[i][index]) {
        // 如果当前字符串index下标处为空或者不等于cur，直接返回
        return max
      }
    }
    index++
    max = strs[0].slice(0, index)
  }
};

// case1 输入：["flower","flow","flight"] 预期："fl"
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// case2 输入：["dog","racecar","car"] 预期：""
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))

// case3 输入：["", ""] 预期：''
console.log(longestCommonPrefix(["", ""]))