            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                i = n("77078"),
                u = n("760607"),
                o = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: c,
                    ...d
                } = e, f = a.Children.only(t), E = (0, i.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s(o.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(u.default, {
                        ...d,
                        className: s(c, o.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: s(o.childContainer, {
                            [o.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }