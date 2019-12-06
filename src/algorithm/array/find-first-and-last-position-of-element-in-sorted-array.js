// title: 在排序数组中查找元素的第一个和最后一个位置

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = right = -1
  let targetIndex = binarySearch(nums, 0, nums.length - 1, target)
  if (targetIndex === -1) {
    return [left, right]
  } else {
    left = right = targetIndex
    for (let i = targetIndex - 1; i > -1; i--) {
      if (nums[i] === target) left--
    }
    for (let i = targetIndex + 1; i < nums.length; i++) {
      if (nums[i] === target) right++
    }
    return [left, right]
  }
};

// 二分查找
function binarySearch(nums, left, right, target) {
  if (left > right) return -1
  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] > target) {
    return binarySearch(nums, left, mid - 1, target)
  } else {
    return binarySearch(nums, mid + 1, right, target)
  }
}

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))

// 输入: nums = [1], target = 1
// 输出: [0,0]
console.log(searchRange([1], 1))