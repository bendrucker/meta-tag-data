'use strict'

var reduce = require('reduce-object')
var extend = require('xtend')
var pair = require('object-pair')
var toDash = require('camel-2-dash')
var metaString = require('meta-string')

module.exports = function metaTagData (metaKey, data) {
  return reduce(data, function (acc, value, key) {
    return acc.concat(extend(pair(metaKey, toDash(key)), {
      content: metaString(value)
    }))
  }, [])
}
