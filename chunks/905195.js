            e.exports = function(e) {
                let t = e.regex,
                    a = {
                        $pattern: /[\w.\/]+/,
                        built_in: ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
                    },
                    n = /\[\]|\[[^\]]+\]/,
                    i = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
                    r = t.either(/""|"[^"]+"/, /''|'[^']+'/, n, i),
                    o = t.concat(t.optional(/\.|\.\/|\//), r, t.anyNumberOfTimes(t.concat(/(\.|\/)/, r))),
                    s = t.concat("(", n, "|", i, ")(?==)"),
                    l = {
                        begin: o
                    },
                    c = e.inherit(l, {
                        keywords: {
                            $pattern: /[\w.\/]+/,
                            literal: ["true", "false", "undefined", "null"]
                        }
                    }),
                    _ = {
                        begin: /\(/,
                        end: /\)/
                    },
                    d = {
                        className: "attr",
                        begin: s,
                        relevance: 0,
                        starts: {
                            begin: /=/,
                            end: /=/,
                            starts: {
                                contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, c, _]
                            }
                        }
                    },
                    m = {
                        contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                            begin: /as\s+\|/,
                            keywords: {
                                keyword: "as"
                            },
                            end: /\|/,
                            contains: [{
                                begin: /\w+/
                            }]
                        }, d, c, _],
                        returnEnd: !0
                    },
                    p = e.inherit(l, {
                        className: "name",
                        keywords: a,
                        starts: e.inherit(m, {
                            end: /\)/
                        })
                    });
                _.contains = [p];
                let u = e.inherit(l, {
                        keywords: a,
                        className: "name",
                        starts: e.inherit(m, {
                            end: /\}\}/
                        })
                    }),
                    E = e.inherit(l, {
                        keywords: a,
                        className: "name"
                    }),
                    g = e.inherit(l, {
                        className: "name",
                        keywords: a,
                        starts: e.inherit(m, {
                            end: /\}\}/
                        })
                    });
                return {
                    name: "Handlebars",
                    aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
                    case_insensitive: !0,
                    subLanguage: "xml",
                    contains: [{
                        begin: /\\\{\{/,
                        skip: !0
                    }, {
                        begin: /\\\\(?=\{\{)/,
                        skip: !0
                    }, e.COMMENT(/\{\{!--/, /--\}\}/), e.COMMENT(/\{\{!/, /\}\}/), {
                        className: "template-tag",
                        begin: /\{\{\{\{(?!\/)/,
                        end: /\}\}\}\}/,
                        contains: [u],
                        starts: {
                            end: /\{\{\{\{\//,
                            returnEnd: !0,
                            subLanguage: "xml"
                        }
                    }, {
                        className: "template-tag",
                        begin: /\{\{\{\{\//,
                        end: /\}\}\}\}/,
                        contains: [E]
                    }, {
                        className: "template-tag",
                        begin: /\{\{#/,
                        end: /\}\}/,
                        contains: [u]
                    }, {
                        className: "template-tag",
                        begin: /\{\{(?=else\}\})/,
                        end: /\}\}/,
                        keywords: "else"
                    }, {
                        className: "template-tag",
                        begin: /\{\{(?=else if)/,
                        end: /\}\}/,
                        keywords: "else if"
                    }, {
                        className: "template-tag",
                        begin: /\{\{\//,
                        end: /\}\}/,
                        contains: [E]
                    }, {
                        className: "template-variable",
                        begin: /\{\{\{/,
                        end: /\}\}\}/,
                        contains: [g]
                    }, {
                        className: "template-variable",
                        begin: /\{\{/,
                        end: /\}\}/,
                        contains: [g]
                    }]
                }
            }