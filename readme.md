# meta-tag-data [![Build Status](https://travis-ci.org/bendrucker/meta-tag-data.svg?branch=master)](https://travis-ci.org/bendrucker/meta-tag-data)

> Convert key/value pairs to <meta> tag data


## Install

```
$ npm install --save meta-tag-data
```


## Usage

```js
var metaData = require('meta-tag-data')

metaData('name', {
  description: 'foo',
  keywords: 'bar'  
})
//=> [{name: 'description', content: 'foo'}, {name: 'keywords', content: 'bar'}]
```

## API

#### `metaData(key, data)` -> `array[object]`

##### key

*Required*  
Type: `string`

The string attribute key to use for the meta keys (`name` for many tags and `property` for [Open Graph tags](https://github.com/bendrucker/open-graph-meta)).

##### data

*Required*  
Type: `object`

A flat object with key/value pairs that will become meta keys and meta content values.


## License

MIT © [Ben Drucker](http://bendrucker.me)
