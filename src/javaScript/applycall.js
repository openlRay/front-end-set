Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  const fnName = Symbol('fn');
  context[fnName] = this;
  const result = context[fnName](...args);
  delete context[fnName];

  return result;
}

Function.prototype.myApply = function (context, args) {
  context = context || window;
  const fnName = Symbol('fn');
  context[fnName] = this;
  const result = context[fnName](...args);
  delete context[fnName];

  return result;
}