            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("151185"),
                d = s("342169"),
                u = s("250501");

            function c(e) {
                return "" === e || "-" === e
            }
            var E = e => {
                let {
                    value: t,
                    onChange: s,
                    className: l,
                    minValue: E,
                    maxValue: _
                } = e, [T, I] = n.useState(t), S = c(T) || null != E && T <= E, N = c(T) || null != _ && T >= _, g = e => {
                    s(c(e) ? null != E ? E : 0 : e), I(e)
                };
                return (0, a.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, a.jsxs)("div", {
                        className: i(u.actions, l),
                        children: [(0, a.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !S && g(T - 1)
                            },
                            tabIndex: -1,
                            className: i(u.iconWrapper, u.subtract, {
                                [u.disabled]: S
                            }),
                            children: (0, a.jsx)(d.default, {
                                className: i(u.icon, {
                                    [u.disabled]: S
                                })
                            })
                        }), (0, a.jsx)(r.TextInput, {
                            value: "".concat(T),
                            onChange: e => {
                                if (c(e)) return g(e);
                                let t = parseInt(e);
                                if (!isNaN(t)) return null != _ && t >= _ ? g(_) : null != E && t <= E ? g(E) : g(t)
                            },
                            inputClassName: u.value
                        }), (0, a.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !N && g(T + 1)
                            },
                            tabIndex: -1,
                            className: i(u.iconWrapper, u.add, {
                                [u.disabled]: N
                            }),
                            children: (0, a.jsx)(o.default, {
                                className: i(u.icon, {
                                    [u.disabled]: N
                                })
                            })
                        })]
                    })
                })
            }