            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("627445"),
                s = n.n(r),
                a = n("446674"),
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
                T = n("205735"),
                C = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: r,
                            channel: C,
                            guildId: S,
                            onHeightUpdate: N,
                            context: g
                        } = e,
                        v = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(null != S ? S : C.guild_id)),
                        m = (0, a.useStateFromStores)([_.default], () => _.default.getUser(r)),
                        A = (0, h.default)({
                            user: m,
                            guildId: null == v ? void 0 : v.id,
                            channel: C,
                            context: g
                        }),
                        {
                            commands: L,
                            sectionDescriptors: M,
                            loading: R
                        } = u.useDiscovery(C, {
                            commandType: n
                        }, {
                            limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = l.useMemo(() => {
                            let e = {};
                            return M.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [M]),
                        y = l.useRef(R.current);
                    l.useEffect(() => {
                        R.current !== y.current && (y.current = R.current, null == N || N())
                    }, [R, N]);
                    let G = l.useCallback(e => {
                        s(null != C, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, i.jsx)(o.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, i.jsx)(n, {
                                channel: C,
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
                                        channel: C,
                                        guild: v
                                    },
                                    commandTargetId: r
                                })
                            }
                        }, e.id)
                    }, [C, v, r, O]);
                    return R.current ? t = (0, i.jsx)(o.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, i.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === L.length ? (0, i.jsx)(o.MenuItem, {
                        id: "menu-commands-empty",
                        label: I.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : L.map(G), null != A && (t = (0, i.jsxs)(i.Fragment, {
                        children: [t, (0, i.jsx)(o.MenuSeparator, {}, "separator"), A]
                    }))), (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: I.default.Messages.APPS,
                        listClassName: T.list,
                        children: t
                    })
                }