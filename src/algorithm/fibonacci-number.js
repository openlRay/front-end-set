/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N < 2) return N
  let i = 0,
    j = 1,
    sum = 0
  while (N > 1) {
    sum = i + j
    i = j
    j = sum
    N--
  }
  return sum
};
console.log(fib(0))
// 0, 1, 1, 2, 3, 5, 8, 13