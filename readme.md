smart-text-snippet
===================

Create shortened or chunked text snippets from longer text while leaving sentences intact. Min length is configurable.


Example usage
================

Available on npm

```bash
npm i smart-text-snippet
```


```javscript

var snippets = require('smart-text-snippet');

var superLongString = 'I will be a very long string...';

var shortSnippet = snippets.snip(superLongString, {len: 150});
// returns the first complete sentence with length at least 150 chars.

```


Visual example: 

| Input | Output | 
| ----- | ------ |
|``` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at tristique ipsum, commodo tristique augue. Fusce maximus mi id justo accumsan tempor. Pellentesque sem ante, mollis in imperdiet eu, maximus sed odio. Praesent ultricies aliquam orci, sit amet tempor diam eleifend sed. Fusce euismod nisl sed erat aliquet, eu commodo leo finibus. Donec massa nibh, auctor sit amet dignissim quis, eleifend non nibh. Aliquam convallis vehicula velit eget tincidunt.  ```|```Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at tristique ipsum, commodo tristique augue.```|



Features
==========

This module supports multiple module loading systems systems:

 - Vanilla browser JS 'dist/smart-text-snippet-browser.js'
 - Node style 'dist/smart-text-snippet-node.js' (this is what the npm module exports)
 - AMD style 'dist/smart-text-snippet-amd.js'


Dependencies
=============

 - Lodash v4 (earlier version may work).


Tests
=====

Tests run with node on mocha and chai. 

```bash
mocha test
```
