a("781738");
var n = "[0-9](_*[0-9])*",
  i = "\\.(".concat(n, ")"),
  r = "[0-9a-fA-F](_*[0-9a-fA-F])*",
  o = {
    className: "number",
    variants: [{
      begin: "(\\b(".concat(n, ")((").concat(i, ")|\\.)?|(").concat(i, "))") + "[eE][+-]?(".concat(n, ")[fFdD]?\\b")
    }, {
      begin: "\\b(".concat(n, ")((").concat(i, ")[fFdD]?\\b|\\.([fFdD]\\b)?)")
    }, {
      begin: "(".concat(i, ")[fFdD]?\\b")
    }, {
      begin: "\\b(".concat(n, ")[fFdD]\\b")
    }, {
      begin: "\\b0[xX]((".concat(r, ")\\.?|(").concat(r, ")?\\.(").concat(r, "))") + "[pP][+-]?(".concat(n, ")[fFdD]?\\b")
    }, {
      begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
    }, {
      begin: "\\b0[xX](".concat(r, ")[lL]?\\b")
    }, {
      begin: "\\b0(_*[0-7])*[lL]?\\b"
    }, {
      begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
    }],
    relevance: 0
  };
e.exports = function(e) {
  let t = e.regex,
    a = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*",
    n = a + function e(t, a, n) {
      return -1 === n ? "" : t.replace(a, i => e(t, a, n - 1))
    }("(?:<" + a + "~~~(?:\\s*,\\s*" + a + "~~~)*>)?", /~~~/g, 2),
    i = {
      keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits"],
      literal: ["false", "true", "null"],
      type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
      built_in: ["super", "this"]
    },
    r = {
      className: "meta",
      begin: "@" + a,
      contains: [{
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
      }]
    },
    s = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: i,
      relevance: 0,
      contains: [e.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: i,
    illegal: /<\/|#/,
    contains: [e.COMMENT("/\\*\\*", "\\*/", {
      relevance: 0,
      contains: [{
        begin: /\w+@/,
        relevance: 0
      }, {
        className: "doctag",
        begin: "@[A-Za-z]+"
      }]
    }), {
      begin: /import java\.[a-z]+\./,
      keywords: "import",
      relevance: 2
    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
      begin: /"""/,
      end: /"""/,
      className: "string",
      contains: [e.BACKSLASH_ESCAPE]
    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
      match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, a],
      className: {
        1: "keyword",
        3: "title.class"
      }
    }, {
      match: /non-sealed/,
      scope: "keyword"
    }, {
      begin: [t.concat(/(?!else)/, a), /\s+/, a, /\s+/, /=(?!=)/],
      className: {
        1: "type",
        3: "variable",
        5: "operator"
      }
    }, {
      begin: [/record/, /\s+/, a],
      className: {
        1: "keyword",
        3: "title.class"
      },
      contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }, {
      beginKeywords: "new throw return else",
      relevance: 0
    }, {
      begin: ["(?:" + n + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
      className: {
        2: "title.function"
      },
      keywords: i,
      contains: [{
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: i,
        relevance: 0,
        contains: [r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, o, e.C_BLOCK_COMMENT_MODE]
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }, o, r]
  }
}