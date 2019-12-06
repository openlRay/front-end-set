/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length
  if (!len) return -1
  let temp = -1
  for (let i = 0; i < len; i++) {
    if (nums[i] < nums[i + 1]) continue
    temp = i
    break
  }
  debugger
  if (temp === len - 1 || target >= nums[len - 1]) {
    return binanySearch(nums, 0, temp, target)
  } else {
    return binanySearch(nums, temp + 1, len - 1, target)
  }
};

function binanySearch(nums, left, right, target) {
  if (left > right) return -1
  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] > target) {
    return binanySearch(nums, left, mid - 1, target)
  } else {
    return binanySearch(nums, mid + 1, right, target)
  }
}
console.log(search([3, 1], 1))