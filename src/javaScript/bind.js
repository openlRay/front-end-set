Function.prototype.myBind = function (context, ...args) {
  const self = this
  const fn = function (...params) {
    return self.apply(this instanceof fn ? this : context, [...args, ...params])
  }
  fn.prototype = Object.create(self.prototype)
  return fn
}
var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin