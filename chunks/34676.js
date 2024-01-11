            "use strict";
            n.r(t), n.d(t, {
                NotificationLabels: function() {
                    return r
                },
                NotificationLabel: function() {
                    return h
                },
                MessageNotificationSettings: function() {
                    return p
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return g
                },
                muteConfigToTimestamp: function() {
                    return A
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return m
                },
                getCurrentGuildSettings: function() {
                    return N
                },
                getManyCurrentGuildSettings: function() {
                    return v
                },
                getCurrentChannelSettings: function() {
                    return R
                },
                getManyCurrentChannelSettings: function() {
                    return S
                }
            }), n("702976"), n("222007");
            var i, r, s, o, l = n("716241"),
                u = n("637929"),
                a = n("42203"),
                d = n("282109"),
                c = n("568734"),
                _ = n("49111"),
                f = n("133335"),
                E = n("397336");
            (s = i || (i = {})).GUILD = "guild", s.CHANNEL = "channel", (o = r || (r = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
            let h = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === f.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === f.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === _.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === _.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === _.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                p = Object.freeze({
                    [_.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [_.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [_.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [_.UserNotificationSettings.NULL]: null
                });

            function g(e, t, n, i, r) {
                var s, o;
                let a = function(e) {
                        var t, n, i, r, s, o, l;
                        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = null != u.mute_config && null != u.mute_config.end_time ? new Date(u.mute_config.end_time).getTime() : e.guild_muted_until,
                            d = null != u.message_notifications ? p[u.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: a,
                            guild_flags: null !== (t = u.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = u.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = u.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (r = u.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (s = u.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (o = u.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (l = u.mute_scheduled_events) && void 0 !== l ? l : e.guild_scheduled_events_muted
                        }
                    },
                    d = a(n),
                    f = a(N(e), t),
                    h = I(d, f, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    g = null !== (s = h("guild_flags")) && void 0 !== s ? s : 0,
                    A = (null !== (o = f.guild_flags) && void 0 !== o ? o : 0) ^ g,
                    m = 0 === (0, c.removeFlags)(A, E.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, E.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                l.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...f,
                    ...u.default.getStats(e),
                    location: r,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: h("guild_flags"),
                    guild_is_muted_old: h("guild_is_muted"),
                    guild_suppress_roles_old: h("guild_suppress_roles"),
                    guild_notify_highlights_old: h("guild_notify_highlights"),
                    guild_suppress_everyone_old: h("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: h("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: h("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: h("guild_message_notification_settings"),
                    is_opt_in_only_change: m
                })
            }

            function I(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function A(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function m(e, t, n, i, r, s) {
                var o, d;
                let f = function(t) {
                        var n, i;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            o = null != r.message_notifications ? p[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            l = null == e ? null : !0 === s || null != o;
                        return {
                            channel_is_muted: s,
                            channel_is_overridden: l,
                            channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: o,
                            channel_muted_until: A(r.mute_config)
                        }
                    },
                    h = f(i),
                    g = f(R(e, t), n),
                    m = I(h, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    N = a.default.getChannel(t),
                    v = null !== (o = m("channel_flags")) && void 0 !== o ? o : 0,
                    S = (null !== (d = g.channel_flags) && void 0 !== d ? d : 0) ^ v,
                    T = 0 === (0, c.removeFlags)(S, E.ChannelNotificationSettingsFlags.FAVORITED, E.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                l.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...g,
                    ...u.default.getStats(e),
                    location: s,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: r,
                    parent_id: null != N ? N.parent_id : null,
                    channel_flags_old: m("channel_flags"),
                    channel_is_muted_old: m("channel_is_muted"),
                    channel_muted_until_old: m("channel_muted_until"),
                    channel_is_overridden_old: m("channel_is_overridden"),
                    channel_message_notification_settings_old: m("channel_message_notification_settings"),
                    is_opt_in_only_change: T
                })
            }

            function N(e) {
                let t = d.default.isMuted(e),
                    n = d.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: p[d.default.getMessageNotifications(e)],
                    guild_notify_highlights: d.default.getNotifyHighlights(e),
                    guild_flags: d.default.getGuildFlags(e)
                }
            }

            function v(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, N(e))), t
            }

            function R(e, t) {
                let n = d.default.isChannelMuted(e, t),
                    i = d.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: p[d.default.getChannelMessageNotifications(e, t)],
                    channel_flags: d.default.getChannelIdFlags(e, t)
                }
            }

            function S(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, R(e, t))), n
            }