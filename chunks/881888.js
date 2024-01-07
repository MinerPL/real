            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var l = s("37983"),
                a = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("819855"),
                o = s("77078"),
                d = s("272030"),
                u = s("726527"),
                c = s("142160"),
                h = s("433487"),
                E = s("782340"),
                f = s("554259");

            function m(e) {
                let {
                    role: t,
                    guild: n
                } = e, [r, c] = a.useState(!1), E = (0, u.useHasGuildRoleItems)(n, t);
                return E ? (0, l.jsx)(o.Clickable, {
                    onClick: e => {
                        c(!0), (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("726527").then(s.bind(s, "726527"));
                            return s => (0, l.jsx)(e, {
                                ...s,
                                role: t,
                                guild: n
                            })
                        }, {
                            onClose: () => c(!1)
                        })
                    },
                    className: i(f.roleOverflow, {
                        [f.open]: r
                    }),
                    children: (0, l.jsx)(h.default, {
                        width: 20,
                        height: 20
                    })
                }) : null
            }

            function g(e) {
                let {
                    color: t,
                    id: n,
                    role: i,
                    guild: u,
                    children: h,
                    isDragging: g,
                    selectedItem: T,
                    onItemSelect: S,
                    itemType: N,
                    locked: C,
                    lockTooltip: _,
                    showContextMenu: p,
                    theme: M,
                    roleStyle: x,
                    "aria-label": R
                } = e, I = a.useCallback(e => {
                    (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await s.el("443070").then(s.bind(s, "443070"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            id: n,
                            label: E.default.Messages.COPY_ID_ROLE
                        })
                    })
                }, [n]);
                return g ? (0, l.jsx)("div", {
                    className: f.dragged
                }) : (0, l.jsx)(o.TabBar.Item, {
                    className: f.role,
                    id: n,
                    selectedItem: T,
                    onItemSelect: S,
                    itemType: N,
                    "aria-label": null != _ ? "".concat(R, ", ").concat(_) : R,
                    children: (0, l.jsxs)("div", {
                        className: f.roleContent,
                        children: ["dot" === x ? (0, l.jsx)(o.RoleDot, {
                            color: null != t ? t : void 0,
                            className: f.roleDot,
                            background: !1,
                            tooltip: !1
                        }) : (0, l.jsx)(o.RoleCircle, {
                            color: null != t ? t : void 0,
                            className: f.roleCircle
                        }), function() {
                            if (!C) return null;
                            let e = (0, r.isThemeDark)(M) ? s("555658") : s("921880");
                            return (0, l.jsx)(o.Tooltip, {
                                text: _,
                                color: o.Tooltip.Colors.RED,
                                children: t => (0, l.jsx)(c.default, {
                                    className: f.lock,
                                    src: e,
                                    ...t
                                })
                            })
                        }(), (0, l.jsx)("div", {
                            className: f.roleInner,
                            onContextMenu: I,
                            children: h
                        }), p && null != i ? (0, l.jsx)(m, {
                            guild: u,
                            role: i
                        }) : null]
                    })
                })
            }