            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("374665");

            function o(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: r,
                    position: o
                } = e, d = i.useRef(null), c = null != n ? n : "string" == typeof t && t;
                return (0, l.jsx)(a.Tooltip, {
                    position: null != o ? o : "top",
                    delay: 500,
                    text: t,
                    "aria-label": c,
                    children: n => {
                        let {
                            onMouseEnter: i,
                            onMouseLeave: a
                        } = n;
                        return (0, l.jsx)("div", {
                            className: s(r, u.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
                            },
                            onMouseLeave: a,
                            children: t
                        })
                    }
                })
            }