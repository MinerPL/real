            e.exports = function(e) {
                let t = "[a-z'][a-zA-Z0-9_']*",
                    a = "(" + t + ":" + t + "|" + t + ")",
                    n = {
                        keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
                        literal: "false true"
                    },
                    i = e.COMMENT("%", "$"),
                    r = {
                        className: "number",
                        begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
                        relevance: 0
                    },
                    o = {
                        begin: "fun\\s+" + t + "/\\d+"
                    },
                    s = {
                        begin: a + "\\(",
                        end: "\\)",
                        returnBegin: !0,
                        relevance: 0,
                        contains: [{
                            begin: a,
                            relevance: 0
                        }, {
                            begin: "\\(",
                            end: "\\)",
                            endsWithParent: !0,
                            returnEnd: !0,
                            relevance: 0
                        }]
                    },
                    l = {
                        begin: /\{/,
                        end: /\}/,
                        relevance: 0
                    },
                    c = {
                        begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
                        relevance: 0
                    },
                    _ = {
                        begin: "[A-Z][a-zA-Z0-9_]*",
                        relevance: 0
                    },
                    d = {
                        begin: "#" + e.UNDERSCORE_IDENT_RE,
                        relevance: 0,
                        returnBegin: !0,
                        contains: [{
                            begin: "#" + e.UNDERSCORE_IDENT_RE,
                            relevance: 0
                        }, {
                            begin: /\{/,
                            end: /\}/,
                            relevance: 0
                        }]
                    },
                    m = {
                        beginKeywords: "fun receive if try case",
                        end: "end",
                        keywords: n
                    };
                m.contains = [i, o, e.inherit(e.APOS_STRING_MODE, {
                    className: ""
                }), m, s, e.QUOTE_STRING_MODE, r, l, c, _, d];
                let p = [i, o, m, s, e.QUOTE_STRING_MODE, r, l, c, _, d];
                s.contains[1].contains = p, l.contains = p, d.contains[1].contains = p;
                let u = {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: p
                };
                return {
                    name: "Erlang",
                    aliases: ["erl"],
                    keywords: n,
                    illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
                    contains: [{
                        className: "function",
                        begin: "^" + t + "\\s*\\(",
                        end: "->",
                        returnBegin: !0,
                        illegal: "\\(|#|//|/\\*|\\\\|:|;",
                        contains: [u, e.inherit(e.TITLE_MODE, {
                            begin: t
                        })],
                        starts: {
                            end: ";|\\.",
                            keywords: n,
                            contains: p
                        }
                    }, i, {
                        begin: "^-",
                        end: "\\.",
                        relevance: 0,
                        excludeEnd: !0,
                        returnBegin: !0,
                        keywords: {
                            $pattern: "-" + e.IDENT_RE,
                            keyword: ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"].map(e => "".concat(e, "|1.5")).join(" ")
                        },
                        contains: [u]
                    }, r, e.QUOTE_STRING_MODE, d, c, _, l, {
                        begin: /\.$/
                    }]
                }
            }