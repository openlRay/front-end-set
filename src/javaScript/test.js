const fn = () => a + b
console.log(
  require('@babel/core').transform(fn, {
    plugins: ['@babel/plugin-transform-arrow-functions']
  }).code
)
