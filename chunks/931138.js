            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                a = n("760607"),
                s = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), E = (0, o.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: u(s.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(a.default, {
                        ...d,
                        className: u(c, s.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: u(s.childContainer, {
                            [s.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }