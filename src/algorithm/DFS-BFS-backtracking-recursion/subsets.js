/*
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (77.77%)
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  let result = [[]]
  for (let i = 0; i < nums.length; i++) {
    let len = result.length
    for (let j = 0; j < len; j++) {
      result.push([...result[j], nums[i]])
    }
  }
  return result
}

var subsets = function(nums) {
  let result = [],
    len = nums.length
  function recur(start, temp) {
    result.push(temp)
    for (let i = start; i < len; i++) {
      recur(i + 1, [...temp, nums[i]])
    }
  }
  recur(0, [])
  return result
}
// case1 输入：[1,2,3] 预期：[ [], [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
console.log(subsets([1, 2, 3]))

// case1 输入：[] 预期：[]
console.log(subsets([]))
