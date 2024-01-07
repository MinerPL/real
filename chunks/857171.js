            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return o
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("414456"),
                n = A.n(l),
                r = A("77078"),
                s = A("371642");

            function o(e) {
                let {
                    children: t,
                    className: A,
                    innerClassName: l,
                    onChange: o,
                    "aria-label": i,
                    "aria-describedby": d,
                    filters: u,
                    multiple: c = !1,
                    disabled: f = !1,
                    submitting: C = !1,
                    ...g
                } = e;
                return (0, a.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)("div", {
                        className: n(A, (0, r.getButtonStyle)({
                            ...g,
                            submitting: C,
                            disabled: f
                        })),
                        "aria-disabled": f,
                        children: [(0, a.jsx)("span", {
                            "aria-hidden": !0,
                            className: l,
                            children: t
                        }), (0, a.jsx)(s.default, {
                            tabIndex: 0,
                            onChange: o,
                            filters: u,
                            multiple: c,
                            "aria-label": i,
                            "aria-describedby": d,
                            disabled: f
                        })]
                    })
                })
            }