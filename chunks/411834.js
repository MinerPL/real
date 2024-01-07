            a("424973");
            e.exports = function(e) {
                let t = "~?[a-z$_][0-9a-zA-Z$_]*",
                    a = "`?[A-Z$_][0-9a-zA-Z$_]*",
                    n = "'?[a-z$_][0-9a-z$_]*",
                    i = "(" + ["||", "++", "**", "+.", "*", "/", "*.", "/.", "..."].map(function(e) {
                        return e.split("").map(function(e) {
                            return "\\" + e
                        }).join("")
                    }).join("|") + "|\\|>|&&|==|===)",
                    r = {
                        keyword: "and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",
                        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
                        literal: "true false"
                    },
                    o = "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
                    s = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: o
                        }, {
                            begin: "\\(-" + o + "\\)"
                        }]
                    },
                    l = {
                        className: "operator",
                        relevance: 0,
                        begin: i
                    },
                    c = [{
                        className: "identifier",
                        relevance: 0,
                        begin: t
                    }, l, s],
                    _ = [e.QUOTE_STRING_MODE, l, {
                        className: "module",
                        begin: "\\b" + a,
                        returnBegin: !0,
                        relevance: 0,
                        end: ".",
                        contains: [{
                            className: "identifier",
                            begin: a,
                            relevance: 0
                        }]
                    }],
                    d = [{
                        className: "module",
                        begin: "\\b" + a,
                        returnBegin: !0,
                        end: ".",
                        relevance: 0,
                        contains: [{
                            className: "identifier",
                            begin: a,
                            relevance: 0
                        }]
                    }],
                    m = {
                        className: "function",
                        relevance: 0,
                        keywords: r,
                        variants: [{
                            begin: "\\s(\\(\\.?.*?\\)|" + t + ")\\s*=>",
                            end: "\\s*=>",
                            returnBegin: !0,
                            relevance: 0,
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: t
                                }, {
                                    begin: t + "(" + ("\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(" + n + "\\s*(," + n) + "\\s*)*)?\\))?){0,2}"
                                }, {
                                    begin: /\(\s*\)/
                                }]
                            }]
                        }, {
                            begin: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
                            end: "\\s=>",
                            returnBegin: !0,
                            relevance: 0,
                            contains: [{
                                className: "params",
                                relevance: 0,
                                variants: [{
                                    begin: t,
                                    end: "(,|\\n|\\))",
                                    relevance: 0,
                                    contains: [l, {
                                        className: "typing",
                                        begin: ":",
                                        end: "(,|\\n)",
                                        returnBegin: !0,
                                        relevance: 0,
                                        contains: d
                                    }]
                                }]
                            }]
                        }, {
                            begin: "\\(\\.\\s" + t + "\\)\\s*=>"
                        }]
                    };
                _.push(m);
                let p = {
                        className: "constructor",
                        begin: a + "\\(",
                        end: "\\)",
                        illegal: "\\n",
                        keywords: r,
                        contains: [e.QUOTE_STRING_MODE, l, {
                            className: "params",
                            begin: "\\b" + t
                        }]
                    },
                    u = {
                        className: "module-access",
                        keywords: r,
                        returnBegin: !0,
                        variants: [{
                            begin: "\\b(" + a + "\\.)+" + t
                        }, {
                            begin: "\\b(" + a + "\\.)+\\(",
                            end: "\\)",
                            returnBegin: !0,
                            contains: [m, {
                                begin: "\\(",
                                end: "\\)",
                                relevance: 0,
                                skip: !0
                            }].concat(_)
                        }, {
                            begin: "\\b(" + a + "\\.)+\\{",
                            end: /\}/
                        }],
                        contains: _
                    };
                return d.push(u), {
                    name: "ReasonML",
                    aliases: ["re"],
                    keywords: r,
                    illegal: "(:-|:=|\\$\\{|\\+=)",
                    contains: [e.COMMENT("/\\*", "\\*/", {
                        illegal: "^(#,\\/\\/)"
                    }), {
                        className: "character",
                        begin: "'(\\\\[^']+|[^'])'",
                        illegal: "\\n",
                        relevance: 0
                    }, e.QUOTE_STRING_MODE, {
                        className: "literal",
                        begin: "\\(\\)",
                        relevance: 0
                    }, {
                        className: "literal",
                        begin: "\\[\\|",
                        end: "\\|\\]",
                        relevance: 0,
                        contains: c
                    }, {
                        className: "literal",
                        begin: "\\[",
                        end: "\\]",
                        relevance: 0,
                        contains: c
                    }, p, {
                        className: "operator",
                        begin: "\\s+" + i + "\\s+",
                        illegal: "-->",
                        relevance: 0
                    }, s, e.C_LINE_COMMENT_MODE, {
                        className: "pattern-match",
                        begin: "\\|",
                        returnBegin: !0,
                        keywords: r,
                        end: "=>",
                        relevance: 0,
                        contains: [p, l, {
                            relevance: 0,
                            className: "constructor",
                            begin: a
                        }]
                    }, m, {
                        className: "module-def",
                        begin: "\\bmodule\\s+" + t + "\\s+" + a + "\\s+=\\s+\\{",
                        end: /\}/,
                        returnBegin: !0,
                        keywords: r,
                        relevance: 0,
                        contains: [{
                            className: "module",
                            relevance: 0,
                            begin: a
                        }, {
                            begin: /\{/,
                            end: /\}/,
                            relevance: 0,
                            skip: !0
                        }].concat(_)
                    }, u]
                }
            }