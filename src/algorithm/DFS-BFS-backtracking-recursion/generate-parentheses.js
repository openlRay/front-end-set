// title: 括号生成

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (!n) return []
  let result = []
  tempFn(n, n, '', result)
  return result
};

function tempFn(remainLeft, remainRight, hasGenerate, result) {
  if (!remainLeft && !remainRight) {
    result.push(hasGenerate)
    return
  }
  if (remainLeft > 0) {
    tempFn(remainLeft - 1, remainRight, `${hasGenerate}(`, result)
  }
  if (remainRight > 0 && remainRight > remainLeft) {
    tempFn(remainLeft, remainRight - 1, `${hasGenerate})`, result)
  }
}

console.log(generateParenthesis(0))