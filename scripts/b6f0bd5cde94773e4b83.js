(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return s
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return i
                },
                categoryExpandAll: function() {
                    return u
                }
            });
            var a = n("913144");

            function s(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, s.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        142047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("272030"),
                i = n("158534"),
                u = n("812204"),
                r = n("861370"),
                d = n("20209"),
                o = n("390008"),
                f = n("178261"),
                c = n("852275"),
                _ = n("963150"),
                E = n("655235"),
                S = n("308798"),
                M = n("47006"),
                g = n("44141"),
                N = n("531674"),
                A = n("619436"),
                C = n("339876"),
                T = n("809937"),
                U = n("782340");

            function O(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, i = (0, g.default)(t), u = (0, N.default)(t), d = (0, A.default)(t), _ = (0, c.default)(t), S = (0, f.default)(t), M = (0, o.default)(t), C = (0, E.default)(t), T = (0, r.default)({
                    id: t.id,
                    label: U.default.Messages.COPY_ID_CHANNEL
                });
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": U.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: i
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [u, d]
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [_, S, M]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: T
                    })]
                })
            }

            function L(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: i
                } = e, u = (0, g.default)(t), d = (0, N.default)(t), E = (0, A.default)(t), O = (0, c.default)(t), L = (0, f.default)(t), h = (0, M.default)(t), I = (0, o.default)(t), p = (0, _.default)(t, n), R = (0, S.default)(t), v = (0, r.default)({
                    id: t.id,
                    label: U.default.Messages.COPY_ID_CHANNEL
                }), m = (0, C.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": U.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(s.MenuGroup, {
                        children: [m, O, L]
                    }, "channel-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [d, E, (0, T.default)(t)]
                    }, "notifications"), (0, a.jsxs)(s.MenuGroup, {
                        children: [h, I, p, R]
                    }, "admin-actions"), (0, a.jsx)(s.MenuGroup, {
                        children: v
                    }, "developer-actions")]
                })
            }
            var h = (0, i.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(O, {
                    ...e
                }) : (0, a.jsx)(L, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("820542"),
                u = n("870691"),
                r = n("42203"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, s.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(l.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, i.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("820542"),
                u = n("870691"),
                r = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: r.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, i.categoryExpand)(e.id) : (0, i.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("957255"),
                u = n("49111"),
                r = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, s.useStateFromStores)([i.default], () => i.default.can(u.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let f = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: d,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (d) {
                    case u.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case u.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: f
                        });
                    default:
                        return null
                }
            }
        },
        655235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("200008"),
                i = n("782340");

            function u(e) {
                return (0, a.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: i.default.Messages.DELETE_CATEGORY,
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, l.removeFavoriteCategory)(e.id)
                            },
                            channel: e
                        })
                    })
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("18054"),
                u = n("819689"),
                r = n("430475"),
                d = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                _ = n("782340");

            function E(e) {
                let t = e.isForumPost(),
                    E = (0, s.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: M
                    } = (0, s.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    g = (0, s.useStateFromStores)([d.default], () => {
                        var t;
                        return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: N
                    } = (0, s.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    A = t && (S || E && g < 1),
                    C = t && E && !S && g > 0 && null != N;
                return M && (S || A || C) ? (0, a.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return A ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return _.default.Messages.DELETE_THREAD;
                        return _.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), C ? u.default.deleteMessage(e.id, e.id) : i.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("18054"),
                u = n("957255"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: f
                } = (0, s.useStateFromStoresObject)([u.default], () => ({
                    canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: u.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => i.default.open(e.id)
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("267363"),
                u = n("680986"),
                r = n("689275"),
                d = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, s.useStateFromStores)([c.default, f.default, r.default, d.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
                            {
                                let t = f.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && c.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    s = r.default.getThreadsForGuild(e.guild_id);
                                for (let e in s)
                                    if (a.has(e)) {
                                        for (let t in s[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, i.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return M
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                l = n.n(s),
                i = n("446674"),
                u = n("77078"),
                r = n("820542"),
                d = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("679653"),
                _ = n("49111"),
                E = n("468200"),
                S = n("782340");
            let M = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function N(e, t) {
                let [n, s] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(s), E = (0, c.default)(e, !0);

                function N(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let A = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        A = S.default.Messages.MUTE_CATEGORY, C = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        A = S.default.Messages.MUTE_CONVERSATION, C = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        A = S.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), C = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        A = S.default.Messages.MUTE_CHANNEL_GENERIC, C = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: l,
                    action: () => N(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: A,
                    action: () => N(!0),
                    children: M().map(n => {
                        let {
                            value: s,
                            label: l
                        } = n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: l,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = g(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(s)
                        }, s)
                    })
                })
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return f
                },
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("519705"),
                u = n("282109"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                var t, n;
                switch (e.type) {
                    case r.ChannelTypes.GUILD_VOICE:
                        return null;
                    case r.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    f = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(t)[n], [t, n]),
                    c = (0, s.useStateFromStores)([u.default], () => {
                        let n = r.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = u.default.getChannelMessageNotifications(t, e.parent_id)), n !== r.UserNotificationSettings.NULL ? n : u.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    _ = (0, s.useStateFromStores)([u.default], () => u.default.getNewForumThreadsCreated(e)),
                    E = null == f ? r.UserNotificationSettings.NULL : f.message_notifications,
                    S = o(e);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: _,
                            action: () => i.default.setForumThreadsCreated(e, !_)
                        }), (0, a.jsx)(l.MenuSeparator, {})]
                    }) : null, S.map(e => {
                        let {
                            setting: s,
                            label: u
                        } = e;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(s),
                            label: u,
                            subtext: s === r.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case r.UserNotificationSettings.ALL_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case r.UserNotificationSettings.ONLY_MENTIONS:
                                        return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case r.UserNotificationSettings.NO_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_NOTHING;
                                    case r.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = s, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: s === E
                        }, s)
                    })]
                })
            }

            function c(e) {
                var t, n;
                let i = f(e),
                    c = (0, s.useStateFromStores)([u.default], () => u.default.resolvedMessageNotifications(e), [e]),
                    _ = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    E = null == _ ? r.UserNotificationSettings.NULL : _.message_notifications,
                    S = E === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = o(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: S,
                    children: i
                }) : null
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("629220"),
                u = n("512395"),
                r = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, u.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, s.useStateFromStores)([r.default], () => r.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, s.useStateFromStores)([r.default], () => null != e.parent_id && r.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, s.useStateFromStores)([r.default], () => r.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, i.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, i.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, i.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => _()
                    })]
                })
            }
        },
        809937: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("47495"),
                u = n("831394"),
                r = n("282109"),
                d = n("133335"),
                o = n("782340");

            function f(e) {
                var t;
                let n = (0, s.useStateFromStores)([r.default], () => r.default.getChannelRecordUnreadSetting(e)),
                    f = (0, s.useStateFromStores)([r.default], () => r.default.getChannelUnreadMode(e));
                if (!(0, i.useShouldUseNewNotificationSystem)("useChannelUnreadItems")) return null;
                return (0, a.jsx)(l.MenuItem, {
                    id: "channel-unreads",
                    label: o.default.Messages.UNREAD_SETTINGS,
                    subtext: f === d.UnreadMode.IMPORTANT ? o.default.Messages.FORM_LABEL_ALL_MESSAGES : o.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: (t = e, [{
                        setting: d.UnreadSetting.UNSET,
                        label: null != t.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                    }, {
                        setting: d.UnreadSetting.ALL_MESSAGES,
                        label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                    }, {
                        setting: d.UnreadSetting.ONLY_MENTIONS,
                        label: o.default.Messages.HIGHLIGHTS_AND_MENTIONS
                    }]).map(t => {
                        let {
                            setting: s,
                            label: i
                        } = t;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(s),
                            label: i,
                            action: () => (0, u.setChannelUnreadSetting)(e.guild_id, e.id, s),
                            checked: s === n
                        }, s)
                    })
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return E
                },
                addFavoriteCategory: function() {
                    return S
                },
                removeFavoriteCategory: function() {
                    return M
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return N
                }
            }), n("222007");
            var a = n("249654"),
                s = n("151426"),
                l = n("872173"),
                i = n("42203"),
                u = n("957255"),
                r = n("379881"),
                d = n("843455");

            function o() {
                let e = r.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === s.FavoriteChannelType.CATEGORY) continue;
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !u.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = s.FavoriteChannel.create({
                        nickname: "",
                        type: s.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = r.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === s.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
                let n = r.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = s.FavoriteChannel.create({
                        nickname: e,
                        type: s.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function M(e) {
                _(e)
            }

            function g(e) {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N() {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("162771"),
                l = n("49111");

            function i() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === l.FAVORITES
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("162771"),
                u = n("49111"),
                r = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: r.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return o
                },
                filterOverrides: function() {
                    return f
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            });
            var a = n("446674"),
                s = n("668597"),
                l = n("282109"),
                i = n("640497"),
                u = n("49111"),
                r = n("468200"),
                d = n("782340");

            function o() {
                return [{
                    label: d.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: d.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: d.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: d.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: d.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: d.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }

            function f(e) {
                return Object.keys(e).filter(t => !!(0, s.computeIsMuted)(e[t]) || e[t].message_notifications !== u.UserNotificationSettings.NULL || !1)
            }

            function c(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.useNewNotifications);
                return i.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        831394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return r
                },
                setGuildUnreadSetting: function() {
                    return d
                }
            });
            var a = n("519705"),
                s = n("282109"),
                l = n("568734"),
                i = n("133335"),
                u = n("397336");

            function r(e, t, n) {
                let r = s.default.getChannelIdFlags(e, t);
                r = (0, l.setFlag)(r, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === i.UnreadSetting.ALL_MESSAGES), r = (0, l.setFlag)(r, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === i.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: r
                })
            }

            function d(e, t) {
                let n = s.default.getGuildFlags(e);
                n = (0, l.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === i.UnreadSetting.ALL_MESSAGES), n = (0, l.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === i.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        }
    }
]);