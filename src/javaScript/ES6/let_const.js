let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
"2015-01-02".replace(
  re,
  (
    matched, // 整个匹配结果 2015-01-02
    capture1, // 第一个组匹配 2015
    capture2, // 第二个组匹配 01
    capture3, // 第三个组匹配 02
    position, // 匹配开始的位置 0
    S, // 原字符串 2015-01-02
    groups // 具名组构成的一个对象 {year, month, day}
  ) => {
    console.log(
      matched, // 整个匹配结果 2015-01-02
      capture1, // 第一个组匹配 2015
      capture2, // 第二个组匹配 01
      capture3, // 第三个组匹配 02
      position, // 匹配开始的位置 0
      S, // 原字符串 2015-01-02
      groups // 具名组构成的一个对象 {year, month, day})
    );
    let { day, month, year } = groups;
    return `${day}/${month}/${year}`;
  }
);
