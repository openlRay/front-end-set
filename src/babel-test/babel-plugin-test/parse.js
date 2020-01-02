const fn = () => a + b
const code = require('@babel/parser').parse(fn, {
  // parse in strict mode and allow module declarations
  sourceType: 'module',

  plugins: [
    // enable jsx and flow syntax
    'jsx',
    'flow'
  ]
})

var fs = require('fs')
var path = require('path')
var dirname = path.dirname(__filename)
try {
  fs.writeFileSync(
    path.join(dirname, 'fileForWrite.json'),
    JSON.stringify(code),
    'utf8'
  )
  console.log('文件写入成功')
} catch (err) {
  throw err
}
