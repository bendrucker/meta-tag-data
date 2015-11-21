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

  var camelKeys = {
    fooBar: 'baz'
  }

  t.deepEqual(meta('name', camelKeys), [
    {name: 'foo-bar', content: 'baz'}
  ])

  var nested = {
    foo: {
      barBaz: 'qux'
    }
  }

  t.deepEqual(meta('name', nested), [
    {name: 'foo', content: 'bar-baz=qux'}
  ])

  t.end()
})
