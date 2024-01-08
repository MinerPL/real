            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            }), n("222007"), n("702976");
            var i = n("917351"),
                r = n.n(i),
                s = n("446674"),
                a = n("913144"),
                o = n("668597"),
                l = n("38654"),
                u = n("640497"),
                c = n("755624"),
                d = n("233069"),
                f = n("568734"),
                E = n("42203"),
                h = n("305961"),
                p = n("697218"),
                _ = n("49111"),
                S = n("76618"),
                m = n("133335"),
                T = n("397336");
            let g = {},
                I = {},
                C = {},
                v = !1,
                A = {
                    flags: 0
                },
                R = new o.default,
                N = new o.default,
                O = {
                    suppress_everyone: !1,
                    suppress_roles: !1,
                    mute_scheduled_events: !1,
                    mobile_push: !0,
                    muted: !1,
                    message_notifications: _.UserNotificationSettings.ALL_MESSAGES,
                    flags: 0,
                    channel_overrides: {},
                    notify_highlights: _.HighlightSettings.NULL
                },
                D = {
                    [_.UserNotificationSettings.ALL_MESSAGES]: {
                        ...O,
                        message_notifications: _.UserNotificationSettings.ALL_MESSAGES
                    },
                    [_.UserNotificationSettings.ONLY_MENTIONS]: {
                        ...O,
                        message_notifications: _.UserNotificationSettings.ONLY_MENTIONS
                    }
                },
                y = {},
                P = {},
                L = new Set,
                b = {},
                M = {};

            function U(e, t) {
                var n;
                let i = g[e],
                    s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
                    a = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e instanceof Array ? r.keyBy(e, "channel_id") : e
                    }(t.channel_overrides),
                    o = {
                        ...V(e),
                        ...i,
                        ...t,
                        channel_overrides: a
                    };
                R.clearTimer(e), !0 === o.muted && R.setTimer(e, o.mute_config, () => {
                    G(e, {
                        muted: !1
                    }), z.emitChange()
                }), r.forEach(s, e => {
                    N.clearTimer(e.channel_id)
                }), r.forEach(a, t => {
                    !0 === t.muted && N.setTimer(t.channel_id, t.mute_config, () => {
                        w(e, t.channel_id, {
                            muted: !1
                        }), z.emitChange()
                    })
                }), g[e] = o, y[e] = j(g[e]);
                let l = r.filter(o.channel_overrides, e => {
                    var t;
                    return f.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
                });
                P[e] = new Set(l.map(e => e.channel_id)),
                    function(e) {
                        var t;
                        if (null == e) return;
                        let n = new Set(P[e]),
                            i = null !== (t = b[e]) && void 0 !== t ? t : {};
                        for (let e in i) {
                            let t = i[e];
                            f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
                        }
                        Object.keys(i).length > 0 ? M[e] = n : delete M[e]
                    }(e), delete C[e]
            }

            function G(e, t) {
                var n;
                let i = g[e];
                U(e, {
                    channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
                    ...t
                })
            }

            function w(e, t, n) {
                let i = F(e, t, n);
                x(e, {
                    [t]: i
                })
            }

            function k(e, t) {
                var n;
                let i = {},
                    r = null !== (n = null != e ? b[e] : null) && void 0 !== n ? n : {};
                Object.keys(t).forEach(n => {
                    var s;
                    let a = F(e, n, t[n]);
                    i[n] = a, r[n] = {
                        flags: null !== (s = a.flags) && void 0 !== s ? s : 0
                    }
                }), null != e && (b[e] = {
                    ...b[e],
                    ...r
                }), x(e, i)
            }

            function x(e, t) {
                var n;
                let i = g[e],
                    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
                U(e, {
                    channel_overrides: null == i ? t : {
                        ...r,
                        ...t
                    }
                })
            }

            function F(e, t, n) {
                var i;
                let r = g[e],
                    s = null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {};
                return {
                    channel_id: t,
                    muted: !1,
                    ...s[t],
                    ...n
                }
            }

            function V(e) {
                let t = h.default.getGuild(e),
                    n = null != t ? t.defaultMessageNotifications : _.UserNotificationSettings.ALL_MESSAGES;
                return D[n]
            }

            function B(e) {
                var t;
                return null !== (t = g[e]) && void 0 !== t ? t : V(e)
            }

            function H(e) {
                v = f.hasFlag(e.flags, S.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), A = e
            }

            function j(e) {
                return new Set(null != e.channel_overrides ? r(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
            }

            function Y() {
                return !0
            }

            function W() {
                return v && u.default.getCurrentConfig({
                    location: "UserGuildSettingsStore"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
            class K extends s.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(p.default, h.default, l.default, c.default), null != e) {
                        var t;
                        I = e.collapsedGuilds, g = e.userGuildSettings, P = r.mapValues(null !== (t = e.optedInChannelsByGuild) && void 0 !== t ? t : {}, e => new Set(e)), null != e.useNewNotifications && (v = e.useNewNotifications), r.forEach(g, (e, t) => {
                            y[t] = j(e)
                        })
                    }
                }
                getState() {
                    return {
                        collapsedGuilds: I,
                        userGuildSettings: g,
                        optedInChannelsByGuild: P,
                        useNewNotifications: v
                    }
                }
                isSuppressEveryoneEnabled(e) {
                    return B(e).suppress_everyone
                }
                isSuppressRolesEnabled(e) {
                    return B(e).suppress_roles
                }
                isMuteScheduledEventsEnabled(e) {
                    return B(e).mute_scheduled_events
                }
                isMobilePushEnabled(e) {
                    return B(e).mobile_push
                }
                isMuted(e) {
                    let t = B(e);
                    return (0, o.computeIsMuted)(t)
                }
                isTemporarilyMuted(e) {
                    let t = B(e);
                    return (0, o.isTemporarilyMuted)(t)
                }
                getMuteConfig(e) {
                    let t = B(e);
                    return t.mute_config
                }
                getMessageNotifications(e) {
                    return B(e).message_notifications
                }
                getChannelOverrides(e) {
                    var t;
                    return null !== (t = B(e).channel_overrides) && void 0 !== t ? t : {}
                }
                getNotifyHighlights(e) {
                    return B(e).notify_highlights
                }
                getGuildFlags(e) {
                    return B(e).flags
                }
                getChannelMessageNotifications(e, t) {
                    let n = this.getChannelOverrides(e)[t];
                    return null == n || null == n.message_notifications ? _.UserNotificationSettings.NULL : n.message_notifications
                }
                getChannelMuteConfig(e, t) {
                    let n = this.getChannelOverrides(e)[t];
                    return null != n ? n.mute_config : null
                }
                getMutedChannels(e) {
                    var t;
                    return null !== (t = y[e]) && void 0 !== t ? t : L
                }
                isChannelMuted(e, t) {
                    var n;
                    let i = E.default.getChannel(t);
                    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
                }
                isCategoryMuted(e, t) {
                    let n = E.default.getChannel(t);
                    if (null == n) return !1;
                    let i = n.parent_id;
                    return null != i && this.getMutedChannels(e).has(i)
                }
                resolvedMessageNotifications(e) {
                    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
                    if (t !== _.UserNotificationSettings.NULL) return t;
                    if (null != e.parent_id) {
                        let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
                        if (t !== _.UserNotificationSettings.NULL) return t
                    }
                    return this.getMessageNotifications(e.guild_id)
                }
                resolveUnreadSetting(e) {
                    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
                    if (t !== m.UnreadSetting.UNSET) return t;
                    if (null != e.parent_id) {
                        let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
                        if (t !== m.UnreadSetting.UNSET) return t
                    }
                    let n = this.getGuildUnreadSetting(e.guild_id);
                    return n !== m.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS
                }
                isGuildOrCategoryOrChannelMuted(e, t) {
                    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
                }
                allowNoMessages(e) {
                    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === _.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
                }
                allowAllMessages(e) {
                    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
                }
                isGuildCollapsed(e) {
                    return I[e] || !1
                }
                getAllSettings() {
                    return {
                        userGuildSettings: g,
                        mutedChannels: y,
                        collapsedGuilds: I,
                        optedInChannelsByGuild: P
                    }
                }
                getChannelIdFlags(e, t) {
                    var n;
                    let i = this.getChannelOverrides(e)[t];
                    return null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0
                }
                getChannelFlags(e) {
                    return this.getChannelIdFlags(e.guild_id, e.id)
                }
                getNewForumThreadsCreated(e) {
                    let t = this.getChannelOverrides(e.guild_id)[e.id];
                    if (null != t && null != t.flags) {
                        if (f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
                        if (f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
                    }
                    return this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES
                }
                isOptInEnabled(e) {
                    return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : f.hasFlag(this.getGuildFlags(e), T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
                }
                isChannelRecordOrParentOptedIn(e, t) {
                    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
                }
                isChannelOrParentOptedIn(e, t, n) {
                    return this.isChannelRecordOrParentOptedIn(E.default.getChannel(t), n)
                }
                isChannelOptedIn(e, t) {
                    var n, i;
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e) return !1;
                    if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
                    if (r && null != M[e]) return M[e].has(t);
                    let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
                    return f.hasFlag(s, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
                }
                getOptedInChannels(e) {
                    var t, n;
                    return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : L : null !== (n = P[e]) && void 0 !== n ? n : L
                }
                getOptedInChannelsWithPendingUpdates(e) {
                    return M[e]
                }
                getPendingChannelUpdates(e) {
                    return b[e]
                }
                getGuildFavorites(e) {
                    if (l.default.isFullServerPreview(e)) return null;
                    if (null == C[e]) {
                        let t = r.filter(this.getChannelOverrides(e), t => {
                            var n, i;
                            return f.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, T.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = E.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
                        });
                        C[e] = t.map(e => e.channel_id)
                    }
                    return C[e]
                }
                isFavorite(e, t) {
                    var n;
                    return !l.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
                }
                isMessagesFavorite(e) {
                    var t, n;
                    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
                    return f.hasFlag(i, T.ChannelNotificationSettingsFlags.FAVORITED)
                }
                isAddedToMessages(e) {
                    var t, n;
                    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
                    return f.hasFlag(i, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
                }
                getAddedToMessages() {
                    var e;
                    return null !== (e = P.null) && void 0 !== e ? e : L
                }
                get accountNotificationSettings() {
                    return A
                }
                get useNewNotifications() {
                    return v
                }
                getGuildUnreadSetting(e) {
                    let t = this.getGuildFlags(e);
                    return f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
                }
                getGuildUnreadMode(e) {
                    if (this.isMuted(e.id)) return m.UnreadMode.NONE;
                    if (!W()) return m.UnreadMode.IMPORTANT;
                    let t = this.getGuildUnreadSetting(e.id);
                    return t === m.UnreadSetting.ALL_MESSAGES ? m.UnreadMode.IMPORTANT : t === m.UnreadSetting.ONLY_MENTIONS ? m.UnreadMode.LESS_IMPORTANT : e.defaultMessageNotifications === _.UserNotificationSettings.ALL_MESSAGES ? m.UnreadMode.IMPORTANT : m.UnreadMode.LESS_IMPORTANT
                }
                getChannelRecordUnreadSetting(e) {
                    return this.getChannelUnreadSetting(e.guild_id, e.id)
                }
                getChannelUnreadSetting(e, t) {
                    let n = this.getChannelIdFlags(e, t);
                    return f.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : f.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
                }
                getChannelUnreadMode(e) {
                    return d.THREAD_CHANNEL_TYPES.has(e.type) ? c.default.isMuted(e.id) ? m.UnreadMode.NONE : m.UnreadMode.IMPORTANT : this.getMutedChannels(e.guild_id).has(e.id) ? m.UnreadMode.NONE : W() ? this.resolveUnreadSetting(e) === m.UnreadSetting.ALL_MESSAGES ? m.UnreadMode.IMPORTANT : m.UnreadMode.LESS_IMPORTANT : m.UnreadMode.IMPORTANT
                }
            }
            K.displayName = "UserGuildSettingsStore", K.persistKey = "collapsedGuilds", K.migrations = [e => ({
                collapsedGuilds: e,
                userGuildSettings: {}
            })];
            let z = new K(a.default, {
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        null != e.guild_id && (I[e.guild_id] = !0 === e.hide_muted_channels), U(e.guild_id, {
                            channel_overrides: {},
                            ...e
                        })
                    })
                },
                USER_GUILD_SETTINGS_GUILD_UPDATE: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    G(t, n)
                },
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    G(t, n), k(t, n.channel_overrides)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        settings: i
                    } = e;
                    null != t && null != i.flags && (b[t] = {
                        ...b[t],
                        [n]: {
                            flags: i.flags
                        }
                    }), w(t, n, i)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
                    let {
                        guildId: t,
                        overrides: n
                    } = e;
                    return !(null == t || l.default.isFullServerPreview(t)) && (k(t, n), !0)
                },
                CONNECTION_OPEN: function(e) {
                    H(e.notificationSettings), !e.userGuildSettings.partial && (R.reset(), N.reset(), g = {}, y = {}, P = {}), !e.userGuildSettings.partial && (I = {}, e.userGuildSettings.entries.forEach(e => {
                        null != e.guild_id && (I[e.guild_id] = !0 === e.hide_muted_channels)
                    })), e.userGuildSettings.entries.forEach(e => {
                        !("channel_overrides" in e) && (e.channel_overrides = {}), U(e.guild_id, e)
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        allUserGuildSettings: t
                    } = e, {
                        userGuildSettings: n,
                        mutedChannels: i,
                        collapsedGuilds: r,
                        optedInChannelsByGuild: s
                    } = t;
                    g = {
                        ...n
                    }, y = {}, P = {}, Object.keys(i).forEach(e => {
                        y[e] = new Set(i[e])
                    }), Object.keys(s).forEach(e => {
                        P[e] = new Set(s[e])
                    }), I = {
                        ...r
                    }
                },
                GUILD_CREATE: Y,
                GUILD_UPDATE: Y,
                GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
                    let {
                        guildId: t
                    } = e;
                    I[t] = !I[t]
                },
                IMPERSONATE_UPDATE: Y,
                IMPERSONATE_STOP: Y,
                USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
                    let {
                        guildId: t,
                        updates: n
                    } = e;
                    if (null == t) return !1;
                    let i = b[t];
                    if (null == i) return !1;
                    for (let e in n) r.isEqual(n[e], i[e]) && delete i[e]
                },
                CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return !1;
                    delete b[t], delete M[t]
                },
                NOTIFICATION_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    H(t)
                }
            });
            var q = z