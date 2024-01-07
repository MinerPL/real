            "use strict";
            n.r(t), n.d(t, {
                NotificationLabels: function() {
                    return r
                },
                NotificationLabel: function() {
                    return E
                },
                MessageNotificationSettings: function() {
                    return h
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return g
                },
                muteConfigToTimestamp: function() {
                    return I
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return A
                },
                getCurrentGuildSettings: function() {
                    return N
                },
                getManyCurrentGuildSettings: function() {
                    return m
                },
                getCurrentChannelSettings: function() {
                    return v
                },
                getManyCurrentChannelSettings: function() {
                    return R
                }
            }), n("702976"), n("222007");
            var i, r, s, o, u = n("716241"),
                a = n("42203"),
                l = n("282109"),
                d = n("568734"),
                c = n("49111"),
                _ = n("133335"),
                f = n("397336");
            (s = i || (i = {})).GUILD = "guild", s.CHANNEL = "channel", (o = r || (r = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
            let E = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === _.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === _.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === c.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === c.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === c.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                h = Object.freeze({
                    [c.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [c.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [c.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [c.UserNotificationSettings.NULL]: null
                });

            function g(e, t, n, i, r) {
                var s, o;
                let a = function(e) {
                        var t, n, i, r, s, o, u;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null != a.mute_config && null != a.mute_config.end_time ? new Date(a.mute_config.end_time).getTime() : e.guild_muted_until,
                            d = null != a.message_notifications ? h[a.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: l,
                            guild_flags: null !== (t = a.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = a.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = a.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (r = a.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (s = a.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (o = a.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (u = a.mute_scheduled_events) && void 0 !== u ? u : e.guild_scheduled_events_muted
                        }
                    },
                    l = a(n),
                    _ = a(N(e), t),
                    E = p(l, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    g = null !== (s = E("guild_flags")) && void 0 !== s ? s : 0,
                    I = (null !== (o = _.guild_flags) && void 0 !== o ? o : 0) ^ g,
                    A = 0 === (0, d.removeFlags)(I, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                u.default.trackWithMetadata(c.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ..._,
                    location: r,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: E("guild_flags"),
                    guild_is_muted_old: E("guild_is_muted"),
                    guild_suppress_roles_old: E("guild_suppress_roles"),
                    guild_notify_highlights_old: E("guild_notify_highlights"),
                    guild_suppress_everyone_old: E("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: E("guild_message_notification_settings"),
                    is_opt_in_only_change: A
                })
            }

            function p(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function I(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function A(e, t, n, i, r, s) {
                var o, l;
                let _ = function(t) {
                        var n, i;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            o = null != r.message_notifications ? h[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            u = null == e ? null : !0 === s || null != o;
                        return {
                            channel_is_muted: s,
                            channel_is_overridden: u,
                            channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: o,
                            channel_muted_until: I(r.mute_config)
                        }
                    },
                    E = _(i),
                    g = _(v(e, t), n),
                    A = p(E, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    N = a.default.getChannel(t),
                    m = null !== (o = A("channel_flags")) && void 0 !== o ? o : 0,
                    R = (null !== (l = g.channel_flags) && void 0 !== l ? l : 0) ^ m,
                    S = 0 === (0, d.removeFlags)(R, f.ChannelNotificationSettingsFlags.FAVORITED, f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                u.default.trackWithMetadata(c.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...g,
                    location: s,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: r,
                    parent_id: null != N ? N.parent_id : null,
                    channel_flags_old: A("channel_flags"),
                    channel_is_muted_old: A("channel_is_muted"),
                    channel_muted_until_old: A("channel_muted_until"),
                    channel_is_overridden_old: A("channel_is_overridden"),
                    channel_message_notification_settings_old: A("channel_message_notification_settings"),
                    is_opt_in_only_change: S
                })
            }

            function N(e) {
                let t = l.default.isMuted(e),
                    n = l.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: l.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: l.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: l.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: l.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: h[l.default.getMessageNotifications(e)],
                    guild_notify_highlights: l.default.getNotifyHighlights(e),
                    guild_flags: l.default.getGuildFlags(e)
                }
            }

            function m(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, N(e))), t
            }

            function v(e, t) {
                let n = l.default.isChannelMuted(e, t),
                    i = l.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: h[l.default.getChannelMessageNotifications(e, t)],
                    channel_flags: l.default.getChannelIdFlags(e, t)
                }
            }

            function R(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, v(e, t))), n
            }