a("424973");
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
  let t = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    },
    a = {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "@"
    },
    n = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [e.C_NUMBER_MODE]
    },
    i = {
      className: "variable",
      begin: "\\$" + e.UNDERSCORE_IDENT_RE
    },
    r = {
      className: "string",
      variants: [{
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [i, n]
      }, {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE, i, n]
      }]
    };
  n.contains.push(r);
  let s = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
    },
    l = {
      className: "meta",
      begin: "@" + e.UNDERSCORE_IDENT_RE,
      contains: [{
        begin: /\(/,
        end: /\)/,
        contains: [e.inherit(r, {
          className: "string"
        }), "self"]
      }]
    },
    c = e.COMMENT("/\\*", "\\*/", {
      contains: [e.C_BLOCK_COMMENT_MODE]
    }),
    _ = {
      variants: [{
        className: "type",
        begin: e.UNDERSCORE_IDENT_RE
      }, {
        begin: /\(/,
        end: /\)/,
        contains: []
      }]
    };
  return _.variants[1].contains = [_], _.variants[1].contains = [_], {
    name: "Kotlin",
    aliases: ["kt", "kts"],
    keywords: t,
    contains: [e.COMMENT("/\\*\\*", "\\*/", {
      relevance: 0,
      contains: [{
        className: "doctag",
        begin: "@[A-Za-z]+"
      }]
    }), e.C_LINE_COMMENT_MODE, c, {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: {
        contains: [{
          className: "symbol",
          begin: /@\w+/
        }]
      }
    }, a, s, l, {
      className: "function",
      beginKeywords: "fun",
      end: "[(]|$",
      returnBegin: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 5,
      contains: [{
        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        relevance: 0,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        className: "type",
        begin: /</,
        end: />/,
        keywords: "reified",
        relevance: 0
      }, {
        className: "params",
        begin: /\(/,
        end: /\)/,
        endsParent: !0,
        keywords: t,
        relevance: 0,
        contains: [{
          begin: /:/,
          end: /[=,\/]/,
          endsWithParent: !0,
          contains: [_, e.C_LINE_COMMENT_MODE, c],
          relevance: 0
        }, e.C_LINE_COMMENT_MODE, c, s, l, r, e.C_NUMBER_MODE]
      }, c]
    }, {
      begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
      beginScope: {
        3: "title.class"
      },
      keywords: "class interface trait",
      end: /[:\{(]|$/,
      excludeEnd: !0,
      illegal: "extends implements",
      contains: [{
        beginKeywords: "public protected internal private constructor"
      }, e.UNDERSCORE_TITLE_MODE, {
        className: "type",
        begin: /</,
        end: />/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: /[,:]\s*/,
        end: /[<\(,){\s]|$/,
        excludeBegin: !0,
        returnEnd: !0
      }, s, l]
    }, r, {
      className: "meta",
      begin: "^#!/usr/bin/env",
      end: "$",
      illegal: "\n"
    }, o]
  }
}