/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 *
 *
 *
 * 提示：
 *
 *
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 *
 *
 */

// 整体思路
// 使用深度优先搜索（DFS）和回溯的思想实现。关于判断元素是否使用过，我用了一个二维数组 mark 对使用过的元素做标记。

// 外层：遍历
// 首先遍历 board 的所有元素，先找到和 word 第一个字母相同的元素，然后进入递归流程。
// 假设这个元素的坐标为 (i, j)，进入递归流程前，先记得把该元素打上使用过的标记：

// mark[i][j] = 1
// 内层：递归
// 好了，打完标记了，现在我们进入了递归流程。递归流程主要做了这么几件事：

// 从 (i, j) 出发，朝它的上下左右试探，看看它周边的这四个元素是否能匹配 word 的下一个字母
// 如果匹配到了：带着该元素继续进入下一个递归
// 如果都匹配不到：返回 False
// 当 word 的所有字母都完成匹配后，整个流程返回 True
// 几个注意点
// 递归时元素的坐标是否超过边界
// 回溯标记 mark[i][j] = 0以及 return 的时机

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length,
    n = board[0].length,
    used = []
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n).fill(false)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && recur(board, word, i, j, 0)) {
        return true
      }
    }
  }
  return false
  /**
   * @description:
   * @param {Number} pointer 递归时从word的第几个字母开始
   * @param {Number} x 横坐标
   * @param {Number} y 纵坐标
   * @return {type}
   */
  function recur(b, w, x, y, pointer) {
    if (pointer === w.length) {
      return true
    }
    if (x < 0 || x >= m || y < 0 || y >= n || w[pointer] !== b[x][y] || used[x][y]) return false
    used[x][y] = true
    if (recur(b, w, x - 1, y, pointer + 1) || recur(b, w, x + 1, y, pointer + 1) || recur(b, w, x, y - 1, pointer + 1) || recur(b, w, x, y + 1, pointer + 1)) {
      return true
    }
    used[x][y] = false
    return false
  }
}

// case1 输入：board: [['A', 'B', 'C', 'E'],['S', 'F', 'C', 'S'],['A', 'D', 'E', 'E']] word: 'ABCCED' 预期：true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCCED'
  )
)

// case2 输入：board: [['A', 'B', 'C', 'E'],['S', 'F', 'C', 'S'],['A', 'D', 'E', 'E']] word:'SEE' 预期：true
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'SEE'
  )
)

// case3 输入：board: [['A', 'B', 'C', 'E'],['S', 'F', 'C', 'S'],['A', 'D', 'E', 'E']] word:'ABCB' 预期：false
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCB'
  )
)
