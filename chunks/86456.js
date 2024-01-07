            "use strict";
            n.r(t), n.d(t, {
                PrivateChannelIntegrationAddedSystemMessage: function() {
                    return T
                },
                PrivateChannelIntegrationRemovedSystemMessage: function() {
                    return g
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("77078"),
                i = n("272030"),
                r = n("574073"),
                o = n("232259"),
                u = n("506885"),
                d = n("981601"),
                c = n("697218"),
                f = n("304198"),
                m = n("315102"),
                E = n("441823"),
                _ = n("140596"),
                h = n("950576"),
                p = n("49111");

            function I(e) {
                return s.useCallback(t => (s, r) => {
                    var o;
                    let f = m.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: t.bot,
                            botIconFirst: !0
                        }),
                        h = c.default.getUser(null === (o = t.bot) || void 0 === o ? void 0 : o.id),
                        p = _.default.getIntegration(e.id, t.id),
                        I = e.isPrivate() && null != p ? t => {
                            (0, i.openContextMenuLazy)(t, async () => {
                                let {
                                    default: t
                                } = await n.el("348866").then(n.bind(n, "348866"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    channel: e,
                                    integration: p
                                })
                            })
                        } : null != h ? t => (0, E.openUserContextMenu)(t, h, e) : void 0,
                        {
                            bot: T
                        } = t;
                    return null == T ? s : (0, a.jsx)(l.Popout, {
                        position: "right",
                        preload: () => (0, u.default)(T.id, f, {
                            guildId: e.guild_id,
                            channelId: e.id
                        }),
                        renderPopout: t => (0, a.jsx)(d.default, {
                            ...t,
                            userId: T.id,
                            guildId: e.guild_id,
                            channelId: e.id
                        }),
                        children: e => (0, a.jsx)(l.Anchor, {
                            ...e,
                            onContextMenu: I,
                            children: s
                        })
                    }, r)
                }, [e])
            }

            function T(e) {
                let {
                    message: t,
                    channel: s,
                    compact: l
                } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)(t.author, s.id, s.guild_id), c = I(s);
                return (0, a.jsx)(f.default, {
                    icon: n("127067"),
                    timestamp: t.timestamp,
                    compact: l,
                    children: (0, h.getPrivateChannelIntegrationAddedSystemMessageContent)({
                        application: u,
                        username: i.nick,
                        usernameHook: d(i),
                        applicationNameHook: null != u ? c(u) : p.NOOP
                    })
                })
            }

            function g(e) {
                let {
                    message: t,
                    channel: s,
                    compact: l
                } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)(t.author, s.id, s.guild_id), c = I(s);
                return (0, a.jsx)(f.default, {
                    icon: n("226315"),
                    timestamp: t.timestamp,
                    compact: l,
                    children: (0, h.getPrivateChannelIntegrationRemovedSystemMessageContent)({
                        application: u,
                        username: i.nick,
                        usernameHook: d(i),
                        applicationNameHook: null != u ? c(u) : p.NOOP
                    })
                })
            }