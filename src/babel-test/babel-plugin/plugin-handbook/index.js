var babel = require('@babel/core')
var generate = require('@babel/generator')
var babylon = require('babylon')
var t = require('@babel/types')
var r = require('@babel/traverse')

const e = t.binaryExpression('*', t.identifier('a'), t.identifier('b'))
const code = `function square(n) {
  return n * n;
}`

// const ast = babylon.parse(code)

// const c = generate(ast, {}, code)
