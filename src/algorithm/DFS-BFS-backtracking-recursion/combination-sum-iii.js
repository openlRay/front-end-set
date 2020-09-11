/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let ans = []
  function recur(start, remain, result) {
    if ( result.length === k) {
      if (remain === 0) {
        ans.push(result)
      }
      return
    }
    for(let i = start; i < 9; i++) {
      let temp = remain - (i + 1)
      if (temp < 0) break
      recur(i + 1, temp, [...result, i + 1])
    }
  }
  recur(0, n, [])
  return ans
};

// case1 输入：k = 3, n = 7 预期：[ [ 1, 2, 4 ] ]
console.log(combinationSum3(3, 7))

// case2 输入：k = 3, n = 9 预期：[ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]
console.log(combinationSum3(3, 9))
// @lc code=end

