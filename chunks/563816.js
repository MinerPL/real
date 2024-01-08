            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                u = n("77078"),
                d = n("240249"),
                c = n("916565"),
                o = n("355263"),
                m = n("633043"),
                f = n("823026"),
                _ = n("305961"),
                g = n("697218"),
                p = n("317041"),
                E = n("782340"),
                S = n("205735"),
                h = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: i,
                            channel: h,
                            guildId: I,
                            onHeightUpdate: v,
                            context: M
                        } = e,
                        A = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(null != I ? I : h.guild_id)),
                        R = (0, l.useStateFromStores)([g.default], () => g.default.getUser(i)),
                        y = (0, f.default)({
                            user: R,
                            guildId: null == A ? void 0 : A.id,
                            channel: h,
                            context: M
                        }),
                        {
                            commands: N,
                            sectionDescriptors: T,
                            loading: C
                        } = d.useDiscovery(h, {
                            commandType: n
                        }, {
                            limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: k
                        } = s.useMemo(() => {
                            let e = {};
                            return T.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [T]),
                        x = s.useRef(C.current);
                    s.useEffect(() => {
                        C.current !== x.current && (x.current = C.current, null == v || v())
                    }, [C, v]);
                    let O = s.useCallback(e => {
                        r(null != h, "menu item should not show if channel is null");
                        let t = k[e.applicationId],
                            n = null != t ? (0, o.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(u.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: h,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, c.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: h,
                                        guild: A
                                    },
                                    commandTargetId: i
                                })
                            }
                        }, e.id)
                    }, [h, A, i, k]);
                    return C.current ? t = (0, a.jsx)(u.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(m.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === N.length ? (0, a.jsx)(u.MenuItem, {
                        id: "menu-commands-empty",
                        label: E.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : N.map(O), null != y && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(u.MenuSeparator, {}, "separator"), y]
                    }))), (0, a.jsx)(u.MenuItem, {
                        id: "apps",
                        label: E.default.Messages.APPS,
                        listClassName: S.list,
                        children: t
                    })
                }