            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                d = l("509043"),
                u = l("446674"),
                c = l("77078"),
                f = l("272030"),
                m = l("524768"),
                I = l("389153"),
                T = l("419830"),
                N = l("405645"),
                E = l("42203"),
                h = l("26989"),
                g = l("102985"),
                p = l("697218"),
                S = l("593195"),
                O = l("45029"),
                _ = l("682344"),
                A = l("483093"),
                C = l("158998"),
                x = l("49111"),
                R = l("782340"),
                M = l("278737");

            function v(e) {
                let {
                    guild: t,
                    id: s,
                    type: i,
                    isLocked: r,
                    lockTooltipText: d
                } = e, u = !r || null != d;
                o(u, "No lockTooltipText provided while isLocked=true");
                let c = a.useCallback(e => {
                    (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: s,
                            label: R.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [s]);
                switch (i) {
                    case m.ApplicationCommandPermissionType.CHANNEL:
                        return (0, n.jsx)(L, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        });
                    case m.ApplicationCommandPermissionType.ROLE:
                        return (0, n.jsx)(j, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        });
                    case m.ApplicationCommandPermissionType.USER:
                        return (0, n.jsx)(b, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        })
                }
            }

            function L(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: s,
                    lockTooltipText: r,
                    openEntryContextMenu: o
                } = e, d = (0, I.allChannelsSentinel)(t.id), {
                    icon: f,
                    name: m,
                    categoryName: N
                } = (0, u.useStateFromStoresObject)([E.default], () => {
                    if (d === l) return {
                        name: R.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                        icon: S.default
                    };
                    let e = E.default.getChannel(l),
                        n = (null == e ? void 0 : e.parent_id) != null ? E.default.getChannel(e.parent_id) : null,
                        a = null != e ? (0, T.getChannelIconComponent)(e, t) : null;
                    return {
                        icon: a,
                        name: null == e ? void 0 : e.name,
                        categoryName: null == n ? void 0 : n.name
                    }
                }, [d, t, l]), h = a.useCallback(e => {
                    l !== d && o(e)
                }, [d, l, o]);
                return null == f || null == m ? null : (0, n.jsxs)("div", {
                    onContextMenu: h,
                    className: M.identifier,
                    children: [(0, n.jsx)(f, {
                        width: 20,
                        height: 20,
                        className: i(M.channelIcon, M.image)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: m
                    }), null != N ? (0, n.jsxs)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: ["(", N, ")"]
                    }) : null, s ? (0, n.jsx)(P, {
                        tooltipText: r
                    }) : null]
                })
            }

            function j(e) {
                var t;
                let {
                    guild: s,
                    id: r,
                    isLocked: o,
                    lockTooltipText: u
                } = e, m = null == s ? void 0 : s.getRole(r), I = (0, N.useRoleIcon)({
                    guildId: s.id,
                    roleId: r,
                    size: 24
                }), T = a.useCallback(e => {
                    null != s && null != m && (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("178521").then(l.bind(l, "178521"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            guild: s,
                            role: m
                        })
                    })
                }, [s, m]);
                return (null == m ? void 0 : m.name) == null ? null : (0, n.jsxs)("div", {
                    onContextMenu: T,
                    className: M.identifier,
                    children: [null != I ? (0, n.jsx)(A.default, {
                        className: i(M.icon, M.image),
                        ...I
                    }) : (0, n.jsx)(_.default, {
                        className: i(M.shield, M.image),
                        color: null !== (t = m.colorString) && void 0 !== t ? t : (0, d.int2hex)(x.DEFAULT_ROLE_COLOR)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: m.name
                    }), o ? (0, n.jsx)(P, {
                        tooltipText: u
                    }) : null]
                })
            }

            function b(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: a,
                    lockTooltipText: s,
                    openEntryContextMenu: i
                } = e, r = (0, u.useStateFromStores)([p.default], () => p.default.getUser(l)), o = (0, u.useStateFromStores)([h.default], () => {
                    var e;
                    return null === (e = h.default.getMember(t.id, l)) || void 0 === e ? void 0 : e.nick
                }, [t.id, l]), d = (0, u.useStateFromStores)([g.default], () => g.default.hidePersonalInformation);
                return null == r ? null : (0, n.jsxs)("div", {
                    onContextMenu: i,
                    className: M.identifier,
                    children: [(0, n.jsx)(c.Avatar, {
                        className: M.image,
                        src: r.getAvatarURL(t.id, 24),
                        "aria-label": r.username,
                        size: c.AvatarSizes.SIZE_24
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: null != o ? o : r.username
                    }), d ? null : (0, n.jsx)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: C.default.getUserTag(r)
                    }), a ? (0, n.jsx)(P, {
                        tooltipText: s
                    }) : null]
                })
            }

            function P(e) {
                let {
                    tooltipText: t
                } = e;
                return (0, n.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, n.jsx)("div", {
                        className: M.lockIcon,
                        ...e,
                        children: (0, n.jsx)(O.default, {
                            width: 16,
                            height: 16
                        })
                    })
                })
            }