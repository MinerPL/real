            e.exports = function(e) {
                let t = e.regex,
                    a = "HTTP/(2|1\\.[01])",
                    n = {
                        className: "attribute",
                        begin: t.concat("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
                        starts: {
                            contains: [{
                                className: "punctuation",
                                begin: /: /,
                                relevance: 0,
                                starts: {
                                    end: "$",
                                    relevance: 0
                                }
                            }]
                        }
                    },
                    i = [n, {
                        begin: "\\n\\n",
                        starts: {
                            subLanguage: [],
                            endsWithParent: !0
                        }
                    }];
                return {
                    name: "HTTP",
                    aliases: ["https"],
                    illegal: /\S/,
                    contains: [{
                        begin: "^(?=" + a + " \\d{3})",
                        end: /$/,
                        contains: [{
                            className: "meta",
                            begin: a
                        }, {
                            className: "number",
                            begin: "\\b\\d{3}\\b"
                        }],
                        starts: {
                            end: /\b\B/,
                            illegal: /\S/,
                            contains: i
                        }
                    }, {
                        begin: "(?=^[A-Z]+ (.*?) " + a + "$)",
                        end: /$/,
                        contains: [{
                            className: "string",
                            begin: " ",
                            end: " ",
                            excludeBegin: !0,
                            excludeEnd: !0
                        }, {
                            className: "meta",
                            begin: a
                        }, {
                            className: "keyword",
                            begin: "[A-Z]+"
                        }],
                        starts: {
                            end: /\b\B/,
                            illegal: /\S/,
                            contains: i
                        }
                    }, e.inherit(n, {
                        relevance: 0
                    })]
                }
            }