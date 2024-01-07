            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("881410"), n("70102");
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("385887"),
                s = n("328634"),
                a = n("835906"),
                u = n("145719");
            let d = {
                strong: s.bold,
                em: s.italics,
                u: s.underline,
                s: s.strikethrough,
                inlineCode: s.inlineCode,
                link: s.fakeLink,
                url: s.fakeLink,
                autolink: s.fakeLink,
                spoiler: r(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, s.spoiler),
                staticRouteLink: s.fakeLink,
                syntaxBefore: s.syntaxBefore,
                syntaxAfter: s.syntaxAfter,
                codeBlockText: s.codeBlockText,
                codeBlockSyntax: s.codeBlockSyntax,
                codeBlockLang: s.codeBlockLang
            };

            function c(e, t) {
                let n;
                let {
                    attributes: i,
                    children: u,
                    leaf: c,
                    text: f
                } = t, p = !1, [m] = o.EditorUtils.node(e, o.PathUtils.parent(o.EditorUtils.findPath(e, f))), h = o.EditorUtils.isEditor(m) ? "editor" : m.type;
                switch (h) {
                    case "line":
                    case "blockQuote": {
                        p = void 0;
                        let e = Object.entries(c).filter(e => {
                            let [t] = e;
                            return "text" !== t
                        }).flatMap(e => {
                            let [t, n] = e;
                            if ("hljsTypes" === t) return n;
                            if (!0 === n) {
                                if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (p = !1), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
                                if (t in d) return [d[t]];
                                throw Error("Slate: Unknown decoration attribute: ".concat(t))
                            }
                        }).filter(e => null != e).join(" ");
                        n = r(e, {
                            [s.syntaxOverride]: "||" === c.text || "\\" === c.text
                        })
                    }
                }
                return n = r(n, {
                    [a.emptyText]: "" === f.text
                }), (0, l.jsx)("span", {
                    ...i,
                    className: n,
                    spellCheck: p,
                    children: u
                })
            }