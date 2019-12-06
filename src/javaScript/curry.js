let curry = fn =>
  (temp = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (...params) => temp(...args, ...params))
function sum(a, b, c) {
  return a + b + c
}
let fn = curry(sum)
console.log(fn(1)(2)(3))
