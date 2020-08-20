/*
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (60.70%)
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let sortNums = nums.sort((a, b) => a - b)
  let result = [[]],
    start = 0
  for (let i = 0; i < sortNums.length; i++) {
    let len = result.length
    if (sortNums[i] === sortNums[i - 1]) {
      start = len - 2
    }
    for (let j = start; j < len; j++) {
      result.push([...result[j], sortNums[i]])
    }
  }
  return result
}

// case1 输入：[1, 2, 2] 预期：[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 2, 2 ], [ 1, 2, 2 ] ]
console.log(subsetsWithDup([1, 2, 2]))

// case2 输入：[4, 4, 4, 1, 4] 预期：[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 2, 2 ], [ 1, 2, 2 ] ]
console.log(subsetsWithDup([4, 4, 4, 1, 4]))
