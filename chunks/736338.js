a("222007"), a("424973");
e.exports = function(e) {
  let t = e.regex,
    a = /[a-zA-Z]\w*/,
    n = ["as", "break", "class", "construct", "continue", "else", "for", "foreign", "if", "import", "in", "is", "return", "static", "var", "while"],
    i = ["true", "false", "null"],
    r = ["this", "super"],
    o = ["-", "~", /\*/, "%", /\.\.\./, /\.\./, /\+/, "<<", ">>", ">=", "<=", "<", ">", /\^/, /!=/, /!/, /\bis\b/, "==", "&&", "&", /\|\|/, /\|/, /\?:/, "="],
    s = {
      relevance: 0,
      match: t.concat(/\b(?!(if|while|for|else|super)\b)/, a, /(?=\s*[({])/),
      className: "title.function"
    },
    l = {
      match: t.concat(t.either(t.concat(/\b(?!(if|while|for|else|super)\b)/, a), t.either(...o)), /(?=\s*\([^)]+\)\s*\{)/),
      className: "title.function",
      starts: {
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: [{
            relevance: 0,
            scope: "params",
            match: a
          }]
        }]
      }
    },
    c = {
      relevance: 0,
      match: t.either(...o),
      className: "operator"
    },
    _ = {
      className: "property",
      begin: t.concat(/\./, t.lookahead(a)),
      end: a,
      excludeBegin: !0,
      relevance: 0
    },
    d = {
      relevance: 0,
      match: t.concat(/\b_/, a),
      scope: "variable"
    },
    m = {
      relevance: 0,
      match: /\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,
      scope: "title.class",
      keywords: {
        _: ["Bool", "Class", "Fiber", "Fn", "List", "Map", "Null", "Num", "Object", "Range", "Sequence", "String", "System"]
      }
    },
    p = e.C_NUMBER_MODE,
    u = e.COMMENT(/\/\*\*/, /\*\//, {
      contains: [{
        match: /@[a-z]+/,
        scope: "doctag"
      }, "self"]
    }),
    E = {
      scope: "subst",
      begin: /%\(/,
      end: /\)/,
      contains: [p, m, s, d, c]
    },
    g = {
      scope: "string",
      begin: /"/,
      end: /"/,
      contains: [E, {
        scope: "char.escape",
        variants: [{
          match: /\\\\|\\["0%abefnrtv]/
        }, {
          match: /\\x[0-9A-F]{2}/
        }, {
          match: /\\u[0-9A-F]{4}/
        }, {
          match: /\\U[0-9A-F]{8}/
        }]
      }]
    };
  E.contains.push(g);
  let S = [...n, ...r, ...i],
    b = {
      relevance: 0,
      match: t.concat("\\b(?!", S.join("|"), "\\b)", /[a-zA-Z_]\w*(?:[?!]|\b)/),
      className: "variable"
    };
  return {
    name: "Wren",
    keywords: {
      keyword: n,
      "variable.language": r,
      literal: i
    },
    contains: [{
      scope: "comment",
      variants: [{
        begin: [/#!?/, /[A-Za-z_]+(?=\()/],
        beginScope: {},
        keywords: {
          literal: i
        },
        contains: [],
        end: /\)/
      }, {
        begin: [/#!?/, /[A-Za-z_]+/],
        beginScope: {},
        end: /$/
      }]
    }, p, g, {
      className: "string",
      begin: /"""/,
      end: /"""/
    }, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, m, {
      variants: [{
        match: [/class\s+/, a, /\s+is\s+/, a]
      }, {
        match: [/class\s+/, a]
      }],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: n
    }, {
      match: [a, /\s*/, /=/, /\s*/, /\(/, a, /\)\s*\{/],
      scope: {
        1: "title.function",
        3: "operator",
        6: "params"
      }
    }, l, s, c, d, _, b]
  }
}