            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("77078"),
                u = n("15738"),
                d = n("610898"),
                c = n("829562"),
                f = n("652494");
            let h = a.forwardRef(function(e, t) {
                let {
                    id: n,
                    onClick: s,
                    onContextMenu: h,
                    icon: C,
                    selected: p,
                    tooltip: m,
                    upperBadge: E,
                    lowerBadge: g,
                    lowerBadgeWidth: I,
                    showPill: S = !0,
                    className: _,
                    "aria-label": N,
                    children: T,
                    onMouseEnter: A,
                    onMouseLeave: L,
                    onMouseDown: v
                } = e, x = (0, r.useTreeItem)(n), [R, M] = a.useState(!1), O = "string" == typeof m && null == N ? m : N;
                return (0, l.jsxs)(d.ListItem, {
                    children: [S ? (0, l.jsx)("div", {
                        className: f.pill,
                        children: (0, l.jsx)(u.default, {
                            hovered: R,
                            selected: p
                        })
                    }) : null, (0, l.jsx)(c.default, {
                        text: m,
                        selected: p,
                        children: (0, l.jsx)(o.BlobMask, {
                            className: f.circleButtonMask,
                            selected: p || R,
                            upperBadge: E,
                            lowerBadge: g,
                            lowerBadgeWidth: I,
                            children: (0, l.jsx)(o.Clickable, {
                                innerRef: t,
                                onMouseEnter: () => {
                                    null == A || A(), M(!0)
                                },
                                onMouseLeave: () => {
                                    null == L || L(), M(!1)
                                },
                                onMouseDown: v,
                                className: i(f.circleIconButton, _, {
                                    [f.selected]: p || R
                                }),
                                onClick: s,
                                "aria-label": O,
                                onContextMenu: h,
                                focusProps: {
                                    enabled: !1
                                },
                                ...x,
                                children: null != C && (0, l.jsx)(C, {
                                    className: f.circleIcon,
                                    color: "currentColor"
                                })
                            })
                        })
                    }), T]
                })
            });
            var C = h