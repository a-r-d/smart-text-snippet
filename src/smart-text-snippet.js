function smartTextSnippet() {
  
  var _options = { 
    len: 100,
    breakChars: [' ', '\n', '\r\n', '"', '<'],
    stopChar: '.',
    stopAtParagraphEnd: true
  }

  // Dependency: lodash
  function getOpts(options) {
    return _.assign(options || {}, _options); 
  }
    
  function snip(text, options) {
    var buffer = [],
      index = 0;
    options = getOpts(options);

    if(!text || text.length <= options.length) {
      return text;
    }

    for(index = 0; index < text.length; index++) {
      buffer.push(text[index]);
      if(buffer.length > options.len && 
        buffer[index - 1] === options.stopChar) { // did we hit a stop char 
          // did we hit a stop char at end of paragraph?
          if(options.stopAtParagraphEnd && 
            ~options.breakChars.indexOf(review[index])) {
              continue;
          }

          buffer.pop();
          if(options.appendToEnd) {
            buffer.push(options.appendToEnd);
          }
          break;
        }
    }
    
    return buffer.join('');
  }

  function chunk(text, options) {

  }

  return {
    snip: snip,
    chunk: chunk
  };
}



