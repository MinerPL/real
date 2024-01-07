            a("424973");
            e.exports = function(e) {
                let t = e.regex,
                    a = {
                        begin: /<\/?[A-Za-z_]/,
                        end: ">",
                        subLanguage: "xml",
                        relevance: 0
                    },
                    n = {
                        variants: [{
                            begin: /\[.+?\]\[.*?\]/,
                            relevance: 0
                        }, {
                            begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                            relevance: 2
                        }, {
                            begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                            relevance: 2
                        }, {
                            begin: /\[.+?\]\([./?&#].*?\)/,
                            relevance: 1
                        }, {
                            begin: /\[.*?\]\(.*?\)/,
                            relevance: 0
                        }],
                        returnBegin: !0,
                        contains: [{
                            match: /\[(?=\])/
                        }, {
                            className: "string",
                            relevance: 0,
                            begin: "\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            returnEnd: !0
                        }, {
                            className: "link",
                            relevance: 0,
                            begin: "\\]\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "symbol",
                            relevance: 0,
                            begin: "\\]\\[",
                            end: "\\]",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }]
                    },
                    i = {
                        className: "strong",
                        contains: [],
                        variants: [{
                            begin: /_{2}(?!\s)/,
                            end: /_{2}/
                        }, {
                            begin: /\*{2}(?!\s)/,
                            end: /\*{2}/
                        }]
                    },
                    r = {
                        className: "emphasis",
                        contains: [],
                        variants: [{
                            begin: /\*(?![*\s])/,
                            end: /\*/
                        }, {
                            begin: /_(?![_\s])/,
                            end: /_/,
                            relevance: 0
                        }]
                    },
                    o = e.inherit(i, {
                        contains: []
                    }),
                    s = e.inherit(r, {
                        contains: []
                    });
                i.contains.push(s), r.contains.push(o);
                let l = [a, n];
                [i, r, o, s].forEach(e => {
                    e.contains = e.contains.concat(l)
                }), l = l.concat(i, r);
                let c = {
                        className: "section",
                        variants: [{
                            begin: "^#{1,6}",
                            end: "$",
                            contains: l
                        }, {
                            begin: "(?=^.+?\\n[=-]{2,}$)",
                            contains: [{
                                begin: "^[=-]*$"
                            }, {
                                begin: "^",
                                end: "\\n",
                                contains: l
                            }]
                        }]
                    },
                    _ = {
                        className: "quote",
                        begin: "^>\\s+",
                        contains: l,
                        end: "$"
                    };
                return {
                    name: "Markdown",
                    aliases: ["md", "mkdown", "mkd"],
                    contains: [c, a, {
                        className: "bullet",
                        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                        end: "\\s+",
                        excludeEnd: !0
                    }, i, r, _, {
                        className: "code",
                        variants: [{
                            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                        }, {
                            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                        }, {
                            begin: "```",
                            end: "```+[ ]*$"
                        }, {
                            begin: "~~~",
                            end: "~~~+[ ]*$"
                        }, {
                            begin: "`.+?`"
                        }, {
                            begin: "(?=^( {4}|\\t))",
                            contains: [{
                                begin: "^( {4}|\\t)",
                                end: "(\\n)$"
                            }],
                            relevance: 0
                        }]
                    }, {
                        begin: "^[-\\*]{3,}",
                        end: "$"
                    }, n, {
                        begin: /^\[[^\n]+\]:/,
                        returnBegin: !0,
                        contains: [{
                            className: "symbol",
                            begin: /\[/,
                            end: /\]/,
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "link",
                            begin: /:\s*/,
                            end: /$/,
                            excludeBegin: !0
                        }]
                    }]
                }
            }