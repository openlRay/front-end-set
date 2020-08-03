// title: 移动零

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 思路,双指针法，第一个指针寻找为0的数，第二个指针寻找不等于0的数
// 如果元素不为0，i,j跟着一起动。如果元素为零，i继续移动，j保持不动，此时j记录的正是为0的下标

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length
  if (len < 2) return nums
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
      j++
    }
  }
  return nums
}
// case1 输入：[0,1,0,3,12] 预期：[1,3,12,0,0]
console.log(moveZeroes([0, 1, 0, 3, 12]))

// case1 输入：[-1,2,-3,4,0,1,0,-2,0,0,1] 预期：[-1,2,-3,4,1,-2,1,0,0,0,0]
console.log(moveZeroes([-1, 2, -3, 4, 0, 1, 0, -2, 0, 0, 1]))
