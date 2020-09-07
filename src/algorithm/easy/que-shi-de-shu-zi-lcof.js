// title: 剑指 Offer 53 - II. 0～n-1中缺失的数字
// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

//

// 示例 1:

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8
//

// 限制：

// 1 <= 数组长度 <= 10000

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let i = 0,
    j = nums.length - 1
  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] === mid) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}

// case1 输入：[0,1,3] 预期：2
console.log(missingNumber([0, 1, 3]))

// case2 输入：[0,1,2,3,4,5,6,7,9] 预期：8
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))

// case3 输入：[1] 预期：0
console.log(missingNumber([1]))
