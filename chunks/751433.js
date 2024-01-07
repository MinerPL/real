            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return I
                }
            }), t("222007");
            var i = t("37983"),
                a = t("884691"),
                l = t("414456"),
                s = t.n(l),
                r = t("77078"),
                u = t("151185"),
                o = t("342169"),
                c = t("250501");

            function d(e) {
                return "" === e || "-" === e
            }
            var I = e => {
                let {
                    value: n,
                    onChange: t,
                    className: l,
                    minValue: I,
                    maxValue: m
                } = e, [S, _] = a.useState(n), P = d(S) || null != I && S <= I, p = d(S) || null != m && S >= m, f = e => {
                    t(d(e) ? null != I ? I : 0 : e), _(e)
                };
                return (0, i.jsx)(r.FocusRing, {
                    within: !0,
                    children: (0, i.jsxs)("div", {
                        className: s(c.actions, l),
                        children: [(0, i.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !P && f(S - 1)
                            },
                            tabIndex: -1,
                            className: s(c.iconWrapper, c.subtract, {
                                [c.disabled]: P
                            }),
                            children: (0, i.jsx)(o.default, {
                                className: s(c.icon, {
                                    [c.disabled]: P
                                })
                            })
                        }), (0, i.jsx)(r.TextInput, {
                            value: "".concat(S),
                            onChange: e => {
                                if (d(e)) return f(e);
                                let n = parseInt(e);
                                if (!isNaN(n)) return null != m && n >= m ? f(m) : null != I && n <= I ? f(I) : f(n)
                            },
                            inputClassName: c.value
                        }), (0, i.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), !p && f(S + 1)
                            },
                            tabIndex: -1,
                            className: s(c.iconWrapper, c.add, {
                                [c.disabled]: p
                            }),
                            children: (0, i.jsx)(u.default, {
                                className: s(c.icon, {
                                    [c.disabled]: p
                                })
                            })
                        })]
                    })
                })
            }