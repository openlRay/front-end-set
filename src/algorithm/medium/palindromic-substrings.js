// title: 回文子串
// https://leetcode-cn.com/problems/palindromic-substrings/

// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

//

// 示例 1：

// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
//

// 提示：

// 输入的字符串长度不会超过 1000 。

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        count++
      }
    }
  }
  return count
}
function isPalindrome(s) {
  if (s.length === 1) return true
  if (s.length === 2) {
    return s[0] === s[1]
  }
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
var countSubstrings = function(s) {
  if (!s.length) return 0
  let count = 1
  for (let i = 0; i < s.length - 1; i++) {
    count++
    let left = i - 1,
      right1 = i + 1,
      right2 = i + 2
    if (s[i] == s[i + 1]) {
      count++
    } else {
      right2 = s.length
    }
    while ((left >= 0 && right1 < s.length) || (left >= 0 && right2 < s.length)) {
      if (s[left] === s[right1]) {
        count++
      } else {
        // 如果有一个不相等，后面就没必要比下去
        right1 = s.length
      }
      if (s[left] === s[right2]) {
        count++
      } else {
        right2 = s.length
      }
      left--
      right1++
      right2++
    }
  }
  return count
}

// 思路：
// 这是一个比较巧妙的方法，实质的思路和动态规划的思路类似。

// 比如对一个字符串ababa，选择最中间的a作为中心点，往两边扩散，第一次扩散发现left指向的是b，
// right指向的也是b，所以是回文串，继续扩散，同理ababa也是回文串。

// 这个是确定了一个中心点后的寻找的路径，然后我们只要寻找到所有的中心点，问题就解决了。

// 中心点一共有多少个呢？看起来像是和字符串长度相等，但你会发现，如果是这样，
// 上面的例子永远也搜不到abab，想象一下单个字符的哪个中心点扩展可以得到这个子串？似乎不可能。
// 所以中心点不能只有单个字符构成，还要包括两个字符，比如上面这个子串abab，
// 就可以有中心点ba扩展一次得到，所以最终的中心点由2 * len - 1个，
// 分别是len个单字符和len - 1个双字符。

// 如果上面看不太懂的话，还可以看看下面几个问题：

// 为什么有 2 * len - 1 个中心点？
// aba 有5个中心点，分别是 a、b、c、ab、ba
// abba 有7个中心点，分别是 a、b、b、a、ab、bb、ba
// 什么是中心点？
// 中心点即left指针和right指针初始化指向的地方，可能是一个也可能是两个
// 为什么不可能是三个或者更多？
// 因为3个可以由1个扩展一次得到，4个可以由两个扩展一次得到
// left和right指针和中心点的关系是？
// 首先是left，有一个很明显的2倍关系的存在，其次是right，可能和left指向同一个（偶数时），
// 也可能往后移动一个（奇数）
// 大致的关系出来了，可以选择带两个特殊例子进去看看是否满足。

var countSubstrings = function(s) {
  let ans = 0
  for (let i = 0; i < s.length * 2 - 1; i++) {
    let left = Math.floor(i / 2),
      right = left + (i % 2)
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      ans++
      left--
      right++
    }
  }
  return ans
}

// case1 输入：abc 预期：3
console.log(countSubstrings('abc'))

// case2 输入：aaa 预期：6
console.log(countSubstrings('aaa'))

// case3 输入：'' 预期：0
console.log(countSubstrings(''))

// case4 输入：'dfdffdsafas' 预期：17
console.log(countSubstrings('dfdffdsafas'))
