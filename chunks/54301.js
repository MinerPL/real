            a("222007"), a("70102"), a("424973");
            let n = "[A-Za-z$_][0-9A-Za-z$_]*",
                i = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                o = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                s = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                l = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                c = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                _ = [].concat(l, o, s);
            e.exports = function(e) {
                let t = function(e) {
                        var t;
                        let a = e.regex,
                            d = (e, t) => {
                                let {
                                    after: a
                                } = t, n = "</" + e[0].slice(1), i = e.input.indexOf(n, a);
                                return -1 !== i
                            },
                            m = {
                                begin: "<>",
                                end: "</>"
                            },
                            p = {
                                begin: /<[A-Za-z0-9\\._:-]+/,
                                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                                isTrulyOpeningTag: (e, t) => {
                                    let a;
                                    let n = e[0].length + e.index,
                                        i = e.input[n];
                                    if ("<" === i || "," === i) {
                                        t.ignoreMatch();
                                        return
                                    }
                                    ">" === i && !d(e, {
                                        after: n
                                    }) && t.ignoreMatch();
                                    let r = e.input.substring(n);
                                    if ((a = r.match(/^\s*=/)) || (a = r.match(/^\s+extends\s+/)) && 0 === a.index) {
                                        t.ignoreMatch();
                                        return
                                    }
                                }
                            },
                            u = {
                                $pattern: n,
                                keyword: i,
                                literal: r,
                                built_in: _,
                                "variable.language": c
                            },
                            E = "[0-9](_?[0-9])*",
                            g = "\\.(".concat(E, ")"),
                            S = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                            b = {
                                className: "number",
                                variants: [{
                                    begin: "(\\b(".concat(S, ")((").concat(g, ")|\\.)?|(").concat(g, "))") + "[eE][+-]?(".concat(E, ")\\b")
                                }, {
                                    begin: "\\b(".concat(S, ")\\b((").concat(g, ")\\b|\\.)?|(").concat(g, ")\\b")
                                }, {
                                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                                }, {
                                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                                }, {
                                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                                }, {
                                    begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                                }, {
                                    begin: "\\b0[0-7]+n?\\b"
                                }],
                                relevance: 0
                            },
                            T = {
                                className: "subst",
                                begin: "\\$\\{",
                                end: "\\}",
                                keywords: u,
                                contains: []
                            },
                            f = {
                                begin: "html`",
                                end: "",
                                starts: {
                                    end: "`",
                                    returnEnd: !1,
                                    contains: [e.BACKSLASH_ESCAPE, T],
                                    subLanguage: "xml"
                                }
                            },
                            C = {
                                begin: "css`",
                                end: "",
                                starts: {
                                    end: "`",
                                    returnEnd: !1,
                                    contains: [e.BACKSLASH_ESCAPE, T],
                                    subLanguage: "css"
                                }
                            },
                            R = {
                                className: "string",
                                begin: "`",
                                end: "`",
                                contains: [e.BACKSLASH_ESCAPE, T]
                            },
                            N = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                                relevance: 0,
                                contains: [{
                                    begin: "(?=@[A-Za-z]+)",
                                    relevance: 0,
                                    contains: [{
                                        className: "doctag",
                                        begin: "@[A-Za-z]+"
                                    }, {
                                        className: "type",
                                        begin: "\\{",
                                        end: "\\}",
                                        excludeEnd: !0,
                                        excludeBegin: !0,
                                        relevance: 0
                                    }, {
                                        className: "variable",
                                        begin: n + "(?=\\s*(-)|$)",
                                        endsParent: !0,
                                        relevance: 0
                                    }, {
                                        begin: /(?=[^\n])\s/,
                                        relevance: 0
                                    }]
                                }]
                            }),
                            O = {
                                className: "comment",
                                variants: [N, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                            },
                            h = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, C, R, {
                                match: /\$\d+/
                            }, b];
                        T.contains = h.concat({
                            begin: /\{/,
                            end: /\}/,
                            keywords: u,
                            contains: ["self"].concat(h)
                        });
                        let v = [].concat(O, T.contains),
                            I = v.concat([{
                                begin: /\(/,
                                end: /\)/,
                                keywords: u,
                                contains: ["self"].concat(v)
                            }]),
                            A = {
                                className: "params",
                                begin: /\(/,
                                end: /\)/,
                                excludeBegin: !0,
                                excludeEnd: !0,
                                keywords: u,
                                contains: I
                            },
                            y = {
                                variants: [{
                                    match: [/class/, /\s+/, n, /\s+/, /extends/, /\s+/, a.concat(n, "(", a.concat(/\./, n), ")*")],
                                    scope: {
                                        1: "keyword",
                                        3: "title.class",
                                        5: "keyword",
                                        7: "title.class.inherited"
                                    }
                                }, {
                                    match: [/class/, /\s+/, n],
                                    scope: {
                                        1: "keyword",
                                        3: "title.class"
                                    }
                                }]
                            },
                            D = {
                                relevance: 0,
                                match: a.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                                className: "title.class",
                                keywords: {
                                    _: [...o, ...s]
                                }
                            };
                        let M = {
                                match: a.concat(/\b/, (t = [...l, "super", "import"], a.concat("(?!", t.join("|"), ")")), n, a.lookahead(/\(/)),
                                className: "title.function",
                                relevance: 0
                            },
                            x = {
                                begin: a.concat(/\./, a.lookahead(a.concat(n, /(?![0-9A-Za-z$_(])/))),
                                end: n,
                                excludeBegin: !0,
                                keywords: "prototype",
                                className: "property",
                                relevance: 0
                            },
                            L = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                            w = {
                                match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, a.lookahead(L)],
                                keywords: "async",
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                contains: [A]
                            };
                        return {
                            name: "Javascript",
                            aliases: ["js", "jsx", "mjs", "cjs"],
                            keywords: u,
                            exports: {
                                PARAMS_CONTAINS: I,
                                CLASS_REFERENCE: D
                            },
                            illegal: /#(?![$_A-z])/,
                            contains: [e.SHEBANG({
                                label: "shebang",
                                binary: "node",
                                relevance: 5
                            }), {
                                label: "use_strict",
                                className: "meta",
                                relevance: 10,
                                begin: /^\s*['"]use (strict|asm)['"]/
                            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, f, C, R, O, {
                                match: /\$\d+/
                            }, b, D, {
                                className: "attr",
                                begin: n + a.lookahead(":"),
                                relevance: 0
                            }, w, {
                                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                                keywords: "return throw case",
                                relevance: 0,
                                contains: [O, e.REGEXP_MODE, {
                                    className: "function",
                                    begin: L,
                                    returnBegin: !0,
                                    end: "\\s*=>",
                                    contains: [{
                                        className: "params",
                                        variants: [{
                                            begin: e.UNDERSCORE_IDENT_RE,
                                            relevance: 0
                                        }, {
                                            className: null,
                                            begin: /\(\s*\)/,
                                            skip: !0
                                        }, {
                                            begin: /\(/,
                                            end: /\)/,
                                            excludeBegin: !0,
                                            excludeEnd: !0,
                                            keywords: u,
                                            contains: I
                                        }]
                                    }]
                                }, {
                                    begin: /,/,
                                    relevance: 0
                                }, {
                                    match: /\s+/,
                                    relevance: 0
                                }, {
                                    variants: [{
                                        begin: m.begin,
                                        end: m.end
                                    }, {
                                        match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                    }, {
                                        begin: p.begin,
                                        "on:begin": p.isTrulyOpeningTag,
                                        end: p.end
                                    }],
                                    subLanguage: "xml",
                                    contains: [{
                                        begin: p.begin,
                                        end: p.end,
                                        skip: !0,
                                        contains: ["self"]
                                    }]
                                }]
                            }, {
                                variants: [{
                                    match: [/function/, /\s+/, n, /(?=\s*\()/]
                                }, {
                                    match: [/function/, /\s*(?=\()/]
                                }],
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                label: "func.def",
                                contains: [A],
                                illegal: /%/
                            }, {
                                beginKeywords: "while if switch catch for"
                            }, {
                                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                                returnBegin: !0,
                                label: "func.def",
                                contains: [A, e.inherit(e.TITLE_MODE, {
                                    begin: n,
                                    className: "title.function"
                                })]
                            }, {
                                match: /\.\.\./,
                                relevance: 0
                            }, x, {
                                match: "\\$" + n,
                                relevance: 0
                            }, {
                                match: [/\bconstructor(?=\s*\()/],
                                className: {
                                    1: "title.function"
                                },
                                contains: [A]
                            }, M, {
                                relevance: 0,
                                match: /\b[A-Z][A-Z_0-9]+\b/,
                                className: "variable.constant"
                            }, y, {
                                match: [/get|set/, /\s+/, n, /(?=\()/],
                                className: {
                                    1: "keyword",
                                    3: "title.function"
                                },
                                contains: [{
                                    begin: /\(\)/
                                }, A]
                            }, {
                                match: /\$[(.]/
                            }]
                        }
                    }(e),
                    a = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
                    d = {
                        beginKeywords: "namespace",
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [t.exports.CLASS_REFERENCE]
                    },
                    m = {
                        beginKeywords: "interface",
                        end: /\{/,
                        excludeEnd: !0,
                        keywords: {
                            keyword: "interface extends",
                            built_in: a
                        },
                        contains: [t.exports.CLASS_REFERENCE]
                    },
                    p = {
                        $pattern: n,
                        keyword: i.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                        literal: r,
                        built_in: _.concat(a),
                        "variable.language": c
                    },
                    u = {
                        className: "meta",
                        begin: "@" + n
                    },
                    E = (e, t, a) => {
                        let n = e.contains.findIndex(e => e.label === t);
                        if (-1 === n) throw Error("can not find mode to replace");
                        e.contains.splice(n, 1, a)
                    };
                Object.assign(t.keywords, p), t.exports.PARAMS_CONTAINS.push(u), t.contains = t.contains.concat([u, d, m]), E(t, "shebang", e.SHEBANG()), E(t, "use_strict", {
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use strict['"]/
                });
                let g = t.contains.find(e => "func.def" === e.label);
                return g.relevance = 0, Object.assign(t, {
                    name: "TypeScript",
                    aliases: ["ts", "tsx"]
                }), t
            }