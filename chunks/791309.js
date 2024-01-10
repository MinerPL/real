            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("77078"),
                o = a("153160"),
                i = a("846367"),
                u = e => {
                    var t;
                    let {
                        price: {
                            amount: a,
                            currency: s
                        },
                        renderPrice: u,
                        icon: c,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, E = (0, o.formatPrice)(a, s);
                    return (0, l.jsxs)(n.Heading, {
                        variant: f,
                        color: C ? "always-white" : "none",
                        className: r(i.heading, d),
                        children: [c, null !== (t = null == u ? void 0 : u(E)) && void 0 !== t ? t : E]
                    })
                }