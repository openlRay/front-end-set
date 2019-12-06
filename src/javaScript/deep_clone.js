function judge(args, type) {
  switch (type) {
    case 'object':
      return Object.prototype.toString.call(args) === '[object Object]'
    case 'array':
      return Object.prototype.toString.call(args) === '[object Array]'
    case 'number':
      return Object.prototype.toString.call(args) === '[object Number]'
    case 'function':
      return Object.prototype.toString.call(args) === '[object Function]'
  }
}

function deepClone(data) {
  if (!judge(data, 'object') && !judge(data, 'array') && !judge(data, 'function')) {
    return data
  }
  let obj = {}
  if (judge(data, 'object')) {
    for (let i in data) {
      obj[i] = deepClone(data[i])
    }
    return obj
  }
  if (judge(data, 'array')) {
    return data.map(i => {
      return deepClone(i)
    })
  }
  if (judge(data, 'function')) {
    console.log(123)
    let fn = function () {}
    if (data.prototype) {
      fn.prototype = Object.create(data.prototype)
    }
    data.apply(fn)
    return fn
  }
}
const oldObj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: {
    h: {
      i: 5
    }
  },
  d: () => {
    console.log('函数')
  },
  e: null
}
oldObj.e = oldObj
const newObj = deepClone(oldObj)
console.log(newObj)
console.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }
newObj.d()