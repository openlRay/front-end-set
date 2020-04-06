function Parent() {
  this.name = 'kevin'
  this.names = ['kevin', 'daisy']
}

Parent.prototype.getName = function() {
  console.log(this.name)
}

function Child(...args) {
  Parent.apply(this, args)
}

Child.prototype = Object.create(Parent.prototype)
console.log(Child.prototype.constructor)
