            var r, a;
            e = n.nmd(e), n("854508"), n("781738"), n("222007"), n("424973"), n("70102"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), r = this, a = function() {
                "use strict";
                var e, t, n, r, a, o, i, s, u = /\r\n?/g,
                    l = /\t/g,
                    c = /\f/g,
                    d = function(e) {
                        return e.replace(u, "\n").replace(c, "").replace(l, "    ")
                    },
                    f = function(e, t) {
                        var n = e || {};
                        if (null != t)
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                        return n
                    },
                    p = function(e, t) {
                        var n, r = Object.keys(e).filter(function(t) {
                            var n = e[t];
                            if (null == n || null == n.match) return !1;
                            var r = n.order;
                            return ("number" != typeof r || !isFinite(r)) && "undefined" != typeof console && console.warn("simple-markdown: Invalid order for rule `" + t + "`: " + String(r)), !0
                        });
                        r.sort(function(t, n) {
                            var r = e[t],
                                a = e[n],
                                o = r.order,
                                i = a.order;
                            if (o !== i) return o - i;
                            var s = r.quality ? 0 : 1,
                                u = a.quality ? 0 : 1;
                            if (s !== u) return s - u;
                            if (t < n) return -1;
                            if (t > n) return 1;
                            else return 0
                        });
                        for (var a = new Map, o = [], i = 0; i < r.length; i++) {
                            var s = r[i],
                                u = e[s].requiredFirstCharacters;
                            null == u ? o.push(s) : u.map(e => {
                                let t = e.charCodeAt(0);
                                !a.has(t) && a.set(t, []), a.get(t).push(s)
                            })
                        }
                        var l = function(t, i) {
                            var s = [];
                            for (n = i = i || n; t;) {
                                for (var u = null, c = null, d = null, f = -1e5, p = 1e5, m = [a.get(t.charCodeAt(0)), o], h = 0; h < m.length; h++) {
                                    var _ = m[h];
                                    if (null != _)
                                        for (var y = 0; y < _.length; y++) {
                                            var g = _[y],
                                                v = e[g],
                                                b = v.order;
                                            if (b > p) break;
                                            var M = null == i.prevCapture ? "" : i.prevCapture[0],
                                                w = v.match(t, i, M);
                                            if (w) {
                                                var k = v.quality ? v.quality(w, i, M) : 0;
                                                (b < p || k > f) && (u = g, c = v, d = w, f = k, p = b)
                                            }
                                        }
                                }
                                if (null == c || null == d) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + r[r.length - 1] + "'. It seems to not match the following source:\n" + t);
                                if (d.index) throw Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
                                var L = c.parse(d, l, i);
                                Array.isArray(L) ? Array.prototype.push.apply(s, L) : (null == L.type && (L.type = u), s.push(L)), i.prevCapture = d, t = t.substring(i.prevCapture[0].length)
                            }
                            return s
                        };
                        return function(e, r) {
                            return !(n = f(r, t)).inline && !n.disableAutoBlockNewlines && (e += "\n\n"), n.prevCapture = null, l(d(e), n)
                        }
                    },
                    m = function(e) {
                        var t = function(t, n) {
                            return n.inline ? e.exec(t) : null
                        };
                        return t.regex = e, t
                    },
                    h = function(e) {
                        var t = function(t, n) {
                            return n.inline ? null : e.exec(t)
                        };
                        return t.regex = e, t
                    },
                    _ = function(e) {
                        var t = function(t, n) {
                            return e.exec(t)
                        };
                        return t.regex = e, t
                    },
                    y = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                    g = function(e, t, n) {
                        return {
                            $$typeof: y,
                            type: e,
                            key: null == t ? void 0 : t,
                            ref: null,
                            props: n,
                            _owner: null
                        }
                    },
                    v = function(e, t, n, r) {
                        r = void 0 === r || r;
                        var a = "";
                        for (var o in n = n || {}) {
                            var i = n[o];
                            Object.prototype.hasOwnProperty.call(n, o) && i && (a += " " + L(o) + '="' + L(i) + '"')
                        }
                        var s = "<" + e + a + ">";
                        return r ? s + t + "</" + e + ">" : s
                    },
                    b = {},
                    M = function(e) {
                        if (null == e) return null;
                        try {
                            var t = new URL(e, "https://localhost").protocol;
                            if (0 === t.indexOf("javascript:") || 0 === t.indexOf("vbscript:") || 0 === t.indexOf("data:")) return null
                        } catch (e) {
                            return null
                        }
                        return e
                    },
                    w = /[<>&"']/g,
                    k = {
                        "<": "&lt;",
                        ">": "&gt;",
                        "&": "&amp;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "/": "&#x2F;",
                        "`": "&#96;"
                    },
                    L = function(e) {
                        return String(e).replace(w, function(e) {
                            return k[e]
                        })
                    },
                    D = /\\([^0-9A-Za-z\s])/g,
                    T = function(e) {
                        return e.replace(D, "$1")
                    },
                    S = function(e, t, n) {
                        var r = n.inline || !1;
                        n.inline = !0;
                        var a = e(t, n);
                        return n.inline = r, a
                    },
                    Y = function(e, t, n) {
                        return {
                            content: S(t, e[1], n)
                        }
                    },
                    x = function() {
                        return {}
                    },
                    O = "(?:[*+-]|\\d+\\.)",
                    E = "( *)(" + O + ") +",
                    P = RegExp("^" + E),
                    j = RegExp(E + "[^\\n]*(?:\\n(?!\\1" + O + " )[^\\n]*)*(\n|$)", "gm"),
                    C = /\n{2,}$/,
                    H = /^ (?= *`)|(` *) $/g,
                    F = / *\n+$/,
                    N = RegExp("^( *)(" + O + ") [\\s\\S]+?(?:\n{2,}(?! )(?!\\1" + O + " )\\n*|\\s*\n*$)"),
                    I = /(?:^|\n)( *)$/;
                var A = (e = /^ *\| *| *\| *$/g, t = / *$/, n = /^ *-+: *$/, r = /^ *:-+: *$/, a = /^ *:-+ *$/, o = function(e) {
                        if (n.test(e)) return "right";
                        if (r.test(e)) return "center";
                        if (a.test(e)) return "left";
                        else return null
                    }, i = function(e, n, r, a) {
                        var o = r.inTable;
                        r.inTable = !0;
                        var i = n(e.trim(), r);
                        r.inTable = o;
                        var s = [
                            []
                        ];
                        return i.forEach(function(e, n) {
                            "tableSeparator" === e.type ? (!a || 0 !== n && n !== i.length - 1) && s.push([]) : ("text" === e.type && (null == i[n + 1] || "tableSeparator" === i[n + 1].type) && (e.content = e.content.replace(t, "")), s[s.length - 1].push(e))
                        }), s
                    }, {
                        parseTable: (s = function(t) {
                            return function(n, r, a) {
                                a.inline = !0;
                                var s, u, l, c, d, f, p, m = i(n[1], r, a, t);
                                var h = (s = n[2], u = 0, l = 0, t && (s = s.replace(e, "")), s.trim().split("|").map(o));
                                var _ = (c = n[3], d = r, f = a, p = t, c.trim().split("\n").map(function(e) {
                                    return i(e, d, f, p)
                                }));
                                return a.inline = !1, {
                                    type: "table",
                                    header: m,
                                    align: h,
                                    cells: _
                                }
                            }
                        })(!0),
                        parseNpTable: s(!1),
                        TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                        NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                    }),
                    R = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",
                    z = "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",
                    W = /mailto:/i,
                    B = function(e, t, n) {
                        var r = (e[2] || e[1]).replace(/\s+/g, " ").toLowerCase();
                        if (t._defs && t._defs[r]) {
                            var a = t._defs[r];
                            n.target = a.target, n.title = a.title
                        }
                        return t._refs = t._refs || {}, t._refs[r] = t._refs[r] || [], t._refs[r].push(n), n
                    },
                    U = 0,
                    K = {
                        Array: {
                            react: function(e, t, n) {
                                for (var r = n.key, a = [], o = 0, i = 0; o < e.length; o++, i++) {
                                    n.key = "" + o;
                                    var s = e[o];
                                    if ("text" === s.type)
                                        for (s = {
                                                type: "text",
                                                content: s.content
                                            }; o + 1 < e.length && "text" === e[o + 1].type; o++) s.content += e[o + 1].content;
                                    a.push(t(s, n))
                                }
                                return n.key = r, a
                            },
                            html: function(e, t, n) {
                                for (var r = "", a = 0; a < e.length; a++) {
                                    var o = e[a];
                                    if ("text" === o.type)
                                        for (o = {
                                                type: "text",
                                                content: o.content
                                            }; a + 1 < e.length && "text" === e[a + 1].type; a++) o.content += e[a + 1].content;
                                    r += t(o, n)
                                }
                                return r
                            }
                        },
                        heading: {
                            order: U++,
                            match: h(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                            parse: function(e, t, n) {
                                return {
                                    level: e[1].length,
                                    content: S(t, e[2].trim(), n)
                                }
                            },
                            react: function(e, t, n) {
                                return g("h" + e.level, n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("h" + e.level, t(e.content, n))
                            }
                        },
                        nptable: {
                            order: U++,
                            match: h(A.NPTABLE_REGEX),
                            parse: A.parseNpTable,
                            react: null,
                            html: null
                        },
                        lheading: {
                            order: U++,
                            match: h(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                            parse: function(e, t, n) {
                                return {
                                    type: "heading",
                                    level: "=" === e[2] ? 1 : 2,
                                    content: S(t, e[1], n)
                                }
                            },
                            react: null,
                            html: null
                        },
                        hr: {
                            order: U++,
                            match: h(/^( *[-*_]){3,} *(?:\n *)+\n/),
                            parse: x,
                            react: function(e, t, n) {
                                return g("hr", n.key, b)
                            },
                            html: function(e, t, n) {
                                return "<hr>"
                            }
                        },
                        codeBlock: {
                            order: U++,
                            match: h(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                            parse: function(e, t, n) {
                                return {
                                    lang: void 0,
                                    content: e[0].replace(/^    /gm, "").replace(/\n+$/, "")
                                }
                            },
                            react: function(e, t, n) {
                                var r = e.lang ? "markdown-code-" + e.lang : void 0;
                                return g("pre", n.key, {
                                    children: g("code", null, {
                                        className: r,
                                        children: e.content
                                    })
                                })
                            },
                            html: function(e, t, n) {
                                var r = e.lang ? "markdown-code-" + e.lang : void 0,
                                    a = v("code", L(e.content), {
                                        class: r
                                    });
                                return v("pre", a)
                            }
                        },
                        fence: {
                            order: U++,
                            match: h(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                            parse: function(e, t, n) {
                                return {
                                    type: "codeBlock",
                                    lang: e[2] || void 0,
                                    content: e[3]
                                }
                            },
                            react: null,
                            html: null
                        },
                        blockQuote: {
                            order: U++,
                            match: h(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[0].replace(/^ *> ?/gm, ""), n)
                                }
                            },
                            react: function(e, t, n) {
                                return g("blockquote", n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("blockquote", t(e.content, n))
                            }
                        },
                        list: {
                            order: U++,
                            match: function(e, t) {
                                var n = null == t.prevCapture ? "" : t.prevCapture[0],
                                    r = I.exec(n),
                                    a = t._list || !t.inline;
                                return r && a ? (e = r[1] + e, N.exec(e)) : null
                            },
                            parse: function(e, t, n) {
                                var r = e[2],
                                    a = r.length > 1,
                                    o = e[0].replace(C, "\n").match(j),
                                    i = !1;
                                return {
                                    ordered: a,
                                    start: a ? +r : void 0,
                                    items: o.map(function(e, r) {
                                        var a, s = P.exec(e),
                                            u = RegExp("^ {1," + (s ? s[0].length : 0) + "}", "gm"),
                                            l = e.replace(u, "").replace(P, ""),
                                            c = r === o.length - 1,
                                            d = -1 !== l.indexOf("\n\n") || c && i;
                                        i = d;
                                        var f = n.inline,
                                            p = n._list;
                                        n._list = !0, d ? (n.inline = !1, a = l.replace(F, "\n\n")) : (n.inline = !0, a = l.replace(F, ""));
                                        var m = t(a, n);
                                        return n.inline = f, n._list = p, m
                                    })
                                }
                            },
                            react: function(e, t, n) {
                                return g(e.ordered ? "ol" : "ul", n.key, {
                                    start: e.start,
                                    children: e.items.map(function(e, r) {
                                        return g("li", "" + r, {
                                            children: t(e, n)
                                        })
                                    })
                                })
                            },
                            html: function(e, t, n) {
                                var r = e.items.map(function(e) {
                                    return v("li", t(e, n))
                                }).join("");
                                return v(e.ordered ? "ol" : "ul", r, {
                                    start: e.start
                                })
                            }
                        },
                        def: {
                            order: U++,
                            match: h(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                            parse: function(e, t, n) {
                                var r = e[1].replace(/\s+/g, " ").toLowerCase(),
                                    a = e[2],
                                    o = e[3];
                                return n._refs && n._refs[r] && n._refs[r].forEach(function(e) {
                                    e.target = a, e.title = o
                                }), n._defs = n._defs || {}, n._defs[r] = {
                                    target: a,
                                    title: o
                                }, {
                                    def: r,
                                    target: a,
                                    title: o
                                }
                            },
                            react: function() {
                                return null
                            },
                            html: function() {
                                return ""
                            }
                        },
                        table: {
                            order: U++,
                            match: h(A.TABLE_REGEX),
                            parse: A.parseTable,
                            react: function(e, t, n) {
                                var r = function(t) {
                                        return null == e.align[t] ? {} : {
                                            textAlign: e.align[t]
                                        }
                                    },
                                    a = e.header.map(function(e, a) {
                                        return g("th", "" + a, {
                                            style: r(a),
                                            scope: "col",
                                            children: t(e, n)
                                        })
                                    }),
                                    o = e.cells.map(function(e, a) {
                                        return g("tr", "" + a, {
                                            children: e.map(function(e, a) {
                                                return g("td", "" + a, {
                                                    style: r(a),
                                                    children: t(e, n)
                                                })
                                            })
                                        })
                                    });
                                return g("table", n.key, {
                                    children: [g("thead", "thead", {
                                        children: g("tr", null, {
                                            children: a
                                        })
                                    }), g("tbody", "tbody", {
                                        children: o
                                    })]
                                })
                            },
                            html: function(e, t, n) {
                                var r = function(t) {
                                        return null == e.align[t] ? "" : "text-align:" + e.align[t] + ";"
                                    },
                                    a = e.header.map(function(e, a) {
                                        return v("th", t(e, n), {
                                            style: r(a),
                                            scope: "col"
                                        })
                                    }).join(""),
                                    o = e.cells.map(function(e) {
                                        var a = e.map(function(e, a) {
                                            return v("td", t(e, n), {
                                                style: r(a)
                                            })
                                        }).join("");
                                        return v("tr", a)
                                    }).join(""),
                                    i = v("thead", v("tr", a)),
                                    s = v("tbody", o);
                                return v("table", i + s)
                            }
                        },
                        newline: {
                            order: U++,
                            requiredFirstCharacters: ["\n"],
                            match: h(/^(?:\n *)*\n/),
                            parse: x,
                            react: function(e, t, n) {
                                return "\n"
                            },
                            html: function(e, t, n) {
                                return "\n"
                            }
                        },
                        paragraph: {
                            order: U++,
                            match: h(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                            parse: Y,
                            react: function(e, t, n) {
                                return g("div", n.key, {
                                    className: "paragraph",
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("div", t(e.content, n), {
                                    class: "paragraph"
                                })
                            }
                        },
                        escape: {
                            order: U++,
                            requiredFirstCharacters: ["\\"],
                            match: m(/^\\([^0-9A-Za-z\s])/),
                            parse: function(e, t, n) {
                                return {
                                    type: "text",
                                    content: e[1]
                                }
                            },
                            react: null,
                            html: null
                        },
                        tableSeparator: {
                            order: U++,
                            match: function(e, t) {
                                return t.inTable ? /^ *\| */.exec(e) : null
                            },
                            parse: function() {
                                return {
                                    type: "tableSeparator"
                                }
                            },
                            react: function() {
                                return " | "
                            },
                            html: function() {
                                return " &vert; "
                            }
                        },
                        autolink: {
                            order: U++,
                            requiredFirstCharacters: ["<"],
                            match: m(/^<([^: >]+:\/[^ >]+)>/),
                            parse: function(e, t, n) {
                                return {
                                    type: "link",
                                    content: [{
                                        type: "text",
                                        content: e[1]
                                    }],
                                    target: e[1]
                                }
                            },
                            react: null,
                            html: null
                        },
                        mailto: {
                            order: U++,
                            match: m(/^<([^ >]+@[^ >]+)>/),
                            parse: function(e, t, n) {
                                var r = e[1],
                                    a = e[1];
                                return !W.test(a) && (a = "mailto:" + a), {
                                    type: "link",
                                    content: [{
                                        type: "text",
                                        content: r
                                    }],
                                    target: a
                                }
                            },
                            react: null,
                            html: null
                        },
                        url: {
                            order: U++,
                            requiredFirstCharacters: ["h"],
                            match: m(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                            parse: function(e, t, n) {
                                return {
                                    type: "link",
                                    content: [{
                                        type: "text",
                                        content: e[1]
                                    }],
                                    target: e[1],
                                    title: void 0
                                }
                            },
                            react: null,
                            html: null
                        },
                        link: {
                            order: U++,
                            requiredFirstCharacters: ["["],
                            match: m(RegExp("^\\[(" + R + ")\\]\\(" + z + "\\)")),
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[1], n),
                                    target: T(e[2]),
                                    title: e[3]
                                }
                            },
                            react: function(e, t, n) {
                                return g("a", n.key, {
                                    href: M(e.target),
                                    title: e.title,
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                var r = {
                                    href: M(e.target),
                                    title: e.title
                                };
                                return v("a", t(e.content, n), r)
                            }
                        },
                        image: {
                            order: U++,
                            match: m(RegExp("^!\\[(" + R + ")\\]\\(" + z + "\\)")),
                            parse: function(e, t, n) {
                                return {
                                    alt: e[1],
                                    target: T(e[2]),
                                    title: e[3]
                                }
                            },
                            react: function(e, t, n) {
                                return g("img", n.key, {
                                    src: M(e.target),
                                    alt: e.alt,
                                    title: e.title
                                })
                            },
                            html: function(e, t, n) {
                                return v("img", "", {
                                    src: M(e.target),
                                    alt: e.alt,
                                    title: e.title
                                }, !1)
                            }
                        },
                        reflink: {
                            order: U++,
                            match: m(RegExp("^\\[(" + R + ")\\]\\s*\\[([^\\]]*)\\]")),
                            parse: function(e, t, n) {
                                return B(e, n, {
                                    type: "link",
                                    content: t(e[1], n)
                                })
                            },
                            react: null,
                            html: null
                        },
                        refimage: {
                            order: U++,
                            match: m(RegExp("^!\\[(" + R + ")\\]\\s*\\[([^\\]]*)\\]")),
                            parse: function(e, t, n) {
                                return B(e, n, {
                                    type: "image",
                                    alt: e[1]
                                })
                            },
                            react: null,
                            html: null
                        },
                        em: {
                            order: U,
                            match: m(RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),
                            quality: function(e) {
                                return e[0].length + .2
                            },
                            parse: function(e, t, n) {
                                return {
                                    content: t(e[2] || e[1], n)
                                }
                            },
                            react: function(e, t, n) {
                                return g("em", n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("em", t(e.content, n))
                            }
                        },
                        strong: {
                            order: U,
                            requiredFirstCharacters: ["*"],
                            match: m(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                            quality: function(e) {
                                return e[0].length + .1
                            },
                            parse: Y,
                            react: function(e, t, n) {
                                return g("strong", n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("strong", t(e.content, n))
                            }
                        },
                        u: {
                            order: U++,
                            requiredFirstCharacters: ["_"],
                            match: m(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                            quality: function(e) {
                                return e[0].length
                            },
                            parse: Y,
                            react: function(e, t, n) {
                                return g("u", n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("u", t(e.content, n))
                            }
                        },
                        del: {
                            order: U++,
                            requiredFirstCharacters: ["~"],
                            match: m(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                            parse: Y,
                            react: function(e, t, n) {
                                return g("del", n.key, {
                                    children: t(e.content, n)
                                })
                            },
                            html: function(e, t, n) {
                                return v("del", t(e.content, n))
                            }
                        },
                        inlineCode: {
                            order: U++,
                            requiredFirstCharacters: ["`"],
                            match: m(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                            parse: function(e, t, n) {
                                return {
                                    content: e[2].replace(H, "$1")
                                }
                            },
                            react: function(e, t, n) {
                                return g("code", n.key, {
                                    children: e.content
                                })
                            },
                            html: function(e, t, n) {
                                return v("code", L(e.content))
                            }
                        },
                        br: {
                            order: U++,
                            requiredFirstCharacters: [" "],
                            match: _(/^ {2,}\n/),
                            parse: x,
                            react: function(e, t, n) {
                                return g("br", n.key, b)
                            },
                            html: function(e, t, n) {
                                return "<br>"
                            }
                        },
                        text: {
                            order: U++,
                            match: _(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                            parse: function(e, t, n) {
                                return {
                                    content: e[0]
                                }
                            },
                            react: function(e, t, n) {
                                return e.content
                            },
                            html: function(e, t, n) {
                                return L(e.content)
                            }
                        }
                    },
                    V = function(e, t, n) {
                        if (!t) throw Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
                        var r, a = (e.Array || K.Array)[t];
                        if (!a) throw Error("simple-markdown: outputFor: to join nodes of type `" + t + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
                        var o = function(n, i) {
                            return (r = i = i || r, Array.isArray(n)) ? a(n, o, i) : e[n.type][t](n, o, i)
                        };
                        return function(e, t) {
                            return o(e, r = f(t, n))
                        }
                    },
                    J = p(K),
                    G = function(e, t) {
                        return (t = t || {}).inline = !1, J(e, t)
                    },
                    q = function(e, t) {
                        var n = C.test(e);
                        return (t = t || {}).inline = !n, J(e, t)
                    },
                    $ = V(K, "react"),
                    Q = V(K, "html"),
                    X = function(e, t) {
                        return $(G(e, t), t)
                    };
                return {
                    defaultRules: K,
                    parserFor: p,
                    outputFor: V,
                    inlineRegex: m,
                    blockRegex: h,
                    anyScopeRegex: _,
                    parseInline: S,
                    parseBlock: function(e, t, n) {
                        var r = n.inline || !1;
                        n.inline = !1;
                        var a = e(t + "\n\n", n);
                        return n.inline = r, a
                    },
                    markdownToReact: X,
                    markdownToHtml: function(e, t) {
                        return Q(G(e, t), t)
                    },
                    ReactMarkdown: function(e) {
                        var t = {};
                        for (var n in e) "source" !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.children = X(e.source), g("div", null, t)
                    },
                    defaultBlockParse: G,
                    defaultInlineParse: function(e, t) {
                        return (t = t || {}).inline = !0, J(e, t)
                    },
                    defaultImplicitParse: q,
                    defaultReactOutput: $,
                    defaultHtmlOutput: Q,
                    preprocess: d,
                    sanitizeText: L,
                    sanitizeUrl: M,
                    unescapeUrl: T,
                    htmlTag: v,
                    reactElement: g,
                    defaultRawParse: J,
                    ruleOutput: function(e, t) {
                        return !t && "undefined" != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                            function(n, r, a) {
                                return e[n.type][t](n, r, a)
                            }
                    },
                    reactFor: function(e) {
                        var t = function(n, r) {
                            if (r = r || {}, !Array.isArray(n)) return e(n, t, r);
                            for (var a = r.key, o = [], i = null, s = 0; s < n.length; s++) {
                                r.key = "" + s;
                                var u = t(n[s], r);
                                "string" == typeof u && "string" == typeof i ? (i += u, o[o.length - 1] = i) : (o.push(u), i = u)
                            }
                            return r.key = a, o
                        };
                        return t
                    },
                    htmlFor: function(e) {
                        var t = function(n, r) {
                            return (r = r || {}, Array.isArray(n)) ? n.map(function(e) {
                                return t(e, r)
                            }).join("") : e(n, t, r)
                        };
                        return t
                    },
                    defaultParse: function() {
                        return "undefined" != typeof console && console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"), q.apply(null, arguments)
                    },
                    defaultOutput: function() {
                        return "undefined" != typeof console && console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"), $.apply(null, arguments)
                    }
                }
            }, "object" == typeof t && void 0 !== e ? e.exports = a() : "function" == typeof define && define.amd ? define(a) : (r = r || self).SimpleMarkdown = a()