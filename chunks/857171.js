            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                l = a.n(n),
                r = a("77078"),
                i = a("371642");

            function o(e) {
                let {
                    children: t,
                    className: a,
                    innerClassName: n,
                    onChange: o,
                    "aria-label": u,
                    "aria-describedby": d,
                    filters: c,
                    multiple: m = !1,
                    disabled: h = !1,
                    submitting: f = !1,
                    ...g
                } = e;
                return (0, s.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, s.jsxs)("div", {
                        className: l(a, (0, r.getButtonStyle)({
                            ...g,
                            submitting: f,
                            disabled: h
                        })),
                        "aria-disabled": h,
                        children: [(0, s.jsx)("span", {
                            "aria-hidden": !0,
                            className: n,
                            children: t
                        }), (0, s.jsx)(i.default, {
                            tabIndex: 0,
                            onChange: o,
                            filters: c,
                            multiple: m,
                            "aria-label": u,
                            "aria-describedby": d,
                            disabled: h
                        })]
                    })
                })
            }