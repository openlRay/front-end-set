/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode-cn.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 *
 * 示例 1:
 *
 *
 * 输入: "abab"
 *
 * 输出: True
 *
 * 解释: 可由子字符串 "ab" 重复两次构成。
 *
 *
 * 示例 2:
 *
 *
 * 输入: "aba"
 *
 * 输出: False
 *
 *
 * 示例 3:
 *
 *
 * 输入: "abcabcabcabc"
 *
 * 输出: True
 *
 * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (let i = 1; i <= s.length / 2; i++) {
    for (let j = i; j < s.length; j = j + i) {
      if (s.slice(0, i) !== s.slice(j, j + i)) break
      if (j + i === s.length && s.slice(0, i) === s.slice(j, j + i)) {
        return true
      }
    }
  }
  return false
}

var repeatedSubstringPattern = function(s) {
  let str = s + s
  return str.slice(1, str.length - 1).includes(s)
}

// case1 输入：'abab' 预期：true
console.log(repeatedSubstringPattern('abab'))

// case2 输入：'aba' 预期：false
console.log(repeatedSubstringPattern('aba'))

// case1 输入：'abcabcabcabc' 预期：true
console.log(repeatedSubstringPattern('abcabcabcabc'))

console.log(repeatedSubstringPattern('abcabc'))

// case1 输入：'abcabcabcabc' 预期：true
console.log(repeatedSubstringPattern('aa'))

// @lc code=end
