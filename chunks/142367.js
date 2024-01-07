            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("781738");
            var a = n("463928"),
                s = n.n(a),
                r = n("290689");
            let o = s.defaultRules.lheading,
                i = s.defaultRules.heading,
                c = s.defaultRules.link,
                u = s.defaultRules.image,
                d = s.defaultRules.list,
                h = s.defaultRules.blockQuote,
                p = s.defaultRules.paragraph,
                f = /\{(.+?)}/,
                g = /^\$(\w+?)\$/;
            l = n("159661");
            let C = e => {
                    let {
                        transformUpperCase: t = !1
                    } = e;
                    return (e, n, l) => {
                        let a = f.exec(e[1]),
                            r = e[1].replace(f, "");
                        return t && (r = r.toUpperCase()), {
                            className: null != a ? a[1] : null,
                            level: "=" === e[2] ? 1 : 2,
                            content: s.parseInline(n, r, l)
                        }
                    }
                },
                m = e => ({
                    ...l.baseRules,
                    image: {
                        ...u,
                        ..."function" == typeof l.customRules.image ? l.customRules.image(e) : l.customRules.image
                    },
                    link: {
                        ...c,
                        ..."function" == typeof l.customRules.link ? l.customRules.link(e) : l.customRules.link
                    },
                    list: {
                        ...d,
                        ..."function" == typeof l.customRules.list ? l.customRules.list(e) : l.customRules.list
                    },
                    interpolation: {
                        order: r.default.order,
                        match: e => g.exec(e),
                        parse(e, t, n) {
                            let l = n.interpolations[e[1]];
                            return null == l ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "interpolation",
                                renderer: l
                            }
                        },
                        react: e => e.renderer()
                    },
                    lheading: {
                        ...o,
                        parse: C({
                            transformUpperCase: !0
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    },
                    heading: {
                        ...i,
                        ..."function" == typeof l.customRules.heading ? l.customRules.heading(e) : l.customRules.heading
                    },
                    blockQuote: {
                        ...h,
                        ..."function" == typeof l.customRules.blockQuote ? l.customRules.blockQuote(e) : l.customRules.blockQuote
                    },
                    paragraph: {
                        ...p,
                        ..."function" == typeof l.customRules.paragraph ? l.customRules.paragraph(e) : l.customRules.paragraph
                    }
                }),
                x = e => ({
                    lheading: {
                        ...o,
                        parse: C({
                            transformUpperCase: !1
                        }),
                        ..."function" == typeof l.customRules.lheading ? l.customRules.lheading(e) : l.customRules.lheading
                    }
                });
            var _ = {
                getDefaultRules: e => ({
                    ...m(e)
                }),
                getSpecialRules: e => ({
                    ...m(e),
                    ...x(e)
                })
            }