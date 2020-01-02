module.exports = function(babel) {
  const { types: t, template } = babel

  const visitor = {
    //需要访问的节点名
    //访问器默认会被注入两个参数 path（类比成dom），state
    ExpressionStatement(path, state) {
      const node = path.node
      //延当前节点向内部访问，判断是否符合console解析出的ast的特征
      const expressionNode = keyPathVisitor(node, ['expression'])
      const isCallExpression = expressionNode.type === 'CallExpression'
      if (isCallExpression) {
        const objectName = keyPathVisitor(expressionNode, [
          'callee',
          'object',
          'name'
        ])
        const prototypeName = keyPathVisitor(expressionNode, [
          'callee',
          'property',
          'name'
        ])
        if (objectName === 'console' && prototypeName === 'log' && !MAC) {
          //如果符合上述条件，直接移除该节点
          path.remove()
        }
      }
    }
  }

  return {
    visitor
  }
}
