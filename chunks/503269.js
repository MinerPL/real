            e.exports = function(e) {
                let t = "(_?[ui](8|16|32|64|128))?",
                    a = "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
                    n = "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
                    i = {
                        $pattern: "[a-zA-Z_]\\w*[!?=]?",
                        keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
                        literal: "false nil true"
                    },
                    r = {
                        className: "subst",
                        begin: /#\{/,
                        end: /\}/,
                        keywords: i
                    },
                    o = {
                        className: "template-variable",
                        variants: [{
                            begin: "\\{\\{",
                            end: "\\}\\}"
                        }, {
                            begin: "\\{%",
                            end: "%\\}"
                        }],
                        keywords: i
                    };

                function s(e, t) {
                    let a = [{
                        begin: e,
                        end: t
                    }];
                    return a[0].contains = a, a
                }
                let l = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE, r],
                        variants: [{
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /`/,
                            end: /`/
                        }, {
                            begin: "%[Qwi]?\\(",
                            end: "\\)",
                            contains: s("\\(", "\\)")
                        }, {
                            begin: "%[Qwi]?\\[",
                            end: "\\]",
                            contains: s("\\[", "\\]")
                        }, {
                            begin: "%[Qwi]?\\{",
                            end: /\}/,
                            contains: s(/\{/, /\}/)
                        }, {
                            begin: "%[Qwi]?<",
                            end: ">",
                            contains: s("<", ">")
                        }, {
                            begin: "%[Qwi]?\\|",
                            end: "\\|"
                        }, {
                            begin: /<<-\w+$/,
                            end: /^\s*\w+$/
                        }],
                        relevance: 0
                    },
                    c = {
                        className: "string",
                        variants: [{
                            begin: "%q\\(",
                            end: "\\)",
                            contains: s("\\(", "\\)")
                        }, {
                            begin: "%q\\[",
                            end: "\\]",
                            contains: s("\\[", "\\]")
                        }, {
                            begin: "%q\\{",
                            end: /\}/,
                            contains: s(/\{/, /\}/)
                        }, {
                            begin: "%q<",
                            end: ">",
                            contains: s("<", ">")
                        }, {
                            begin: "%q\\|",
                            end: "\\|"
                        }, {
                            begin: /<<-'\w+'$/,
                            end: /^\s*\w+$/
                        }],
                        relevance: 0
                    },
                    _ = {
                        begin: "(?!%\\})(" + e.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
                        keywords: "case if select unless until when while",
                        contains: [{
                            className: "regexp",
                            contains: [e.BACKSLASH_ESCAPE, r],
                            variants: [{
                                begin: "//[a-z]*",
                                relevance: 0
                            }, {
                                begin: "/(?!\\/)",
                                end: "/[a-z]*"
                            }]
                        }],
                        relevance: 0
                    },
                    d = {
                        className: "regexp",
                        contains: [e.BACKSLASH_ESCAPE, r],
                        variants: [{
                            begin: "%r\\(",
                            end: "\\)",
                            contains: s("\\(", "\\)")
                        }, {
                            begin: "%r\\[",
                            end: "\\]",
                            contains: s("\\[", "\\]")
                        }, {
                            begin: "%r\\{",
                            end: /\}/,
                            contains: s(/\{/, /\}/)
                        }, {
                            begin: "%r<",
                            end: ">",
                            contains: s("<", ">")
                        }, {
                            begin: "%r\\|",
                            end: "\\|"
                        }],
                        relevance: 0
                    },
                    m = {
                        className: "meta",
                        begin: "@\\[",
                        end: "\\]",
                        contains: [e.inherit(e.QUOTE_STRING_MODE, {
                            className: "string"
                        })]
                    },
                    p = [o, l, c, d, _, m, {
                        className: "variable",
                        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                    }, e.HASH_COMMENT_MODE, {
                        className: "class",
                        beginKeywords: "class module struct",
                        end: "$|;",
                        illegal: /=/,
                        contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
                            begin: n
                        }), {
                            begin: "<"
                        }]
                    }, {
                        className: "class",
                        beginKeywords: "lib enum union",
                        end: "$|;",
                        illegal: /=/,
                        contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
                            begin: n
                        })]
                    }, {
                        beginKeywords: "annotation",
                        end: "$|;",
                        illegal: /=/,
                        contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
                            begin: n
                        })],
                        relevance: 2
                    }, {
                        className: "function",
                        beginKeywords: "def",
                        end: /\B\b/,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: a,
                            endsParent: !0
                        })]
                    }, {
                        className: "function",
                        beginKeywords: "fun macro",
                        end: /\B\b/,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: a,
                            endsParent: !0
                        })],
                        relevance: 2
                    }, {
                        className: "symbol",
                        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                        relevance: 0
                    }, {
                        className: "symbol",
                        begin: ":",
                        contains: [l, {
                            begin: a
                        }],
                        relevance: 0
                    }, {
                        className: "number",
                        variants: [{
                            begin: "\\b0b([01_]+)" + t
                        }, {
                            begin: "\\b0o([0-7_]+)" + t
                        }, {
                            begin: "\\b0x([A-Fa-f0-9_]+)" + t
                        }, {
                            begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
                        }, {
                            begin: "\\b([1-9][0-9_]*|0)" + t
                        }],
                        relevance: 0
                    }];
                return r.contains = p, o.contains = p.slice(1), {
                    name: "Crystal",
                    aliases: ["cr"],
                    keywords: i,
                    contains: p
                }
            }