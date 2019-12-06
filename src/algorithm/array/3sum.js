// title: 三数之和

// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 思路，此题采用双指针法
// https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length
  if (len < 3) return []
  let newArr = quickSort(nums, 0, len - 1),
    result = []
  if (newArr[0] > 0 || newArr[len - 1] < 0) return []
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && newArr[i] === newArr[i - 1]) continue
    let temp = newArr[i]
    let left = i + 1,
      right = len - 1
    while (left < right) {
      let total = newArr[left] + newArr[right] + temp
      if (total === 0) {
        result.push([temp, newArr[left], newArr[right]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (total < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return result
};

function quickSort(arr, left, right) {
  if (left > right) return
  let i = left,
    j = right,
    temp = arr[left]
  while (i < j) {
    while (i < j && arr[j] > temp) {
      j--
    }
    if (i < j) arr[i] = arr[j]
    while (i < j && arr[i] <= temp) {
      i++
    }
    if (i < j) arr[j] = arr[i]
  }
  arr[i] = temp
  quickSort(arr, left, i - 1)
  quickSort(arr, i + 1, right)
  return arr
}

// case1 输入：[-1, 0, 1, 2, -1, -4] 预期：[[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// case2 输入：'[] 预期：[]
console.log(threeSum([]))