/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 *
 * 示例:
 *
 *
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 *
 * 说明:
 *
 *
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = []
  function recur(temp, last, start) {
    if (temp.length >= 2) ans.push(temp)
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === last) continue
      if (temp[temp.length - 1] <= nums[i] || temp.length === 0) {
        last = nums[i]
        recur([...temp, nums[i]], nums[i], i + 1)
      }
    }
  }
  recur([], Number.MIN_VALUE, 0)
  return ans
}

// case1 输入：[4, 6, 7, 7] 预期：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(findSubsequences([4, 6, 7, 7])) // @lc code=end

console.log(findSubsequences([4, 3, 8, 2, 8, 9, 6]))
