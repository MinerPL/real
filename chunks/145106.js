            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("222007");
            var s = l("37983"),
                n = l("884691"),
                a = l("133403"),
                o = l("49622");

            function i(e) {
                let {
                    hasSetEmoji: t,
                    onClick: l,
                    children: i
                } = e, [r, d] = n.useState(!1);
                return (0, s.jsxs)("div", {
                    className: o.container,
                    onMouseEnter: () => {
                        if (t) {
                            d(!0);
                            return
                        }
                        d(!1)
                    },
                    onMouseLeave: () => {
                        d(!1)
                    },
                    children: [i, t && r && (0, s.jsx)(a.default, {
                        onClick: l,
                        className: o.removeButton
                    })]
                })
            }