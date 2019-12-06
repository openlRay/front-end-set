function Parent() {
  this.name = 'kevin';
  this.names = ['kevin', 'daisy'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child(...args) {
  Parent.apply(this, args)
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child

var child1 = new Child();
child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy", "yayu"]