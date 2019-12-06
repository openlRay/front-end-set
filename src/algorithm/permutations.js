function permutations(nums) {
  if (nums.length < 2) return nums
  let result = []
  fun(nums, [], result)
  return result
}

function fun(remain, temp, result) {
  if (!remain.length) {
    result.push(temp)
    return
  }
  for (let i = 0; i < remain.length; i++) {
    let m = remain.slice(0, i).concat(remain.slice(i + 1))
    let t = [...temp, remain[i]]
    fun(m, t, result)
  }
}
console.log(permutations([1, 2, 3, 4, 5, 6, 7]))