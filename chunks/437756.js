            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return S
                },
                useChannelPresetInheritance: function() {
                    return g
                },
                updateChannelPreset: function() {
                    return E
                },
                updateChannelToGuildDefault: function() {
                    return N
                },
                updateChannelUnreadSetting: function() {
                    return M
                },
                updateChannelNotificationSetting: function() {
                    return A
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                l = n("282109"),
                u = n("34676"),
                r = n("47495"),
                o = n("277796"),
                d = n("507313"),
                f = n("49111"),
                c = n("133335"),
                _ = n("397336");

            function S(e) {
                let t = (0, i.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, d.presetFromSettings)(t, n)
                }
            }

            function g(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, d.presetName)((0, d.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, d.presetName)((0, d.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function E(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                n === d.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, u.NotificationLabels.PresetAll) : n === d.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetMentions) : n === d.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetNothing)
            }

            function N(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.NULL,
                    flags: (0, o.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, u.NotificationLabels.PresetDefault)
            }

            function M(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, o.withChannelUnreadFlags)(i, n === c.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabel.unreads(n))
            }

            function A(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, u.NotificationLabel.notifications(n))
            }