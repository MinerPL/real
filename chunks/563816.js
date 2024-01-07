            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                u = n("884691"),
                i = n("627445"),
                l = n.n(i),
                s = n("446674"),
                r = n("77078"),
                d = n("240249"),
                o = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("823026"),
                C = n("305961"),
                A = n("697218"),
                S = n("317041"),
                N = n("782340"),
                _ = n("205735"),
                T = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: i,
                            channel: T,
                            guildId: p,
                            onHeightUpdate: v,
                            context: I
                        } = e,
                        M = (0, s.useStateFromStores)([C.default], () => C.default.getGuild(null != p ? p : T.guild_id)),
                        g = (0, s.useStateFromStores)([A.default], () => A.default.getUser(i)),
                        m = (0, E.default)({
                            user: g,
                            guildId: null == M ? void 0 : M.id,
                            channel: T,
                            context: I
                        }),
                        {
                            commands: R,
                            sectionDescriptors: U,
                            loading: h
                        } = d.useDiscovery(T, {
                            commandType: n
                        }, {
                            limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = u.useMemo(() => {
                            let e = {};
                            return U.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [U]),
                        F = u.useRef(h.current);
                    u.useEffect(() => {
                        h.current !== F.current && (F.current = h.current, null == v || v())
                    }, [h, v]);
                    let y = u.useCallback(e => {
                        l(null != T, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(r.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: T,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, o.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: T,
                                        guild: M
                                    },
                                    commandTargetId: i
                                })
                            }
                        }, e.id)
                    }, [T, M, i, O]);
                    return h.current ? t = (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === R.length ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : R.map(y), null != m && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(r.MenuSeparator, {}, "separator"), m]
                    }))), (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        listClassName: _.list,
                        children: t
                    })
                }