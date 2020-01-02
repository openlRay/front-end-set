// 给你一把"螺丝刀"——recast
var fs = require('fs')
var path = require('path')
var dirname = path.dirname(__filename)
const recast = require('recast')

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code = `
  function add(a, b) {
    return a + b
  }
  `
// 用螺丝刀解析机器
// const ast = recast.parse(code)

// const add = ast.program.body[0]
// const n = recast.types.namedTypes
// console.log(n)

const ast = recast.parse(code)
console.log(recast.prettyPrint(ast, { tabWidth: 2 }).code)

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
// const add = ast.program.body[0]
// try {
//   fs.writeFileSync(
//     path.join(dirname, 'fileForWrite.json'),
//     JSON.stringify(ast),
//     'utf8'
//   )
//   console.log('文件写入成功')
// } catch (err) {
//   throw err
// }
