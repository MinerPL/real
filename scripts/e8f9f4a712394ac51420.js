(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68700"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return s
                }
            });
            var a = n("913144");

            function i(e) {
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

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("866227"),
                i = n.n(a),
                l = n("819855"),
                u = n("913144"),
                s = n("679428"),
                d = n("282109"),
                r = n("34676"),
                o = n("397336"),
                f = n("782340"),
                c = {
                    open(e) {
                        u.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        u.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let a = (0, r.getCurrentGuildSettings)(e);
                        s.default.saveUserGuildSettings(e, t), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, a, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let a = Object.keys(t.channel_overrides),
                            i = (0, r.getCurrentGuildSettings)(e),
                            l = (0, r.getManyCurrentChannelSettings)(e, a);
                        s.default.saveUserGuildSettings(e, t), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, i, n), Object.keys(t.channel_overrides).forEach(a => {
                            let i = l.get(a);
                            (0, r.trackChannelNotificationSettingsUpdate)(e, a, t.channel_overrides[a], i, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            a = (0, r.getManyCurrentGuildSettings)(n);
                        s.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, i] = e, l = a.get(n);
                            u.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: i
                            }), (0, r.trackGuildNotificationSettingsUpdate)(n, i, l, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, a) {
                        let i = (0, r.getCurrentChannelSettings)(e, t);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, r.trackChannelNotificationSettingsUpdate)(e, t, n, i, a)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let a = Object.keys(t),
                            i = (0, r.getManyCurrentChannelSettings)(e, a);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(a => (0, r.trackChannelNotificationSettingsUpdate)(e, a, t[a], i.get(a), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            a = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            i = d.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: i & ~a | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, a) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: a.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, a) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: a.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let a = t > 0 ? i().add(t, "second").toISOString() : null;
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: a
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        u.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
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
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        549990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanGuildFeedFeatureChannel: function() {
                    return f
                }
            });
            var a = n("316693"),
                i = n("446674"),
                l = n("886484"),
                u = n("677315"),
                s = n("305961"),
                d = n("957255"),
                r = n("49111");
            let o = a.default.combine(r.Permissions.VIEW_CHANNEL, r.Permissions.MANAGE_MESSAGES, r.Permissions.READ_MESSAGE_HISTORY);

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId(),
                    a = (0, i.useStateFromStores)([d.default], () => d.default.can(o, e), [e]),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(n), [n]),
                    c = (0, u.useGuildHomeExperiment)(f, !1);
                return !!(a && null !== n && c && (null != e.parentChannelThreadType && r.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, l.isChannelAvailableInGuildFeed)(e)) || !1
            }
        },
        994827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("272030"),
                u = n("158534"),
                s = n("812204"),
                d = n("861370"),
                r = n("972701"),
                o = n("30874"),
                f = n("458574"),
                c = n("308798"),
                _ = n("44141"),
                E = n("530101"),
                h = n("64016"),
                T = n("13777"),
                g = n("37774"),
                S = n("117399"),
                M = n("400501"),
                C = n("542640"),
                N = n("255228"),
                A = n("772371"),
                I = n("604656"),
                O = n("782340"),
                U = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        onSelect: n
                    } = e, u = (0, f.default)(t), s = (0, _.default)(t), U = (0, N.default)(t), p = (0, o.default)(t), m = (0, g.default)(t), v = (0, c.default)(t), F = (0, d.default)({
                        id: t.id,
                        label: O.default.Messages.COPY_ID_THREAD
                    }), R = (0, h.default)(t, "Context Menu"), L = (0, S.default)(t), G = (0, A.default)(t), D = (0, M.default)(t), y = (0, C.default)(t.id), P = (0, T.default)(t), b = (0, I.default)(t), x = (0, E.default)(t, {
                        hoist: !0
                    }), j = (0, r.default)(t);
                    return (0, a.jsxs)(i.Menu, {
                        navId: "thread-context",
                        onClose: l.closeContextMenu,
                        "aria-label": O.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                        onSelect: n,
                        children: [(0, a.jsx)(i.MenuGroup, {
                            children: s
                        }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                            children: [R, P, p, m, D, y, u, j]
                        }, "thread-actions"), (0, a.jsxs)(i.MenuGroup, {
                            children: [U, G]
                        }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                            children: [b, x, L, v]
                        }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                            children: F
                        }, "developer-actions")]
                    })
                }, [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_THREAD_MENU])
        },
        30874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                s = n("782340");

            function d(e) {
                var t;
                let n = (0, u.useCanManageThread)(e),
                    d = (0, u.useCanUnarchiveThread)(e),
                    r = e.isArchivedThread();
                if (r ? d : n) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, a.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? s.default.Messages.UNARCHIVE_FORUM_POST : s.default.Messages.UNARCHIVE_THREAD,
                    action: () => l.default.unarchiveThread(e, !1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? s.default.Messages.ARCHIVE_FORUM_POST : s.default.Messages.ARCHIVE_THREAD,
                    action: () => l.default.archiveThread(e, !1)
                })
            }
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("281071"),
                l = n("65597"),
                u = n("77078"),
                s = n("867965"),
                d = n("42203"),
                r = n("404008"),
                o = n("49111"),
                f = n("782340");

            function c(e, t, n) {
                let c = (0, l.default)([d.default], () => d.default.getChannel(e.parent_id));
                return (0, a.jsx)(u.MenuItem, {
                    id: "channel-copy-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, s.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, i.copy)((0, r.getChannelLinkToCopy)(e, c, t, n))
                    }
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
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                s = n("819689"),
                d = n("430475"),
                r = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                _ = n("782340");

            function E(e) {
                var t;
                let E = e.isForumPost(),
                    h = (0, i.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: T,
                        canAccessChannel: g
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    S = (0, i.useStateFromStores)([r.default], () => null !== (t = r.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: M
                    } = (0, i.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    C = E && (T || h && S < 1),
                    N = E && h && !T && S > 0 && null != M;
                return g && (T || C || N) ? (0, a.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return C ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
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
                                n.onClose(), N ? s.default.deleteMessage(e.id, e.id) : u.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("267363"),
                s = n("680986"),
                d = n("689275"),
                r = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function h(e) {
                let t = function(e) {
                    let t = (0, s.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, d.default, r.default], () => {
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
                                    i = d.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (r.default.hasJoined(t) && !r.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return T
                },
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                l = n.n(i),
                u = n("446674"),
                s = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("679653"),
                _ = n("49111"),
                E = n("468200"),
                h = n("782340");
            let T = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: h.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: h.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: h.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: h.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: h.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: h.default.Messages.MUTE_DURATION_ALWAYS
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

            function S(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(i), E = (0, c.default)(e, !0);

                function S(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let M = h.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = h.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        M = h.default.Messages.MUTE_CATEGORY, C = h.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        M = h.default.Messages.MUTE_CONVERSATION, C = h.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        M = h.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), C = h.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        M = h.default.Messages.MUTE_CHANNEL_GENERIC, C = h.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: l,
                    action: () => S(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: M,
                    action: () => S(!0),
                    children: T().map(n => {
                        let {
                            value: i,
                            label: l
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = g(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        530101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("611221"),
                u = n("446674"),
                s = n("77078"),
                d = n("185014"),
                r = n("886484"),
                o = n("300322"),
                f = n("549990"),
                c = n("782340");

            function _(e, t) {
                let _ = e.guild_id,
                    E = i.useMemo(() => ({
                        guildId: _,
                        entity: e,
                        entityType: l.GuildFeedItemTypes.FORUM_POST
                    }), [_, e]),
                    h = (0, u.useStateFromStores)([d.default], () => d.default.getIsItemFeatured(E), [E]),
                    T = (0, o.useIsThreadModerator)(e),
                    g = (0, f.useCanGuildFeedFeatureChannel)(e);
                return T && g ? h ? (0, a.jsx)(s.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            UnfeatureItemConfirmationModal: e
                        } = await n.el("969715").then(n.bind(n, "969715"));
                        return t => (0, a.jsx)(e, {
                            featureableItem: E,
                            header: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                            body: c.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
                            ...t
                        })
                    })
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "guild-feed-feature",
                    label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, r.getFeatureItemsTimes)().map(i => {
                        let {
                            value: l,
                            timePeriod: u
                        } = i;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(l),
                            label: (0, r.createFeatureItemsTimeLabel)(u),
                            action: () => (0, s.openModalLazy)(async () => {
                                let {
                                    FeatureForumPostConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    thread: e,
                                    guildId: _,
                                    expiresSeconds: l,
                                    timePeriod: u,
                                    options: t,
                                    ...n
                                })
                            })
                        }, l)
                    })
                }) : null
            }
        },
        64016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("755624"),
                s = n("263024"),
                d = n("782340");

            function r(e, t) {
                let n = (0, i.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? d.default.Messages.LEAVE_FORUM_POST : d.default.Messages.LEAVE_THREAD,
                    action: () => s.default.leaveThread(e, t)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? d.default.Messages.JOIN_FORUM_POST : d.default.Messages.JOIN_THREAD,
                    action: () => s.default.joinThread(e, t)
                })
            }
        },
        13777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("917351"),
                u = n.n(l),
                s = n("446674"),
                d = n("77078"),
                r = n("848848"),
                o = n("300322"),
                f = n("800762"),
                c = n("242740"),
                _ = n("782340");

            function E(e) {
                let t = (0, o.useCanJoinThreadVoice)(e),
                    n = (0, s.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
                    l = (0, s.useStateFromStores)([f.default], () => !u.isEmpty(f.default.getVoiceStatesForChannel(e.id))),
                    {
                        needSubscriptionToAccess: E
                    } = (0, r.default)(e.id),
                    h = i.useCallback(() => {
                        c.default.handleVoiceConnect({
                            channel: e,
                            connected: n,
                            needSubscriptionToAccess: E,
                            locked: !1
                        })
                    }, [e, n, E]);
                return n || !t ? null : (0, a.jsx)(d.MenuItem, {
                    id: "join-thread-voice",
                    label: l ? _.default.Messages.JOIN_CALL : _.default.Messages.START_CALL,
                    action: h
                })
            }
        },
        37774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                s = n("782340");

            function d(e) {
                let t = (0, u.useIsThreadModerator)(e),
                    n = e.isLockedThread();
                if (t) return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? s.default.Messages.UNLOCK_FORUM_POST : s.default.Messages.UNLOCK_THREAD,
                    action: () => l.default.unlockThread(e)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? s.default.Messages.LOCK_FORUM_POST : s.default.Messages.LOCK_THREAD,
                    action: () => l.default.lockThread(e)
                })
            }
        },
        117399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("477566"),
                s = n("680986"),
                d = n("263024"),
                r = n("300322"),
                o = n("42203"),
                f = n("724210"),
                c = n("782340");

            function _(e) {
                let t = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(e.parent_id)),
                    n = (0, r.useIsThreadModerator)(e),
                    _ = (0, s.useExistingPin)(e);
                return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(f.ChannelFlags.PINNED) ? (0, a.jsx)(l.MenuItem, {
                    id: "unpin-thread",
                    label: c.default.Messages.UNPIN_POST,
                    action: () => d.default.unpin(e)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "pin-thread",
                    label: c.default.Messages.PIN_POST,
                    action: function() {
                        null != _ ? u.default.show({
                            title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: async () => {
                                await d.default.unpin(_), d.default.pin(e)
                            }
                        }) : d.default.pin(e)
                    }
                }) : null
            }
        },
        400501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("18054"),
                u = n("300322"),
                s = n("782340");

            function d(e) {
                let t = (0, u.useCanManageThread)(e),
                    n = (0, u.useIsActiveChannelOrUnarchivableThread)(e),
                    d = (0, u.useIsNonModInLockedThread)(e);
                return !t || !n || d || __OVERLAY__ ? null : (0, a.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? s.default.Messages.EDIT_FORUM_POST : s.default.Messages.EDIT_THREAD,
                    action: () => {
                        (0, i.closeAllModals)(), l.default.open(e.id)
                    }
                })
            }
        },
        542640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("272030"),
                s = n("430568"),
                d = n("385976"),
                r = n("404607"),
                o = n("680986"),
                f = n("300322"),
                c = n("42203"),
                _ = n("953371"),
                E = n("782340"),
                h = n("208701");

            function T(e) {
                let {
                    tag: t
                } = e, {
                    name: n,
                    emojiId: l,
                    emojiName: u
                } = t, r = (0, i.useStateFromStores)([d.default], () => null != l ? d.default.getUsableCustomEmojiById(l) : null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        className: h.emoji,
                        emojiId: l,
                        emojiName: u,
                        animated: !!(null == r ? void 0 : r.animated)
                    }), n]
                })
            }

            function g(e) {
                let t = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(e), [e]),
                    n = (0, f.useCanManageThread)(t),
                    s = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
                    d = (0, o.useVisibleForumTags)(s),
                    h = (0, o.useAppliedTags)(t),
                    g = h.length >= _.MAX_FORUM_POST_TAGS,
                    S = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
                if (null == t) return (0, u.closeContextMenu)(), null;
                if (!n || __OVERLAY__ || !t.isForumPost() || (null == d ? void 0 : d.length) === 0 || !S) return null;
                let M = e => {
                        let n = new Set(h);
                        if (n.has(e)) n.delete(e);
                        else {
                            if (g) return;
                            n.add(e)
                        }
                        let a = Array.from(n).map(e => e.id);
                        r.default.updateForumPostTags(t.id, a)
                    },
                    C = null == d ? void 0 : d.map(e => {
                        let t = h.includes(e);
                        return (0, a.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: (0, a.jsx)(T, {
                                tag: e
                            }),
                            disabled: g && !t,
                            action: () => M(e),
                            checked: t
                        }, e.id)
                    });
                return (0, a.jsx)(l.MenuItem, {
                    id: "edit-tags",
                    label: E.default.Messages.FORUM_TAG_POST_EDIT,
                    children: C
                })
            }
        },
        255228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                l = n.n(i),
                u = n("446674"),
                s = n("77078"),
                d = n("319165"),
                r = n("755624"),
                o = n("263024"),
                f = n("531674"),
                c = n("782340");

            function _(e) {
                let [t, n, i] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.isMuted(e.id), r.default.getMuteConfig(e.id), r.default.hasJoined(e.id)]), _ = (0, d.useMutedUntilText)(n);

                function E(t) {
                    o.default.setNotificationSettings(e, {
                        muted: t
                    })
                }
                return i ? t ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? c.default.Messages.UNMUTE_FORUM_POST : c.default.Messages.UNMUTE_THREAD,
                    subtext: _,
                    action: () => E(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
                    action: () => E(!0),
                    children: (0, f.getMuteTimes)().map(t => {
                        let {
                            value: n,
                            label: i
                        } = t;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(n),
                            label: i,
                            action: () => (function(t) {
                                let n = t > 0 ? l().add(t, "second").toISOString() : null;
                                o.default.setNotificationSettings(e, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t,
                                        end_time: n
                                    }
                                })
                            })(n)
                        }, n)
                    })
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        772371: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("755624"),
                s = n("263024"),
                d = n("414833"),
                r = n("648564"),
                o = n("782340");

            function f(e) {
                let t = (0, d.useThreadNotificationSetting)(e),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "thread-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    children: (0, r.getThreadNotificationOptions)().map(n => {
                        let {
                            setting: i,
                            label: u
                        } = n;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: u,
                            action: () => s.default.setNotificationSettings(e, {
                                flags: i
                            }),
                            checked: i === t
                        }, i)
                    })
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "notifications-disabled",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }
        },
        604656: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                s = n("49111"),
                d = n("782340");

            function r(e) {
                var t, n;
                let r = (0, u.useIsThreadModerator)(e);
                if (!r || e.type !== s.ChannelTypes.PRIVATE_THREAD) return null;
                let o = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: d.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: o,
                    action: () => l.default.setInvitable(e, !o)
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("845579"),
                u = n("662255"),
                s = n("306160");

            function d(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: d,
                    shiftId: r,
                    showIconFirst: o
                } = e, f = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !f || !s.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, a.jsx)(i.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, s.copy)(n), null == d || d()
                    },
                    icon: u.default,
                    showIconFirst: o
                }, c)
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
                    return h
                },
                removeFavoriteCategory: function() {
                    return T
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return S
                }
            });
            var a = n("249654"),
                i = n("151426"),
                l = n("872173"),
                u = n("42203"),
                s = n("957255"),
                d = n("379881"),
                r = n("843455");

            function o() {
                let e = d.default.getFavoriteChannels(),
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
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(r.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = d.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = d.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
                let n = d.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function h(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T(e) {
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

            function S() {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("923959"),
                s = n("379881"),
                d = n("200008"),
                r = n("498139"),
                o = n("49111"),
                f = n("782340");

            function c(e, t) {
                return e.type === o.ChannelTypes.GROUP_DM ? t ? f.default.Messages.UNFAVORITE_GDM : f.default.Messages.FAVORITE_GDM : e.type === o.ChannelTypes.DM ? t ? f.default.Messages.UNFAVORITE_DM : f.default.Messages.FAVORITE_DM : t ? f.default.Messages.UNFAVORITE_CHANNEL : f.default.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                var t;
                let n = (0, i.useStateFromStores)([s.default], () => s.default.isFavorite(e.id)),
                    f = function(e) {
                        let t = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(o.FAVORITES))[o.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = r.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function s(t) {
                            (0, d.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: c(e, !1),
                            action: () => s(null)
                        }) : (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: c(e, !1),
                            action: () => s(null),
                            children: t.map(e => (0, a.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => s(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let _ = (t = e, (0, a.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: c(t, !0),
                    action: function() {
                        (0, d.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? _ : f
            }
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return u
                },
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("782340");

            function u(e) {
                return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function s(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, l = u(t);
                return null != l ? (0, a.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: l
                }) : null
            }
        },
        414833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                computeThreadNotificationSetting: function() {
                    return f
                },
                useThreadNotificationSetting: function() {
                    return c
                }
            });
            var a = n("446674"),
                i = n("208127"),
                l = n("42203"),
                u = n("282109"),
                s = n("568734"),
                d = n("755624"),
                r = n("648564"),
                o = n("49111");

            function f(e) {
                let t = d.default.flags(e.id);
                if (null == t || (0, i.isReadStateStaffExperimentEnabled)() && d.default.isMuted(e.id)) return r.ThreadMemberFlags.NO_MESSAGES;
                if ((0, s.hasFlag)(t, r.ThreadMemberFlags.ALL_MESSAGES)) return r.ThreadMemberFlags.ALL_MESSAGES;
                if ((0, s.hasFlag)(t, r.ThreadMemberFlags.ONLY_MENTIONS)) return r.ThreadMemberFlags.ONLY_MENTIONS;
                if ((0, s.hasFlag)(t, r.ThreadMemberFlags.NO_MESSAGES)) return r.ThreadMemberFlags.NO_MESSAGES;
                let n = l.default.getChannel(e.parent_id);
                if (null == n || u.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return r.ThreadMemberFlags.NO_MESSAGES;
                let a = u.default.resolvedMessageNotifications(n);
                return a === o.UserNotificationSettings.NO_MESSAGES ? r.ThreadMemberFlags.NO_MESSAGES : a === o.UserNotificationSettings.ONLY_MENTIONS ? r.ThreadMemberFlags.ONLY_MENTIONS : r.ThreadMemberFlags.ALL_MESSAGES
            }

            function c(e) {
                return (0, a.useStateFromStores)([d.default, u.default, l.default], () => f(e), [e])
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("872717"),
                u = n("689988"),
                s = n("605250"),
                d = n("870691"),
                r = n("42203"),
                o = n("49111");
            let f = {},
                c = new s.default("UserGuildSettingsManager"),
                _ = 0;

            function E() {
                f = {
                    ...d.default.getCollapsedCategories()
                }
            }

            function h() {
                !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => T(), 15e3))
            }
            async function T(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(_);
                let t = 0 !== Object.keys(e).length,
                    n = d.default.getCollapsedCategories(),
                    a = function() {
                        let e = {},
                            t = d.default.getCollapsedCategories();
                        for (let n in t) t[n] !== f[n] && (e[n] = !0);
                        for (let n in f) t[n] !== f[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in a) {
                    let a = r.default.getChannel(i);
                    null != a && null != a.guild_id && (!(a.guild_id in e) && (e[a.guild_id] = {}), null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {}), e[a.guild_id].channel_overrides[a.id] = {
                        ...e[a.guild_id].channel_overrides[a.id],
                        collapsed: a.id in n
                    }, t = !0)
                }
                if (!t) return;
                f = {
                    ...n
                };
                let u = i.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; u.length > 0;) {
                    let e = u.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await l.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await S(1e3)
                    } catch (t) {
                        c.error(t), e.attempts += 1, e.attempts < 3 && u.push(e), await S(5e3)
                    }
                }
            }

            function S(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function M() {
                f = {
                    ...d.default.getCollapsedCategories()
                }
            }
            class C extends u.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: h,
                        CATEGORY_EXPAND: h,
                        CATEGORY_COLLAPSE_ALL: h,
                        CATEGORY_EXPAND_ALL: h,
                        POST_CONNECTION_OPEN: E,
                        USER_GUILD_SETTINGS_FULL_UPDATE: M
                    }, this.saveUserGuildSettings = T, this.saveUserGuildSettingsBulk = g
                }
            }
            var N = new C
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("446674"),
                i = n("913144"),
                l = n("449008"),
                u = n("42203"),
                s = n("341542"),
                d = n("923959"),
                r = n("49111");
            let o = {},
                f = 0;

            function c() {
                f += 1
            }

            function _(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class E extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default, s.default), this.removeChangeListener(c), this.addChangeListener(c), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return f
                }
            }
            E.displayName = "CategoryCollapseStore", E.persistKey = "collapsedCategories";
            var h = new E(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in o) {
                        let t = u.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return _(t)
                }
            })
        }
    }
]);