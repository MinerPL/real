            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("819855"),
                o = n("77078"),
                d = n("731898"),
                c = n("841098"),
                f = n("206230"),
                h = n("62587"),
                p = n("181114"),
                m = n("628342"),
                E = n("277842"),
                C = n("833345");

            function S(e) {
                let {
                    checked: t,
                    labelText: n,
                    tooltipText: s,
                    canToggle: S,
                    iconAltText: g,
                    onChange: _,
                    tooltipColor: I,
                    className: T,
                    id: v = "fancybutton-toggle",
                    collapseWhenChecked: x = !0,
                    onClick: N,
                    disabled: A
                } = e, M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [R, j] = l.useState(!1), L = (0, c.default)(), O = (0, u.isThemeDark)(L) || t ? C : E, {
                    width: y = 0,
                    ref: b
                } = (0, d.default)(), {
                    width: P = 0,
                    ref: D
                } = (0, d.default)();
                return (0, a.jsxs)(o.TooltipContainer, {
                    text: (0, a.jsx)(h.NitroTooltipLabel, {
                        textColor: "always-white",
                        tooltipText: s
                    }),
                    position: "top",
                    color: null != I ? I : A ? o.Tooltip.Colors.BLACK : o.Tooltip.Colors.BRAND,
                    "aria-label": s,
                    tooltipClassName: m.tooltip,
                    className: m.tooltipContainer,
                    children: [(0, a.jsx)("input", {
                        className: m.visuallyHidden,
                        checked: t,
                        onChange: function() {
                            if (S) {
                                let e = !t;
                                j(!0), null == _ || _(e)
                            }
                            "function" == typeof N && N()
                        },
                        id: v,
                        type: "checkbox",
                        disabled: A
                    }), (0, a.jsxs)("label", {
                        htmlFor: v,
                        className: i(m.label, T, {
                            [m.transition]: R,
                            [m.labelChecked]: t,
                            [m.labelUnchecked]: !t && !S
                        }),
                        style: x ? {
                            width: t ? y : y + P
                        } : void 0,
                        children: [t ? (0, a.jsx)(p.Shine, {
                            className: m.shine,
                            shinePaused: M
                        }) : null, (0, a.jsx)("img", {
                            ref: b,
                            src: O,
                            alt: g
                        }), (0, a.jsx)("span", {
                            ref: D,
                            children: (0, a.jsx)(o.Text, {
                                className: i(m.burstText, {
                                    [m.visuallyHidden]: t && x,
                                    [m.burstTextChecked]: t
                                }),
                                variant: "text-sm/semibold",
                                children: n
                            })
                        })]
                    })]
                })
            }