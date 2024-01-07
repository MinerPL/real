            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("463928"),
                l = n.n(u),
                c = n("269936"),
                d = n("647374"),
                _ = n("47677"),
                E = n("895530"),
                f = n("238165"),
                I = n("862839");
            let p = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

            function A(e) {
                return "string" == typeof e.content ? e.content : N(e.content)
            }
            let R = {
                    ...l.defaultRules,
                    heading: {
                        ...l.defaultRules.heading,
                        react(e, t, n) {
                            let r = "h".concat(e.level);
                            return (0, i.jsx)(E.default, {
                                tag: r,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    },
                    paragraph: {
                        ...l.defaultRules.paragraph,
                        react: (e, t, n) => (0, i.jsx)("div", {
                            className: f.paragraph,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    strong: {
                        ...l.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...l.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...l.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...l.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...d.default,
                        ...(0, _.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...l.defaultRules.blockQuote,
                        react: (e, t, n) => (0, i.jsx)("blockquote", {
                            className: f.blockquote,
                            children: A(e)
                        }, n.key)
                    },
                    image: {
                        ...l.defaultRules.image,
                        order: 6,
                        match(e, t, n) {
                            let r = l.defaultRules.image;
                            if (null == r || null == r.match) return !1;
                            let i = r.match(e, t, n);
                            if (null != i && Array.isArray(i) && i.length >= 3) {
                                let e = i[2];
                                if ("string" == typeof e) return null != e.match(p) ? i : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...l.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, n) => (0, i.jsx)("code", {
                            className: f.codeInline,
                            children: A(e)
                        }, n.key)
                    },
                    codeBlock: {
                        ...l.defaultRules.codeBlock,
                        react(e, t, r) {
                            let a = () => (0, i.jsx)("pre", {
                                children: (0, i.jsx)("code", {
                                    className: o(I.scrollbarGhostHairline, "hljs"),
                                    children: A(e)
                                })
                            }, r.key);
                            return (0, i.jsx)(c.LazyLibrary, {
                                createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                webpackId: "86256",
                                renderFallback: a,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n ? a() : (0, i.jsx)("pre", {
                                            children: (0, i.jsx)("code", {
                                                className: o(I.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }, r.key)
                                    }
                                }
                            }, r.key)
                        }
                    }
                },
                h = l.parserFor(R),
                N = l.reactFor(l.ruleOutput(R, "react"));
            class g extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: n,
                        parser: r,
                        output: a
                    } = this.props, s = r("".concat(t, "\n\n"), {
                        inline: !1,
                        ...n
                    }), u = a(s);
                    return (0, i.jsx)("div", {
                        className: o(f.markdown, e),
                        children: u
                    })
                }
            }
            g.rules = R, g.defaultProps = {
                parser: h,
                output: N
            };
            var S = g