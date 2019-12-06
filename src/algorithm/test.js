var checkInclusion = function (s1, s2) {
  let arr = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    arr[s1[i].charCodeAt() - 97]++
    arr[s2[i].charCodeAt() - 97]--
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (arr.every(j => !j)) return true
    arr[s2[i - s1.length].charCodeAt() - 97]++
    arr[s2[i].charCodeAt() - 97]--
  }
  return arr.every(j => !j)
}
console.log(checkInclusion("abc", "eidbacooo"))