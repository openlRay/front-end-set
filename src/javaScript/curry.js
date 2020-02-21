function add(...args) {
  let paramsAll = args
  const fn = function(...params) {
    paramsAll = paramsAll.concat(params)
    return fn
  }
  fn.toString = function() {
    return paramsAll.reduce((prev, next) => {
      return prev + next
    })
  }
  fn.valueOf = function() {
    return paramsAll.reduce((prev, next) => {
      return prev + next
    })
  }
  return fn
}

function curry(fn, ...args) {
  let paramsAll = args
  const tempFn = function(...params) {
    paramsAll = paramsAll.concat(params)
    if (paramsAll.length < fn.length) {
      return curry.call(this, fn, ...paramsAll)
    } else {
      return fn.apply(this, paramsAll)
    }
  }
  return tempFn
}

function add(a, b) {
  return a + b
}
var addcurry = curry(add)
console.log(addcurry(1)(2))
// console.log(add(1, 2, 3)(4) == 10)
