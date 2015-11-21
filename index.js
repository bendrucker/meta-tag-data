'use strict'

var reduce = require('reduce-object')
var extend = require('xtend')
var pair = require('object-pair')

module.exports = function metaTagData (metaKey, data) {
  return reduce(data, function (acc, value, key) {
    return acc.concat(extend(pair(metaKey, key), {
      content: value
    }))
  }, [])
}
