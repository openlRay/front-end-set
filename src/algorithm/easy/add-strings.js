// title: 字符串相加

// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

//

// 提示：

// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

// 思路,双指针法，第一个指针寻找为0的数，第二个指针寻找不等于0的数
// 如果元素不为0，i,j跟着一起动。如果元素为零，i继续移动，j保持不动，此时j记录的正是为0的下标

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {}

// case1 输入：[0,1,0,3,12] 预期：[1,3,12,0,0]
console.log(addStrings('156', '989'))

// case1 输入：[-1,2,-3,4,0,1,0,-2,0,0,1] 预期：[-1,2,-3,4,1,-2,1,0,0,0,0]
console.log(addStrings('123', '7896'))
