// title: 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let len = s.length
//   if (len < 2) return len
//   let map = new Map()
//   let left = right = 0
//   let max = 0
//   for (let i = 0; i < len; i++) {
//     if (!map.has(s[i]) || map.get(s[i]) < left) {
//       // 如果当前字符没有出现过或者已经出现过但是在left之前出现则加入
//       // 在left之前出现过说明不在新的最长的字符串中间，所以可以加入
//       map.set(s[i], i)
//       max = Math.max(max, right - left + 1)
//       right++
//     } else {
//       left = map.get(s[i]) + 1
//       map.set(s[i], i)
//       right++
//     }
//   }
//   return max
// };

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  let map = new Map(),
    left = 0,
    max = 0
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined || map.get(s[i]) < left) {
      map.set(s[i], i)
    } else {
      left = map.get(s[i]) + 1
      map.set(s[i], i)
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}

// case1 输入："bbbbb" 预期：1
console.log(lengthOfLongestSubstring("bbbbb"))

// case2 输入："" 预期：0
console.log(lengthOfLongestSubstring(""))

// case3 输入："au" 预期：2
console.log(lengthOfLongestSubstring("au"))

// case4 输入："tmmzuxt" 预期：5
console.log(lengthOfLongestSubstring("tmmzuxt"))

// case5 输入："bpfbhmipx" 预期：7
console.log(lengthOfLongestSubstring("bpfbhmipx"))