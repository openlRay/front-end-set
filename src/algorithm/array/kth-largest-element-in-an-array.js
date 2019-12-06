// title: 数组中的第K个最大元素

// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:

// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let sortNums = quickSort(nums, 0, nums.length - 1)
  return sortNums[sortNums.length - k]
};

function quickSort(nums, left, right) {
  if (left > right) return
  let i = left,
    j = right,
    temp = nums[left]
  while (i < j) {
    while (i < j && nums[j] > temp) {
      j--
    }
    if (i < j) {
      nums[i] = nums[j]
    }
    while (i < j && nums[i] <= temp) {
      i++
    }
    if (i < j) {
      nums[j] = nums[i]
    }
  }
  nums[i] = temp
  quickSort(nums, left, i - 1)
  quickSort(nums, i + 1, right)
  return nums
}

// case1 输入：nums = [3,2,1,5,6,4], k = 2 预期：5
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

// case2 输入：nums = [3,2,3,1,2,4,5,5,6], k = 4 预期：4
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))