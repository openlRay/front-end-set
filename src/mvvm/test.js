function fn(nums) {
  let dp = [1]
  for (let i = 1; i < nums.length; i++) {
    let max = []
    for (let j = 0; j < i; j++) {
      max.push(nums[i] > nums[j] ? dp[j] + 1 : 1)
    }
    dp[i] = Math.max.apply(null, max)
  }
  return Math.max.apply(null, dp)
}
console.log(fn([10, 9, 2, 5, 3, 7, 101, 18]))