const getLanguage = ua => {
  let reg = new RegExp('/([a-z]{2})-([a-z]{2})', 'i')
  let t = reg.exec(ua)
  console.log(t)
  if (t && t[2] === 'tw') {
    return 'tw'
  }
  if (t && t.length > 1) {
    return t[1]
  }
  return 'en'
}
console.log(getLanguage('/ko-kr'))
