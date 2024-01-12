            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return c
                },
                useChannelPresetInheritance: function() {
                    return N
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return M
                },
                updateChannelNotificationSetting: function() {
                    return h
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                l = n("282109"),
                o = n("34676"),
                d = n("47495"),
                r = n("277796"),
                u = n("507313"),
                S = n("49111"),
                g = n("133335"),
                _ = n("397336");

            function c(e) {
                let t = (0, i.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, u.presetFromSettings)(t, n)
                }
            }

            function N(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => (0, d.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function f(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                n === u.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, o.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NULL,
                    flags: (0, r.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, o.NotificationLabels.PresetDefault)
            }

            function M(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, r.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabel.unreads(n))
            }

            function h(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, o.NotificationLabel.notifications(n))
            }