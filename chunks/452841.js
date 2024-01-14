e.exports = function(e) {
  let t = {
      variants: [e.COMMENT("--", "$"), e.COMMENT(/\{-/, /-\}/, {
        contains: ["self"]
      })]
    },
    a = {
      className: "meta",
      begin: /\{-#/,
      end: /#-\}/
    },
    n = {
      className: "meta",
      begin: "^#",
      end: "$"
    },
    i = {
      className: "type",
      begin: "\\b[A-Z][\\w']*",
      relevance: 0
    },
    r = {
      begin: "\\(",
      end: "\\)",
      illegal: '"',
      contains: [a, n, {
        className: "type",
        begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
      }, e.inherit(e.TITLE_MODE, {
        begin: "[_a-z][\\w']*"
      }), t]
    },
    o = {
      begin: /\{/,
      end: /\}/,
      contains: r.contains
    },
    s = "([0-9]_*)+",
    l = "([0-9a-fA-F]_*)+",
    c = {
      className: "number",
      relevance: 0,
      variants: [{
        match: "\\b(".concat(s, ")(\\.(").concat(s, "))?") + "([eE][+-]?(".concat(s, "))?\\b")
      }, {
        match: "\\b0[xX]_*(".concat(l, ")(\\.(").concat(l, "))?") + "([pP][+-]?(".concat(s, "))?\\b")
      }, {
        match: "\\b0[oO](".concat("([0-7]_*)+", ")\\b")
      }, {
        match: "\\b0[bB](".concat("([01]_*)+", ")\\b")
      }]
    };
  return {
    name: "Haskell",
    aliases: ["hs"],
    keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
    contains: [{
      beginKeywords: "module",
      end: "where",
      keywords: "module where",
      contains: [r, t],
      illegal: "\\W\\.|;"
    }, {
      begin: "\\bimport\\b",
      end: "$",
      keywords: "import qualified as hiding",
      contains: [r, t],
      illegal: "\\W\\.|;"
    }, {
      className: "class",
      begin: "^(\\s*)?(class|instance)\\b",
      end: "where",
      keywords: "class family instance where",
      contains: [i, r, t]
    }, {
      className: "class",
      begin: "\\b(data|(new)?type)\\b",
      end: "$",
      keywords: "data family type newtype deriving",
      contains: [a, i, r, o, t]
    }, {
      beginKeywords: "default",
      end: "$",
      contains: [i, r, t]
    }, {
      beginKeywords: "infix infixl infixr",
      end: "$",
      contains: [e.C_NUMBER_MODE, t]
    }, {
      begin: "\\bforeign\\b",
      end: "$",
      keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
      contains: [i, e.QUOTE_STRING_MODE, t]
    }, {
      className: "meta",
      begin: "#!\\/usr\\/bin\\/env runhaskell",
      end: "$"
    }, a, n, e.QUOTE_STRING_MODE, c, i, e.inherit(e.TITLE_MODE, {
      begin: "^[_a-z][\\w']*"
    }), t, {
      begin: "->|<-"
    }]
  }
}