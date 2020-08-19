// title: 剑指 Offer 61. 扑克牌中的顺子
// https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/

// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

//

// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True
//

// 示例 2:

// 输入: [0,0,1,2,5]
// 输出: True
//

// 限制：

// 数组长度为 5

// 数组的数取值为 [0, 13] .

// 思路:
// 排序 + 遍历
// 先对数组执行排序。
// 判别重复： 排序数组中的相同元素位置相邻，因此可通过遍历数组，判断 nums[i] = nums[i+1] 是否成立来判重。
// 获取最大 / 最小的牌： 排序后，数组末位元素 nums[4] 为最大牌；元素 nums[joker] 为最小牌，其中 joker 为大小王的数量。
// 复杂度分析：
// 时间复杂度 O(NlogN) = O(5log5) = O(1) ： 其中 N 为 nums 长度，本题中 N = 5 ；数组排序使用 O(NlogN) 时间。
// 空间复杂度 O(1) ： 变量 joker 使用 O(1) 大小的额外空间。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  let sortNums = nums.sort((a, b) => a - b)
  let zeroCount = 0
  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] === 0) {
      zeroCount++
    } else {
      if (sortNums[i] === sortNums[i + 1]) return false
    }
  }
  return sortNums[4] - sortNums[zeroCount] < 5
}
// case1 输入：[1,2,3,4,5] 预期：true
console.log(isStraight([1, 2, 3, 4, 5]))

// case2 输入：[0,0,1,2,5] 预期：true
console.log(isStraight([0, 0, 1, 2, 5]))
