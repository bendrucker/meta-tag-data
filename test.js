'use strict'

var test = require('tape')
var meta = require('./')

test(function (t) {
  var data = {
    description: 'Hello',
    keywords: 'world'
  }

  t.deepEqual(meta('name', data), [
    {name: 'description', content: 'Hello'},
    {name: 'keywords', content: 'world'}
  ])

  t.end()
})
