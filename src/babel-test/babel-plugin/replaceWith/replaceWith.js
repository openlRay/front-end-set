//
const file = require('../../file')

module.exports = function({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        file.writeFile(require('path').dirname(__filename), path.node)
        path.replaceWith(
          t.functionExpression(
            path.node.id,
            path.node.params,
            path.node.body,
            path.node.generator,
            path.node.async
          )
        )
      },
      BinaryExpression(path) {
        path.replaceWithSourceString('17 + 23')
      }
      // ReturnStatement(path) {
      //   file.writeFile(require('path').dirname(__filename), path.node)
      //   // path.replaceWith({
      //   //   type: 'StringLiteral',
      //   //   value: 'foo'
      //   // })
      //   path.replaceWith(
      //     t.functionExpression(
      //       path.node.id,
      //       path.node.params,
      //       path.node.body,
      //       path.node.generator,
      //       path.node.async
      //     )
      //   )
      // }
    }
  }
}
