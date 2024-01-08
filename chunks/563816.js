            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("627445"),
                u = n.n(r),
                l = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("823026"),
                A = n("305961"),
                C = n("697218"),
                S = n("317041"),
                N = n("782340"),
                v = n("205735"),
                p = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: r,
                            channel: p,
                            guildId: _,
                            onHeightUpdate: I,
                            context: T
                        } = e,
                        m = (0, l.useStateFromStores)([A.default], () => A.default.getGuild(null != _ ? _ : p.guild_id)),
                        g = (0, l.useStateFromStores)([C.default], () => C.default.getUser(r)),
                        h = (0, E.default)({
                            user: g,
                            guildId: null == m ? void 0 : m.id,
                            channel: p,
                            context: T
                        }),
                        {
                            commands: F,
                            sectionDescriptors: R,
                            loading: M
                        } = o.useDiscovery(p, {
                            commandType: n
                        }, {
                            limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = i.useMemo(() => {
                            let e = {};
                            return R.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [R]),
                        y = i.useRef(M.current);
                    i.useEffect(() => {
                        M.current !== y.current && (y.current = M.current, null == I || I())
                    }, [M, I]);
                    let D = i.useCallback(e => {
                        u(null != p, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(s.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: p,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: p,
                                        guild: m
                                    },
                                    commandTargetId: r
                                })
                            }
                        }, e.id)
                    }, [p, m, r, O]);
                    return M.current ? t = (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === F.length ? (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : F.map(D), null != h && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(s.MenuSeparator, {}, "separator"), h]
                    }))), (0, a.jsx)(s.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        listClassName: v.list,
                        children: t
                    })
                }