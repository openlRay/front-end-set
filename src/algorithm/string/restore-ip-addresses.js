// title: 复原IP地址

// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 示例:

// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) return []
  let result = []
  fn(s, [], result)
  return result
};

function fn(remain, temp, result) {
  if (temp.length === 3) {
    regular(remain) && result.push([...temp, remain].join('.'))
    return
  }
  for (let i = 1; i < 4; i++) {
    regular(remain.substr(0, i)) && fn(remain.substr(i), [...temp, remain.substr(0, i)], result)
  }
}

function regular(s) {
  if (!s.length) return false
  return 0 <= +s && +s <= 255 && (s.length > 1 ? !!+s[0] : true)
}

// case1 输入：'25525511135' 预期：["255.255.11.135", "255.255.111.35"]
console.log(restoreIpAddresses('25525511135'))

// case2 输入：'1116512311' 预期：["11.165.123.11","111.65.123.11"]
console.log(restoreIpAddresses('1116512311'))

// case3 输入：'010010' 预期：["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses('010010'))