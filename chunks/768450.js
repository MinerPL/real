e.exports = function(e) {
  let t = e.regex,
    a = /[\p{XID_Start}_]\p{XID_Continue}*/u,
    n = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
    i = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: n,
      built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
      literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
      type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
    },
    r = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    },
    o = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: i,
      illegal: /#/
    },
    s = {
      begin: /\{\{/,
      relevance: 0
    },
    l = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [e.BACKSLASH_ESCAPE, r],
        relevance: 10
      }, {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [e.BACKSLASH_ESCAPE, r],
        relevance: 10
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [e.BACKSLASH_ESCAPE, r, s, o]
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [e.BACKSLASH_ESCAPE, r, s, o]
      }, {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      }, {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      }, {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      }, {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [e.BACKSLASH_ESCAPE, s, o]
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, s, o]
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    },
    c = "[0-9](_?[0-9])*",
    _ = "(\\b(".concat(c, "))?\\.(").concat(c, ")|\\b(").concat(c, ")\\."),
    d = "\\b|".concat(n.join("|")),
    m = {
      className: "number",
      relevance: 0,
      variants: [{
        begin: "(\\b(".concat(c, ")|(").concat(_, "))[eE][+-]?(").concat(c, ")[jJ]?(?=").concat(d, ")")
      }, {
        begin: "(".concat(_, ")[jJ]?")
      }, {
        begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=".concat(d, ")")
      }, {
        begin: "\\b0[bB](_?[01])+[lL]?(?=".concat(d, ")")
      }, {
        begin: "\\b0[oO](_?[0-7])+[lL]?(?=".concat(d, ")")
      }, {
        begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=".concat(d, ")")
      }, {
        begin: "\\b(".concat(c, ")[jJ](?=").concat(d, ")")
      }]
    },
    p = {
      className: "comment",
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: i,
      contains: [{
        begin: /# type:/
      }, {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }]
    },
    u = {
      className: "params",
      variants: [{
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      }, {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: i,
        contains: ["self", r, m, l, e.HASH_COMMENT_MODE]
      }]
    };
  return o.contains = [l, m, r], {
    name: "Python",
    aliases: ["py", "gyp", "ipython"],
    unicodeRegex: !0,
    keywords: i,
    illegal: /(<\/|->|\?)|=>/,
    contains: [r, m, {
      begin: /\bself\b/
    }, {
      beginKeywords: "if",
      relevance: 0
    }, l, p, e.HASH_COMMENT_MODE, {
      match: [/\bdef/, /\s+/, a],
      scope: {
        1: "keyword",
        3: "title.function"
      },
      contains: [u]
    }, {
      variants: [{
        match: [/\bclass/, /\s+/, a, /\s*/, /\(\s*/, a, /\s*\)/]
      }, {
        match: [/\bclass/, /\s+/, a]
      }],
      scope: {
        1: "keyword",
        3: "title.class",
        6: "title.class.inherited"
      }
    }, {
      className: "meta",
      begin: /^[\t ]*@/,
      end: /(?=#)|$/,
      contains: [m, u, l]
    }]
  }
}