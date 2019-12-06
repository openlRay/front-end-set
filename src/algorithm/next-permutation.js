var nextPermutation = function (nums) {
  let len = nums.length
  if (len < 2) return []
  let desc = -1,
    s = -1
  for (let i = len - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      desc = i - 1
      break
    }
  }
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[desc] && i > desc) {
      s = i
      break
    }
  }
  if (desc > -1 && s > -1) {
    [nums[s], nums[desc]] = [nums[desc], nums[s]]
    return swap(nums, desc + 1, len - 1)
  }
  return swap(nums, 0, len - 1)
}

function swap(nums, left, right) {
  if (left === right) return nums
  for (let i = left, j = right; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}
console.log(nextPermutation([1, 3, 5, 8, 4, 7, 6, 5, 3, 1]))