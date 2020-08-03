// title: 最短无序连续子数组
// https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/

// 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 你找到的子数组应是最短的，请输出它的长度。

// 示例 1:

// 输入: [2, 6, 4, 8, 10, 9, 15]
// 输出: 5
// 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 说明 :

// 输入的数组长度范围在 [1, 10,000]。
// 输入的数组可能包含重复元素 ，所以升序的意思是<=。

// 思路:
// 第一次遍历：
// 从前向后遍历，使用max_num，保存到当前位置为止的最大值，若下个数大于等于max_num，则更新max_num。否则，更新需要排序数组的右界right。

// 初始化right=0，max_num=nums[0]
// 遍历数组，遍历区间[0,n)：
// 若nums[i]>=max_num，更新max_num=nums[i]
// 否则，更新右界right=i
// 第二次简历：
// 从后向前遍历，使用min_num，保存到当前位置为止的最小值，若下个数小于等于min_num，则更新min_num。否则，更新需要排序数组的左界left。

// 初始化left=n，min_num=nums[−1]
// 遍历数组，遍历区间(n,0]：
// 若nums[i]<=min_num，更新min_num=nums[i]
// 否则，更新左界right=i
// 若right-left+1>0，返回right-left+1，否则，返回0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let len = nums.length
  let distance = 0
  let leftMax = nums[0],
    left = len - 1,
    rightMin = nums[len - 1],
    right = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] >= leftMax) {
      leftMax = nums[i]
    } else {
      right = i
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] <= rightMin) {
      rightMin = nums[i]
    } else {
      left = i
    }
  }
  console.log(right, left)
  distance = right - left ? right - left + 1 : 0
  return distance > 0 ? distance : 0
}

// case1 输入：[2, 6, 4, 8, 10, 9, 15] 预期：5
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))

// case1 输入：[2,1] 预期：2
console.log(findUnsortedSubarray([2, 1]))

// case1 输入：[1] 预期：0
console.log(findUnsortedSubarray([1]))
