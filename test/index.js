var smartTextSnippet = require('../dist/smart-text-snippet-node');
var expect = require('chai').expect;
var fs = require('fs');

var sample1 = fs.readFileSync('./test/lorem-ipsum-1.txt', 'utf8');

describe('smartTextSnippet', function() {
  describe('snip', function () {
    it('should create a smaller snippet from a large text', function () {
    
      var res = smartTextSnippet.snip(sample1, {stopAtParagraphEnd: false});
      expect(res).to.not.be.null;
      console.log(res);
      var len = sample1.length;
      var len2 = res.length;
      expect(len2).to.be.below(len);

    });
  
    it('should create a snippet of various lengths', function () {
    
      var res = smartTextSnippet.snip(sample1, {len: 300});
      expect(res).to.not.be.null;
      console.log(res);
      var len = sample1.length;
      var len2 = res.length;
      expect(len2).to.be.below(len);

    });
   
  
  });
});
