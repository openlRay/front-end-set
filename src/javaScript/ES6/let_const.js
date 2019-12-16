function* g() {
  yield 1
  console.log('throwing an exception')
  throw new Error('generator broke!')
  yield 2
  yield 3
}
let f = g()
console.log(f.next())
