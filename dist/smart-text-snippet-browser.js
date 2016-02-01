!(function(window){
function smartTextSnippet() {
  
  var _options = { 
    len: 100,
    breakChars: [' ', '\n', '\r\n', '"', '<'],
    stopChars: ['.', '!', '?']
  }

  // Dependency: lodash
  function getOpts(options) {
    return _.assign(_options, options || {}); 
  }
    
  function snip(text, options) {
    var buffer = [],
      index = 0;
    options = getOpts(options);
    console.log(options);

    if(!text || text.length <= options.length) {
      return text;
    }

    for(index = 0; index < text.length; index++) {
      buffer.push(text[index]);
      if(buffer.length > options.len && 
        ~options.stopChars.indexOf(buffer[index - 1])) { 
          if(!~options.breakChars.indexOf(text[index])) {
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


window.SmartTextSnippet = smartTextSnippet();
})(window);

