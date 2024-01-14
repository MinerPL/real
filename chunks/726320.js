e.exports = function(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [{
      begin: /<\?(php|=)?/,
      end: /\?>/,
      subLanguage: "php",
      contains: [{
        begin: "/\\*",
        end: "\\*/",
        skip: !0
      }, {
        begin: 'b"',
        end: '"',
        skip: !0
      }, {
        begin: "b'",
        end: "'",
        skip: !0
      }, e.inherit(e.APOS_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: !0
      }), e.inherit(e.QUOTE_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: !0
      })]
    }]
  }
}