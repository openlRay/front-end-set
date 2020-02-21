let isFunction = fn => typeof fn === 'function'
class MyPromise {
  constructor(handle) {
    if (isFunction(handle)) return false
    this.status = 'pending'
    this.value = undefined
    this.successCb = []
    this.failCb = []
    handle(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(val) {
    let runSuccess = v => {
      this.status = 'success'
      this.value = v
      this.successCb.forEach(i => i(v))
    }
    let runFail = e => {
      this.status = 'fail'
      this.value = e
      this.failCb.forEach(i => i(e))
    }
    let run = () => {
      if (this.status !== 'pending') return
      if (val instanceof MyPromise) {
        val.then(
          v => {
            runSuccess(v)
          },
          e => {
            runFail(e)
          }
        )
      } else {
        runSuccess(val)
      }
    }
    setTimeout(run, 0)
  }
  reject(err) {
    let run = () => {
      if (this.status !== 'pending') return
      this.status = 'fail'
      this.value = err
      this.failCb.forEach(i => i(err))
    }
    setTimeout(run, 0)
  }
}

MyPromise.prototype.then = function(_resolve, _reject) {
  let { status, value } = this
  return new MyPromise(function(_resolveNext, _rejectNext) {
    let successFun = val => {
      try {
        if (!isFunction(_resolve)) {
          _resolveNext(val)
        } else {
          let result = _resolve(val)
          if (result instanceof MyPromise) {
            result.then(_resolveNext, _rejectNext)
          } else {
            _resolveNext(result)
          }
        }
      } catch (error) {
        _reject(error)
      }
    }
    let failFun = err => {
      try {
        if (!isFunction(_reject)) {
          _rejectNext(val)
        } else {
          let result = _rejectNext(val)
          if (result instanceof MyPromise) {
            result.then(_resolveNext, _rejectNext)
          } else {
            _resolveNext(result)
          }
        }
      } catch (error) {
        _reject(error)
      }
    }
    switch (this.status) {
      case 'pending':
        this.successCb.push(successFun)
        this.failFun.push(failFun)
        break
      case 'success':
        successFun(value)
        break
      case 'fail':
        failFun(value)
        break
    }
  })
}
