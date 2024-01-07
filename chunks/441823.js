            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return u
                },
                openModerateUserContextMenu: function() {
                    return l
                },
                openModerateRoleContextMenu: function() {
                    return o
                },
                openModerationRaidContextMenu: function() {
                    return s
                }
            }), n("70102");
            var r = n("37983");
            n("884691");
            var i = n("272030");

            function u(e, t, u) {
                u.isGroupDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: u
                    })
                }) : u.isDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: u,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != u.guild_id ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: u,
                        guildId: u.guild_id
                    })
                }) : (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function l(e, t) {
                let {
                    user: u,
                    channel: l,
                    moderationAlertId: o,
                    guildId: s,
                    analyticsLocations: a,
                    onCloseContextMenu: d
                } = t;
                if ((null == l ? void 0 : l.isGroupDM()) || (null == l ? void 0 : l.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != s ? s : null == l ? void 0 : l.getGuildId();
                null != c && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        user: u,
                        channelId: null == l ? void 0 : l.id,
                        guildId: c,
                        moderationAlertId: o,
                        analyticsLocations: a,
                        onCloseContextMenu: d
                    })
                })
            }

            function o(e, t) {
                let {
                    user: u,
                    guildId: l,
                    analyticsLocations: o,
                    onCloseContextMenu: s
                } = t;
                (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        user: u,
                        guildId: l,
                        analyticsLocations: o,
                        onCloseContextMenu: s
                    })
                })
            }

            function s(e, t, u) {
                null != u && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        guildId: u
                    })
                })
            }