// title: 字符串的排列

// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

// 示例1:

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//  

// 示例2:

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
//  

// 注意：

// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间

// 思路，不一定要计算出所有排列，只需要计算s1同等长度下字母出现次数一致
// 则可以判断出是否存在排列
// 具体实现，可以给定一个26位长数组，每一个下标代表一个字母，这个可以使用一个小技巧，
// 小写字母的ASCII码减去97正好可以，使得a-z正好对应0-26
// 初始化时，遍历s1,每一个出现的字母对应的数组下标值加一，与此同时，s2相应位置出现的字母对应的数组下标值减一
// 这里同时遍历s2的目的是为了初始化s2前s1.length长度字母
// 遍历s2，此时可以用s1长度处开始遍历，使用滑动窗口，每次滑动向前滑动一位。同时新加入的字母对应的值减一
// 并且窗口前一个字母需要重置，因为之前已经减一了，所以需要加一
// 判断数组内值是否都为0,如果都为0，则存在排列

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  let arr = Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    arr[s1[i].charCodeAt() - 97]++
    arr[s2[i].charCodeAt() - 97]--
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (arr.every(i => !i)) return true
    arr[s2[i - s1.length].charCodeAt() - 97]++
    arr[s2[i].charCodeAt() - 97]--
  }
  return arr.every(i => !i)
};

// case1 输入：s1 = "ab" s2 = "eidbaooo" 预期：true
// console.log(checkInclusion("ab", "eidbaooo"))

// case2 输入：s1= "ab" s2 = "eidboaoo" 预期：false
// console.log(checkInclusion("ab", "eidboaoo"))

// case3 输入：s1= "qrcczceam" s2 = 'xxyhdqrloraznjmjdutowpdihgojmpkbhytwkplsqolieeinuedffiqrlkgcljktvyppfztcuyoinzfntyjnmjvwwwmatbbfsriwrwonesmcmcdamurgovwlvssposzrjeiexpdcojeqhjxbpoaecqibkybyrjxqibmnybdmizrmrzzwsojfsmyfgvmyscwgaotnjlfwnixdyxlxhtuwwrkcsefubrfxlexixuerldgsuuklrsvrhqndbmslrrtqsudjsgseohbwgojjmepfsawhszluynmfvlfosihatyvupzkxukiedwgmpxsznaqadvalzmigsitmwaunstoqlgskhnsmwvrudgphbnn' 预期：''
// console.log(checkInclusion("qrcczceam", 'xxyhdqrloraznjmjdutowpdihgojmpkbhytwkplsqolieeinuedffiqrlkgcljktvyppfztcuyoinzfntyjnmjvwwwmatbbfsriwrwonesmcmcdamurgovwlvssposzrjeiexpdcojeqhjxbpoaecqibkybyrjxqibmnybdmizrmrzzwsojfsmyfgvmyscwgaotnjlfwnixdyxlxhtuwwrkcsefubrfxlexixuerldgsuuklrsvrhqndbmslrrtqsudjsgseohbwgojjmepfsawhszluynmfvlfosihatyvupzkxukiedwgmpxsznaqadvalzmigsitmwaunstoqlgskhnsmwvrudgphbnn'))