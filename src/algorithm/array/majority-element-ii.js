// title: 求众数 II

// 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

// 示例 1:

// 输入: [3,2,3]
// 输出: [3]
// 示例 2:

// 输入: [1,1,1,3,3,2,2,2]
// 输出: [1,2]

// 思路，摩尔投票法思路

// 做这个题之前可以先看一下169题，投票算法，169题，找一个众数，那就只要一个候选，他是保证一定有一个是众数的，直接投票就好
// 但是这个题没有保证有一个元素一定出现 n/3以上。

// 首先我们得明确，n/k的众数最多只有k-1个，为什么呢？假设有k个众数，n/k * k=n,这k个元素都是众数，还要不同，怎么可能啊。那么对于这个题，超过n/3的数最多只能有3-1 = 2 个，我们可以先选出两个候选人A,B。 遍历数组，分三种情况：

// 候选1：> n/3
// 候选2：> n/3
// 其他：< n/3
// 写代码三步走
// 1、如果投A（当前元素等于A），则A的票数++;
// 2、如果投B（当前元素等于B），B的票数++；
// 3、如果A,B都不投（即当前与A，B都不相等）,那么检查此时A或B的票数是否减为0，如果为0,则当前元素成为新的候选人；如果A,B两个人的票数都不为0，那么A,B两个候选人的票数均减一。

// 最后会有这么几种可能：有2个大于n/3，有1个大于n/3，有0个大于n/3
// 遍历结束后选出了两个候选人，但是这两个候选人是否满足>n/3，还需要再遍历一遍数组，找出两个候选人的具体票数

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const len = nums.length
  let element1 = nums[0],
    count1 = 0,
    element2 = nums[0],
    count2 = 0
  for (let i = 0; i < len; i++) {
    if (element1 === nums[i]) {
      count1++
      continue
    }
    if (element2 === nums[i]) {
      count2++
      continue
    }
    if (!count1) {
      element1 = nums[i]
      count1++
      continue
    }
    if (!count2) {
      element2 = nums[i]
      count2++
      continue
    }
    count1--
    count2--
  }
  count1 = count2 = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === element1) {
      count1++
    } else if (nums[i] === element2) {
      count2++
    }
  }
  let arr = []
  if (count1 > len / 3) {
    arr.push(element1)
  }
  if (count2 > len / 3) {
    arr.push(element2)
  }
  return arr
}

// case1 输入：[3,2,3] 预期：[3]
console.log(majorityElement([3, 2, 3]))

// case2 输入：[1,1,1,3,3,2,2,2] 预期：[1,2]
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))
