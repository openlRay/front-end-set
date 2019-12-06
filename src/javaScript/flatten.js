function flatter(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flatter(next) : next)
  }, [])
}
console.log(flatter([1, [2, [3]]]))