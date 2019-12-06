// title: 合并区间

// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:

// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:

// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  let result = [],
    temp = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= temp[0] && intervals[i][0] <= temp[1]) {
      temp = [temp[0], intervals[i][1] > temp[1] ? intervals[i][1] : temp[1]]
    } else {
      result.push(temp)
      temp = intervals[i]
    }
  }
  result.push(temp)
  return result
};
// case1 输入：[[1,3],[8,10],[2,6],[15,18]]
//  预期：[[1,6],[8,10],[15,18]]
console.log(merge([
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18]
]))

// case2 输入：[[1,4],[4,5]]
//  预期：[[1,5]]
console.log(merge([
  [1, 4],
  [4, 5]
]))

// case3 输入：[[1,4],[0,2],[3,5]]
//  预期：[[0,5]]
console.log(merge([
  [1, 4],
  [0, 2],
  [3, 5]
]))

// case3 输入：[]
//  预期：[]
console.log(merge([]))