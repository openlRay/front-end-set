// title: 搜索旋转排序数组

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    }
    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
};

// case1 输入：nums = [4,5,6,7,0,1,2], target = 0 预期：4
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0))

// case2 输入：nums = [4,5,6,7,0,1,2], target = 3 预期：-1
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3))

// case3 输入：nums = [1001,10001,10007,1,10,101,201], target = 10001 预期：1
// console.log(search([1001, 10001, 10007, 1, 10, 101, 201], 10001))

// case4 输入：nums = [4, 3], target = 3 预期：1
console.log(search([4, 3], 3))