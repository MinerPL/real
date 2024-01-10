            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return _
                },
                useChannelPresetInheritance: function() {
                    return c
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return h
                },
                updateChannelNotificationSetting: function() {
                    return M
                }
            }), n("222007");
            var i = n("65597"),
                s = n("519705"),
                a = n("42203"),
                o = n("282109"),
                l = n("34676"),
                r = n("47495"),
                S = n("277796"),
                u = n("507313"),
                d = n("49111"),
                g = n("133335"),
                N = n("397336");

            function _(e) {
                let t = (0, i.default)([o.default], () => o.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([o.default], () => o.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, u.presetFromSettings)(t, n)
                }
            }

            function c(e) {
                let t = (0, i.useStateFromStoresArray)([o.default], () => (0, r.filterOverrides)(o.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, s] = (0, i.useStateFromStoresArray)([o.default, a.default], () => {
                        let n = a.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(o.default.resolveUnreadSetting(n), o.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(o.default.getGuildUnreadSetting(e.guild_id), o.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: s
                }
            }

            function f(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                n === u.Presets.ALL_MESSAGES ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, S.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, l.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: d.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, S.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, S.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: d.UserNotificationSettings.NULL,
                    flags: (0, S.resetChannelUnreadFlags)(o.default.getChannelIdFlags(e, t))
                }, l.NotificationLabels.PresetDefault)
            }

            function h(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                s.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, S.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabel.unreads(n))
            }

            function M(e, t, n) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, l.NotificationLabel.notifications(n))
            }