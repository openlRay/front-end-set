function bind(context, args) {
  let self = this
  let fn = function(params) {
    return self.apply(this instanceof fn ? this : context, [...args, ...params])
  }
  fn.prototype = Object.create(self)
  return fn
}
