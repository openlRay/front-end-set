/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 *
 * https://leetcode-cn.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (68.46%)
 * Likes:    122
 * Dislikes: 0
 * Total Accepted:    21.1K
 * Total Submissions: 29.6K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3
 * 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["bella","label","roller"]
 * 输出：["e","l","l"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["cool","lock","cook"]
 * 输出：["c","o"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 100
 * 1 <= A[i].length <= 100
 * A[i][j] 是小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let hash = generateHash(A[0]), ans = []
  let i = 1
  while(i < A.length) {
    hash = compare(hash, generateHash(A[i]))
    i++
  }
  Object.keys(hash).forEach(el => {
    ans = ans.concat(new Array(hash[el]).fill(el))
  })
  return ans
};

function compare(a, b) {
  for(let i in a) {
    let v = Math.min(a[i], b[i] || 0)
    if (v) {
      a[i] = v
    } else {
      delete a[i]
    }
  }
  return a
}

function generateHash(a) {
  let obj = {}
  for(let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      obj[a[i]] = obj[a[i]] + 1
    } else {
      obj[a[i]] = 1
    }
  }
  return obj
}

console.log(commonChars(["cool"]))

// @lc code=end

