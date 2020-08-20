/*
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (59.62%)
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//   const result = [],
//     sortNums = nums.sort((a, b) => a - b)
//   recur(sortNums, result, [])
//   return result
// }
// function recur(nums, result, tempArr) {
//   if (!nums.length) {
//     result.push(tempArr)
//     return
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue
//     let temp = [...tempArr, nums[i]],
//       remain = [...nums.slice(0, i), ...nums.slice(i + 1)]
//     recur(remain, result, temp)
//   }
// }

var permuteUnique = function(nums) {
  const result = [],
    sortNums = nums.sort((a, b) => a - b),
    used = new Array(nums.length).fill(false)
  recur(sortNums, result, [], used)
  return result
}
function recur(nums, result, tempArr, used) {
  if (tempArr.length === nums.length) {
    result.push(tempArr)
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
    let temp = [...tempArr, nums[i]]
    used[i] = true
    recur(nums, result, temp, used)
    used[i] = false
  }
}

// case1 输入：[1,1,2] 预期：[ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]
console.log(permuteUnique([1, 2, 1]))

// case2 输入：[1, 1, 1] 预期：[1, 1, 1]
console.log(permuteUnique([1, 1, 1]))

// case3 输入：[1, 2, 3] 预期：[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permuteUnique([1, 2, 3]))
