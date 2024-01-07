            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var a, n = r("37983"),
                i = r("884691"),
                l = r("414456"),
                o = r.n(l),
                s = r("463928"),
                c = r.n(s),
                d = r("269936"),
                u = r("647374"),
                h = r("47677"),
                p = r("895530"),
                f = r("238165"),
                m = r("862839");
            let g = new RegExp("https?://".concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""));

            function y(e) {
                return "string" == typeof e.content ? e.content : k(e.content)
            }
            let b = {
                    ...c.defaultRules,
                    heading: {
                        ...c.defaultRules.heading,
                        react(e, t, r) {
                            let a = "h".concat(e.level);
                            return (0, n.jsx)(p.default, {
                                tag: a,
                                children: t(e.content, r)
                            }, r.key)
                        }
                    },
                    paragraph: {
                        ...c.defaultRules.paragraph,
                        react: (e, t, r) => (0, n.jsx)("div", {
                            className: f.paragraph,
                            children: t(e.content, r)
                        }, r.key)
                    },
                    strong: {
                        ...c.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...c.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...c.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...c.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...u.default,
                        ...(0, h.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...c.defaultRules.blockQuote,
                        react: (e, t, r) => (0, n.jsx)("blockquote", {
                            className: f.blockquote,
                            children: y(e)
                        }, r.key)
                    },
                    image: {
                        ...c.defaultRules.image,
                        order: 6,
                        match(e, t, r) {
                            let a = c.defaultRules.image;
                            if (null == a || null == a.match) return !1;
                            let n = a.match(e, t, r);
                            if (null != n && Array.isArray(n) && n.length >= 3) {
                                let e = n[2];
                                if ("string" == typeof e) return null != e.match(g) ? n : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...c.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, r) => (0, n.jsx)("code", {
                            className: f.codeInline,
                            children: y(e)
                        }, r.key)
                    },
                    codeBlock: {
                        ...c.defaultRules.codeBlock,
                        react(e, t, a) {
                            let i = () => (0, n.jsx)("pre", {
                                children: (0, n.jsx)("code", {
                                    className: o(m.scrollbarGhostHairline, "hljs"),
                                    children: y(e)
                                })
                            }, a.key);
                            return (0, n.jsx)(d.LazyLibrary, {
                                createPromise: () => r.el("86256").then(r.bind(r, "86256")),
                                webpackId: "86256",
                                renderFallback: i,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return i();
                                    {
                                        let r = t.highlight(e.lang, e.content, !0);
                                        return null == r ? i() : (0, n.jsx)("pre", {
                                            children: (0, n.jsx)("code", {
                                                className: o(m.scrollbarGhostHairline, "hljs", r.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: r.value
                                                }
                                            })
                                        }, a.key)
                                    }
                                }
                            }, a.key)
                        }
                    }
                },
                x = c.parserFor(b),
                k = c.reactFor(c.ruleOutput(b, "react"));
            class v extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: r,
                        parser: a,
                        output: i
                    } = this.props, l = a("".concat(t, "\n\n"), {
                        inline: !1,
                        ...r
                    }), s = i(l);
                    return (0, n.jsx)("div", {
                        className: o(f.markdown, e),
                        children: s
                    })
                }
            }
            v.rules = b, v.defaultProps = {
                parser: x,
                output: k
            };
            var C = v