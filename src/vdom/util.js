var util = {}

util.type = function (obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

util.isArray = function isArray(list) {
  return util.type(list) === 'Array'
}

util.slice = function slice(arrayLike, index) {
  return Array.prototype.slice.call(arrayLike, index)
}

util.truthy = function truthy(value) {
  return !!value
}

util.isString = function isString(list) {
  return util.type(list) === 'String'
}

util.each = function each(array, fn) {
  for (var i = 0, len = array.length; i < len; i++) {
    fn(array[i], i)
  }
}

util.toArray = function toArray(listLike) {
  if (!listLike) {
    return []
  }

  var list = []

  for (var i = 0, len = listLike.length; i < len; i++) {
    list.push(listLike[i])
  }

  return list
}

util.setAttr = function setAttr(node, key, value) {
  switch (key) {
    case 'style':
      node.style.cssText = value
      break
    case 'value':
      var tagName = node.tagName || ''
      tagName = tagName.toLowerCase()
      if (
        tagName === 'input' || tagName === 'textarea'
      ) {
        node.value = value
      } else {
        // if it is not a input or textarea, use `setAttribute` to set
        node.setAttribute(key, value)
      }
      break
    default:
      node.setAttribute(key, value)
      break
  }
}
export default util