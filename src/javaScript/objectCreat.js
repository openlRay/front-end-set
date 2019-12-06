function objectCreat(prototype) {
  let fn = function () {}
  fn.prototype = prototype
  return new fn()
}