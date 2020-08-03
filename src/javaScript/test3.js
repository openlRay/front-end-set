let isFunction = fn => typeof fn === 'function'

class MyPromise {
  constructor(handle) {
    this.status = 'pending'
    this.value = undefined
    this.successCb = []
    this.failCb = []
    try {
      handle(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value) {
    if (this.status !== 'pending') return
    let run = () => {
      if (value instanceof MyPromise) {
        value.then(
          v => {
            this.status = 'success'
            this.value = v
            let cb = null
            while ((cb = this.successCb.shift())) {
              cb(v)
            }
          },
          e => {
            this.status = 'fail'
            this.value = e
            let cb = null
            while ((cb = this.failCb.shift())) {
              cb(e)
            }
          }
        )
      } else {
        this.status = 'success'
        this.value = value
        let cb = null
        while ((cb = this.successCb.shift())) {
          cb(value)
        }
      }
    }
    setTimeout(run, 0)
  }
  reject(error) {
    if (this.status !== 'pending') return
    let run = () => {
      this.status = 'fail'
      this.value = error
      let cb = null
      while ((cb = this.failCb.shift())) {
        cb(error)
      }
    }
    setTimeout(run, 0)
  }
  then(_resolve, _reject) {
    let { status, value } = this
    return new MyPromise((_resolveNext, _rejectNext) => {
      let successFn = v => {
        try {
          if (!isFunction(_resolve)) {
            _resolveNext(v)
          } else {
            let result = _resolve(v)
            if (result instanceof MyPromise) {
              result.then(_resolveNext, _rejectNext)
            } else {
              _resolveNext(result)
            }
          }
        } catch (err) {
          _rejectNext(err)
        }
      }
      let failFn = e => {
        try {
          if (!isFunction(_reject)) {
            _rejectNext(e)
          } else {
            let result = _reject(e)
            if (result instanceof MyPromise) {
              result.then(_resolveNext, _rejectNext)
            } else {
              _rejectNext(result)
            }
          }
        } catch (err) {
          _rejectNext(err)
        }
      }
      switch (status) {
        case 'pending':
          this.successCb.push(successFn)
          this.failCb.push(failFn)
          break
        case 'success':
          this.successFn(value)
          break
        case 'fail':
          this.failFn(value)
          break
      }
    })
  }
}
// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 2000)
// })
//   .then(res => {
//     console.log(res)
//     return res + 1
//   })
//   .then(res => {
//     console.log(res)
//   })

//output

// delay 2s..
//  2
//  3

// let promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   // 返回一个普通值
//   return '这里返回一个普通值'
// })
// promise2.then(res => {
//   console.log(res) //1秒后打印出：这里返回一个普通值
// })

// let promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   // 返回一个Promise对象
//   return new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('这里返回一个Promise')
//     }, 2000)
//   })
// })
// promise2.then(res => {
//   console.log(res) //3秒后打印出：这里返回一个Promise
// })

// let promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   throw new Error('这里抛出一个异常e')
// })
// promise2.then(
//   res => {
//     console.log(res)
//   },
//   err => {
//     console.log(err) //1秒后打印出：这里抛出一个异常e
//   }
// )

// let promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是')
// promise2.then(
//   res => {
//     console.log(res) // 1秒后打印出：success
//   },
//   err => {
//     console.log(err)
//   }
// )

let promise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('fail')
  }, 1000)
})
promise2 = promise1.then(res => res, '这里的onRejected本来是一个函数，但现在不是')
promise2.then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err) // 1秒后打印出：fail
  }
)
