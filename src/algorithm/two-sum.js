/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(target - nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined && i !== map.get(nums[i])) {
      return [i, map.get(nums[i])]
    }
  }
  return []
};
console.log(twoSum([3, 2, 4], 6))