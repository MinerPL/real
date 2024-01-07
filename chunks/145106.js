            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("133403"),
                r = l("49622");

            function o(e) {
                let {
                    hasSetEmoji: t,
                    onClick: l,
                    children: o
                } = e, [i, u] = a.useState(!1);
                return (0, n.jsxs)("div", {
                    className: r.container,
                    onMouseEnter: () => {
                        if (t) {
                            u(!0);
                            return
                        }
                        u(!1)
                    },
                    onMouseLeave: () => {
                        u(!1)
                    },
                    children: [o, t && i && (0, n.jsx)(s.default, {
                        onClick: l,
                        className: r.removeButton
                    })]
                })
            }