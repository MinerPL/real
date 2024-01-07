            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("272030"),
                l = s("42203"),
                i = s("305961"),
                r = s("697218"),
                o = s("156557"),
                d = s("49111"),
                u = s("782340");

            function c(e) {
                let {
                    guildId: t,
                    log: c,
                    onHeaderClick: E,
                    className: _,
                    expanded: T,
                    onContentClick: I
                } = e;
                return null == t ? null : (0, a.jsx)(o.default, {
                    guildId: t,
                    log: c,
                    className: _,
                    expanded: T,
                    onContentClick: I,
                    onHeaderClick: () => {
                        null == E || E(c)
                    },
                    onUserContextMenu: e => {
                        let {
                            user: l
                        } = c;
                        null != l && null != t && (0, n.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("471085").then(s.bind(s, "471085"));
                            return s => (0, a.jsx)(e, {
                                ...s,
                                guildId: t,
                                user: l
                            })
                        })
                    },
                    onChannelContextMenu: e => {
                        let l = i.default.getGuild(t);
                        null != c.options.channel && null != l && (0, n.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("887127").then(s.bind(s, "887127"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                channel: c.options.channel
                            })
                        })
                    },
                    onTargetContextMenu: e => {
                        switch (c.targetType) {
                            case d.AuditLogTargetTypes.CHANNEL:
                            case d.AuditLogTargetTypes.CHANNEL_OVERWRITE:
                                let o = l.default.getChannel(c.targetId),
                                    E = i.default.getGuild(t);
                                if (null != o && null != E) return (0, n.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("887127").then(s.bind(s, "887127"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        channel: o
                                    })
                                });
                                return (0, n.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("443070").then(s.bind(s, "443070"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        id: c.targetId,
                                        label: u.default.Messages.COPY_ID_UNKNOWN
                                    })
                                });
                            case d.AuditLogTargetTypes.USER:
                                let _ = r.default.getUser(c.targetId);
                                if (null != _ && null != t) return (0, n.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await s.el("471085").then(s.bind(s, "471085"));
                                    return s => (0, a.jsx)(e, {
                                        ...s,
                                        guildId: t,
                                        user: _
                                    })
                                })
                        }
                        return null
                    }
                })
            }