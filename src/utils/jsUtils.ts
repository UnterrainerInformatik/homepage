export default {
  toggleItem: function (item, array) {
    const index = array.indexOf(item)
    if (index === -1) {
      array.push(item)
    } else {
      array.splice(index, 1)
    }
  },

  removeItem: function (item, array) {
    const index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1)
    }
  },

  containsItem: function (item, array) {
    return array.indexOf(item) !== -1
  },

  /**
   * Returns the value itself, or an empty string, if the value was null or undefined.
   * @param value the value to sanitize
   */
  sanitize: function (value) {
    if (value === null || value === undefined) {
      return ''
    }
    return value
  }
}
