// 定义Promise的三种状态常量
function isFunction(fn) {
  return typeof fn === 'function'
}
class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    this.status = 'pending'
    this.value = undefined
    this.failCb = []
    this.successCb = []
    this.handle(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve() {
    const run = (data) => {
      if (this.status !== 'pending') {
        return
      }
      this.status = 'success'
      this.value = data
      let temp = undefined
      while (temp = this.successCb.shift()) {
        temp(this.value)
      }
    }
    setTimeout(run, 0)
  }
  reject() {
    const run = (data) => {
      if (this.status !== 'pending') {
        return
      }
      this.status = 'fail'
      this.value = data
      let temp = undefined
      while (temp = this.failCb.shift()) {
        temp(this.value)
      }
    }
    setTimeout(run, 0)
  }
}

MyPromise.prototype.then = function (_resolve, _reject) {
  return new MyPromise(_resolveNext, _rejectNext)
}