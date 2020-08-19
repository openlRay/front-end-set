// title: 回文子串
// https://leetcode-cn.com/problems/palindromic-substrings/

// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

//

// 示例 1：

// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
//

// 提示：

// 输入的字符串长度不会超过 1000 。

// 思路：

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        count++
      }
    }
  }
  return count
}
function isPalindrome(s) {
  if (s.length === 1) return true
  if (s.length === 2) {
    return s[0] === s[1]
  }
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
var countSubstrings = function(s) {
  if (!s.length) return 0
  let count = 1
  for (let i = 0; i < s.length - 1; i++) {
    count++
    let left = i - 1, right1 = i + 1, right2 = i + 2
    if (s[i] == s[i + 1]) {
      count++
    } else {
      right2 = s.length
    }
    while ((left >= 0 && right1 < s.length) || (left >= 0 && right2 < s.length)) {
      if (s[left] === s[right1]) {
        count++
      } else { // 如果有一个不相等，后面就没必要比下去
        right1 = s.length
      }
      if (s[left] === s[right2]) {
        count++
      } else {
        right2 = s.length
      }
      left--
      right1++
      right2++
    }
  }
  return count
}

// case1 输入：abc 预期：3
console.log(countSubstrings('abc'))

// case2 输入：aaa 预期：6
console.log(countSubstrings('aaa'))

// case3 输入：'' 预期：0
console.log(countSubstrings(''))

// case3 输入：'dfdffdsafas' 预期：17
console.log(countSubstrings('dfdffdsafas'))
