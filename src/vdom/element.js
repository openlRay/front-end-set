import util from './util';

/**
 * Virtual-dom Element.
 * @param {String} tagName
 * @param {Object} props - Element's properties,
 *                       - using object to store key-value pair
 * @param {Array<Element|String>} - This element's children elements.
 *                                - Can be Element instance or just a piece plain text.
 */
function Element(tagName, props, children) {
  if (!(this instanceof Element)) {
    if (!util.isArray(children) && children != null) {
      children = util.slice(arguments, 2).filter(util.truthy)
    }
    return new Element(tagName, props, children)
  }

  if (util.isArray(props)) {
    children = props
    props = {}
  }

  this.tagName = tagName
  this.props = props || {}
  this.children = children || []
  this.key = props ?
    props.key :
    void 666

  var count = 0

  util.each(this.children, function (child, i) {
    if (child instanceof Element) {
      count += child.count
    } else {
      children[i] = '' + child
    }
    count++
  })

  this.count = count
}

/**
 * Render the hold element tree.
 */
Element.prototype.render = function () {
  var el = document.createElement(this.tagName)
  var props = this.props

  for (var propName in props) {
    var propValue = props[propName]
    util.setAttr(el, propName, propValue)
  }

  util.each(this.children, function (child) {
    var childEl = (child instanceof Element) ?
      child.render() :
      document.createTextNode(child)
    el.appendChild(childEl)
  })

  return el
}

export {
  Element as ele
};