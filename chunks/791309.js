            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("77078"),
                o = l("153160"),
                i = l("846367"),
                u = e => {
                    var t;
                    let {
                        price: {
                            amount: l,
                            currency: s
                        },
                        renderPrice: u,
                        icon: c,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, E = (0, o.formatPrice)(l, s);
                    return (0, a.jsxs)(n.Heading, {
                        variant: f,
                        color: C ? "always-white" : "none",
                        className: r(i.heading, d),
                        children: [c, null !== (t = null == u ? void 0 : u(E)) && void 0 !== t ? t : E]
                    })
                }