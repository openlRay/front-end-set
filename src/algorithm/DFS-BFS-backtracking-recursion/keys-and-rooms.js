/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 *
 * https://leetcode-cn.com/problems/keys-and-rooms/description/
 *
 * algorithms
 * Medium
 *
 * 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
 *
 * 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中
 * N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
 *
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 *
 * 你可以自由地在房间之间来回走动。
 *
 * 如果能进入每个房间返回 true，否则返回 false。
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入: [[1],[2],[3],[]]
 * 输出: true
 * 解释:
 * 我们从 0 号房间开始，拿到钥匙 1。
 * 之后我们去 1 号房间，拿到钥匙 2。
 * 然后我们去 2 号房间，拿到钥匙 3。
 * 最后我们去了 3 号房间。
 * 由于我们能够进入每个房间，我们返回 true。
 *
 *
 * 示例 2：
 *
 * 输入：[[1,3],[3,0,1],[2],[0]]
 * 输出：false
 * 解释：我们不能进入 2 号房间。
 *
 *
 * 提示：
 *
 *
 * 1 <= rooms.length <= 1000
 * 0 <= rooms[i].length <= 1000
 * 所有房间中的钥匙数量总计不超过 3000。
 *
 *
 */

// 这个需要注意的是要求的并不是存不存在一条路走完所有房间
// 当 x 号房间中有 y 号房间的钥匙时，我们就可以从 x 号房间去往 y 号房间。
// 如果我们将这 n 个房间看成有向图中的 n 个节点
// 那么上述关系就可以看作是图中的 x 号点到 y 号点的一条有向边。
// 这样一来，问题就变成了给定一张有向图，询问从 0 号节点出发是否能够到达所有的节点。

// DFS
// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let roomsLen = rooms.length
  let visited = new Array(roomsLen).fill(false),
    visits = 0

  function dfs(rooms, room_index) {
    visits++
    visited[room_index] = true
    let room = rooms[room_index]
    for (let i = 0; i < room.length; i++) {
      if (!visited[room[i]]) {
        dfs(rooms, room[i])
      }
    }
  }
  dfs(rooms, 0, visited)
  return visits === roomsLen
}

// BFS
var canVisitAllRooms = function(rooms) {
  let roomsLen = rooms.length
  let visited = new Array(roomsLen).fill(false),
    visits = 1,
    queue = [...rooms[0]]
    visited[0] = true

  while(queue.length) {
    let el = queue.shift()
    if (!visited[el]) {
      visits++
      visited[el] = true
      queue = queue.concat(rooms[el])
    }
  }
  return visits === roomsLen
}

// case1 输入：[[1],[2],[3],[]] 预期：true
console.log(canVisitAllRooms([[1], [2], [3], []]))

// case2 输入：[[1,3],[3,0,1],[2],[0]] 预期：false
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))

// case3 输入：[[1,2],[3],[4],[1],[1]] 预期：true
console.log(canVisitAllRooms([[1, 2], [3], [4], [1], [1]]))

// @lc code=end
