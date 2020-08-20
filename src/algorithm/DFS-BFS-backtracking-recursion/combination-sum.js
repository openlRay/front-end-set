// title: 组合总和
// https://leetcode-cn.com/problems/combination-sum/

// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。
// 示例 1:

// 输入: candidates = [2,3,6,7], target = 7,
// 所求解集为:
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2:

// 输入: candidates = [2,3,5], target = 8,
// 所求解集为:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// 思路：
// 去重复
// 在搜索的时候，需要设置搜索起点的下标 begin ，由于一个数可以使用多次，下一层的结点从这个搜索起点开始搜索；
// 在搜索起点 begin 之前的数因为以前的分支搜索过了，所以一定会产生重复。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = []
  function recur(remain, target, tempArr, result, start) {
    if (!target) {
      result.push(tempArr)
      return
    }
    for (let i = start; i < remain.length; i++) {
      if (target - remain[i] < 0) continue
      let temp = [...tempArr, remain[i]]
      recur(remain, target - remain[i], temp, result, i)
    }
  }
  recur(candidates, target, [], result, 0)
  return result
}

// case1 输入：candidates = [2,3,6,7], target = 7 预期：[ [ 2, 2, 3 ], [ 7 ] ]
console.log(combinationSum([2, 3, 6, 7], 7))

// case2 输入：candidates = [2, 3, 5], target = 8 预期：[ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]
console.log(combinationSum([2, 3, 5], 8))

// case3 输入：candidates = [8, 7, 4, 3], target = 11 预期：[ [ 8, 3 ], [ 7, 4 ], [ 4, 4, 3 ] ]
console.log(combinationSum([8, 7, 4, 3], 11))
