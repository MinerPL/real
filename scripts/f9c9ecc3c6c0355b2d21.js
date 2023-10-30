(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41507"], {
        126501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("913144"),
                l = n("679428"),
                u = n("282109"),
                d = {
                    update(e) {
                        a.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        l.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !u.default.isGuildCollapsed(e)
                        }), a.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        358060: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                d = n("923959"),
                s = n("544955"),
                i = n("263673"),
                r = n("58622"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    guild: t,
                    onSelect: n
                } = e, f = d.default.getDefaultChannel(t.id), E = (0, i.default)(t.id), I = (0, s.default)(t), _ = (0, r.default)({
                    guild: t,
                    source: o.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: f
                });
                return (0, a.jsxs)(l.Menu, {
                    navId: "guild-context",
                    "aria-label": c.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onClose: u.closeContextMenu,
                    onSelect: n,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: E
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [I, _]
                    })]
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("957255"),
                s = n("49111"),
                i = n("695838"),
                r = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.can(s.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === i.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(u.MenuItem, {
                        id: "create-category",
                        label: r.default.Messages.CREATE_CATEGORY,
                        action: () => (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, a.jsx)(u.MenuItem, {
                    id: "create-channel",
                    label: r.default.Messages.CREATE_CHANNEL,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: s.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(u.MenuItem, {
                    id: "create-category",
                    label: r.default.Messages.CREATE_CATEGORY,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: s.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("126501"),
                s = n("282109"),
                i = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: i.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => d.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("242757"),
                s = n("923959"),
                i = n("957255"),
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: u
                } = e, r = (0, l.useStateFromStores)([s.default, i.default], () => {
                    var e;
                    let t = s.default.getChannels(n.id);
                    return null === (e = t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].find(e => i.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([i.default], () => (0, d.canViewInviteModal)(i.default, n, a, u)), f = E(t, n, c && null != a ? a : r), _ = I(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : _
            }
            let E = (e, t, l) => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: u
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(u, {
                            ...n,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                I = e => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        }
    }
]);