            e.exports = function(e) {
                let t = e.regex,
                    a = "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
                    n = {
                        $pattern: a,
                        keyword: ["after", "alias", "and", "case", "catch", "cond", "defstruct", "defguard", "do", "else", "end", "fn", "for", "if", "import", "in", "not", "or", "quote", "raise", "receive", "require", "reraise", "rescue", "try", "unless", "unquote", "unquote_splicing", "use", "when", "with|0"],
                        literal: ["false", "nil", "true"]
                    },
                    i = {
                        className: "subst",
                        begin: /#\{/,
                        end: /\}/,
                        keywords: n
                    },
                    r = {
                        match: /\\[\s\S]/,
                        scope: "char.escape",
                        relevance: 0
                    },
                    o = "[/|([{<\"']",
                    s = [{
                        begin: /"/,
                        end: /"/
                    }, {
                        begin: /'/,
                        end: /'/
                    }, {
                        begin: /\//,
                        end: /\//
                    }, {
                        begin: /\|/,
                        end: /\|/
                    }, {
                        begin: /\(/,
                        end: /\)/
                    }, {
                        begin: /\[/,
                        end: /\]/
                    }, {
                        begin: /\{/,
                        end: /\}/
                    }, {
                        begin: /</,
                        end: />/
                    }],
                    l = e => ({
                        scope: "char.escape",
                        begin: t.concat(/\\/, e),
                        relevance: 0
                    }),
                    c = {
                        className: "string",
                        begin: "~[a-z](?=" + o + ")",
                        contains: s.map(t => e.inherit(t, {
                            contains: [l(t.end), r, i]
                        }))
                    },
                    _ = {
                        className: "string",
                        begin: "~[A-Z](?=" + o + ")",
                        contains: s.map(t => e.inherit(t, {
                            contains: [l(t.end)]
                        }))
                    },
                    d = {
                        className: "regex",
                        variants: [{
                            begin: "~r(?=" + o + ")",
                            contains: s.map(a => e.inherit(a, {
                                end: t.concat(a.end, /[uismxfU]{0,7}/),
                                contains: [l(a.end), r, i]
                            }))
                        }, {
                            begin: "~R(?=" + o + ")",
                            contains: s.map(a => e.inherit(a, {
                                end: t.concat(a.end, /[uismxfU]{0,7}/),
                                contains: [l(a.end)]
                            }))
                        }]
                    },
                    m = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE, i],
                        variants: [{
                            begin: /"""/,
                            end: /"""/
                        }, {
                            begin: /'''/,
                            end: /'''/
                        }, {
                            begin: /~S"""/,
                            end: /"""/,
                            contains: []
                        }, {
                            begin: /~S"/,
                            end: /"/,
                            contains: []
                        }, {
                            begin: /~S'''/,
                            end: /'''/,
                            contains: []
                        }, {
                            begin: /~S'/,
                            end: /'/,
                            contains: []
                        }, {
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }]
                    },
                    p = {
                        className: "function",
                        beginKeywords: "def defp defmacro defmacrop",
                        end: /\B\b/,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: a,
                            endsParent: !0
                        })]
                    },
                    u = e.inherit(p, {
                        className: "class",
                        beginKeywords: "defimpl defmodule defprotocol defrecord",
                        end: /\bdo\b|$|;/
                    }),
                    E = [m, d, _, c, e.HASH_COMMENT_MODE, u, p, {
                        begin: "::"
                    }, {
                        className: "symbol",
                        begin: ":(?![\\s:])",
                        contains: [m, {
                            begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
                        }],
                        relevance: 0
                    }, {
                        className: "symbol",
                        begin: a + ":(?!:)",
                        relevance: 0
                    }, {
                        className: "title.class",
                        begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
                        relevance: 0
                    }, {
                        className: "number",
                        begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
                        relevance: 0
                    }, {
                        className: "variable",
                        begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
                    }];
                return i.contains = E, {
                    name: "Elixir",
                    aliases: ["ex", "exs"],
                    keywords: n,
                    contains: E
                }
            }