// title: 最长连续序列

// 给定一个未排序的整数数组，找出最长连续序列的长度。

// 要求算法的时间复杂度为 O(n)。

// 示例:

// 输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 思路，将数字用一个 Set保存，实现 O(1)时间的查询，同时，我们只对当前数字 - 1 不在哈希表里的数字，
// 作为连续序列的第一个数字去找对应的最长序列，这是因为其他数字一定已经出现在了某个序列里

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length < 2) return nums.length
  let set = new Set(nums)
  let max = 0
  for (let i of set.keys()) {
    if (!set.has(i - 1)) {
      let temp = 1,
        cur = i
      while (set.has(cur + 1)) {
        temp++
        cur++
      }
      max = Math.max(max, temp)
    }
  }
  return max
};

// case1 输入：nums = [100, 4, 200, 1, 3, 2] 预期：4
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// case2 输入：nums = [1,2,0,1] 预期：3
console.log(longestConsecutive([1, 2, 0, 1]))