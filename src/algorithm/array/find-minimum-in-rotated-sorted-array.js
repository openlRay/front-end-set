// title: 寻找旋转排序数组中的最小值
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 你可以假设数组中不存在重复元素。

// 示例 1:

// 输入: [3,4,5,1,2]
// 输出: 1
// 示例 2:

// 输入: [4,5,6,7,0,1,2]
// 输出: 0

// 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums.length) return
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
  return nums[0]
}

var findMin = function(nums) {
  if (!nums.length) return
  let len = nums.length,
    left = 0,
    right = len - 1,
    mid = Math.floor((left + right) / 2)
  if (nums[left] <= nums[right]) return nums[0]
  while (nums[mid] < nums[mid + 1] && nums[mid] > nums[mid - 1]) {
    if (nums[mid] > nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    mid = Math.floor((left + right) / 2)
  }
  if (nums[mid] > nums[mid + 1]) {
    return nums[mid + 1]
  }
  if (nums[mid] < nums[mid - 1]) {
    return nums[mid]
  }
}

var findMin = function(nums) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] <= nums[right]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[left]
}

// case1 输入：[3,4,5,1,2] 预期：1
console.log(findMin([3, 4, 5, 1, 2]))

// case2 输入：[4,5,6,7,0,1,2] 预期：0

console.log(findMin([4, 5, 6, 7, 0, 1, 2]))

console.log(findMin([6, 1, 2, 3, 4, 5]))
