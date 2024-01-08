            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983"),
                l = n("884691"),
                a = n("627445"),
                r = n.n(a),
                s = n("446674"),
                o = n("77078"),
                u = n("240249"),
                d = n("916565"),
                c = n("355263"),
                f = n("633043"),
                h = n("823026"),
                E = n("305961"),
                _ = n("697218"),
                p = n("317041"),
                I = n("782340"),
                C = n("205735"),
                T = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: a,
                            channel: T,
                            guildId: S,
                            onHeightUpdate: N,
                            context: v
                        } = e,
                        g = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(null != S ? S : T.guild_id)),
                        m = (0, s.useStateFromStores)([_.default], () => _.default.getUser(a)),
                        A = (0, h.default)({
                            user: m,
                            guildId: null == g ? void 0 : g.id,
                            channel: T,
                            context: v
                        }),
                        {
                            commands: M,
                            sectionDescriptors: R,
                            loading: L
                        } = u.useDiscovery(T, {
                            commandType: n
                        }, {
                            limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = l.useMemo(() => {
                            let e = {};
                            return R.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [R]),
                        y = l.useRef(L.current);
                    l.useEffect(() => {
                        L.current !== y.current && (y.current = L.current, null == N || N())
                    }, [L, N]);
                    let U = l.useCallback(e => {
                        r(null != T, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, i.jsx)(o.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, i.jsx)(n, {
                                channel: T,
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
                                        channel: T,
                                        guild: g
                                    },
                                    commandTargetId: a
                                })
                            }
                        }, e.id)
                    }, [T, g, a, O]);
                    return L.current ? t = (0, i.jsx)(o.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, i.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === M.length ? (0, i.jsx)(o.MenuItem, {
                        id: "menu-commands-empty",
                        label: I.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : M.map(U), null != A && (t = (0, i.jsxs)(i.Fragment, {
                        children: [t, (0, i.jsx)(o.MenuSeparator, {}, "separator"), A]
                    }))), (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: I.default.Messages.APPS,
                        listClassName: C.list,
                        children: t
                    })
                }