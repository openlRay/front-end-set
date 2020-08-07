// title: 乘积最大子数组
// https://leetcode-cn.com/problems/maximum-product-subarray/

// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

//

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

// 思路，动态规划

// 思路： 求最大值，可以看成求被0拆分的各个子数组的最大值。
// 当一个数组中没有0存在，则分为两种情况：
// 1.负数为偶数个，则整个数组的各个值相乘为最大值；
// 2.负数为奇数个，则从左边开始，乘到最后一个负数停止有一个“最大值”，从右边也有一个“最大值”，比较，得出最大值。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0],
    product = 1
  for (let i = 0; i < nums.length - 1; i++) {
    product *= nums[i]
    max = Math.max(max, product)
    nums[i] === 0 && (product = 1)
  }
  product = 1
  for (let i = nums.length - 1; i > -1; i--) {
    product *= nums[i]
    max = Math.max(max, product)
    nums[i] === 0 && (product = 1)
  }
  return max
}
// case1 输入：[2,3,-2,4] 预期：6
console.log(maxProduct([2, 3, -2, 4]))

// case2 输入：[-2,0,-1] 预期：0
console.log(maxProduct([-2, 0, -1]))
