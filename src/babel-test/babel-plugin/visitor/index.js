module.exports = function({ types: t }) {
  return {
    pre(state) {
      this.cache = new Map()
    },
    visitor: {
      // BinaryExpression(path) {
      //   path.replaceWith(
      //     t.binaryExpression('+', t.numericLiteral(1), t.numericLiteral(2))
      //   )
      // },
      // ReturnStatement(path) {
      //   path.replaceWithMultiple([
      //     t.expressionStatement(t.stringLiteral('Is this the real life?')),
      //     t.expressionStatement(t.stringLiteral('Is this just fantasy?')),
      //     t.expressionStatement(
      //       t.stringLiteral('(Enjoy singing the rest of the song in your head)')
      //     )
      //   ])
      //   path.replaceWith({
      //     type: 'StringLiteral',
      //     value: 'foo'
      //   })
      // },
      // ClassMethod(path) {
      //   path
      //     .get('body')
      //     .unshiftContainer(
      //       'body',
      //       t.expressionStatement(t.stringLiteral('before'))
      //     )
      //   path
      //     .get('body')
      //     .pushContainer(
      //       'body',
      //       t.expressionStatement(t.stringLiteral('after'))
      //     )
      // },
      FunctionDeclaration(path, state) {
        this.cache.set(path.node.value, 1)
        // const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id)
        // path.remove()
        // path.scope.parent.push({ id, init: path.node })
      }
    },
    post(state) {
      console.log(this.cache)
    }
  }
}
