            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return g
                },
                useChannelPresetInheritance: function() {
                    return N
                },
                updateChannelPreset: function() {
                    return _
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return h
                },
                updateChannelNotificationSetting: function() {
                    return T
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                r = n("282109"),
                o = n("34676"),
                l = n("47495"),
                d = n("277796"),
                u = n("507313"),
                S = n("49111"),
                f = n("133335"),
                c = n("397336");

            function g(e) {
                let t = (0, i.default)([r.default], () => r.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([r.default], () => r.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, u.presetFromSettings)(t, n)
                }
            }

            function N(e) {
                let t = (0, i.useStateFromStoresArray)([r.default], () => (0, l.filterOverrides)(r.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([r.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(r.default.resolveUnreadSetting(n), r.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(r.default.getGuildUnreadSetting(e.guild_id), r.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function _(e, t, n) {
                let i = r.default.getChannelIdFlags(e, t);
                n === u.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, o.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NULL,
                    flags: (0, d.resetChannelUnreadFlags)(r.default.getChannelIdFlags(e, t))
                }, o.NotificationLabels.PresetDefault)
            }

            function h(e, t, n) {
                let i = r.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, d.withChannelUnreadFlags)(i, n === f.UnreadSetting.ALL_MESSAGES ? c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabel.unreads(n))
            }

            function T(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, o.NotificationLabel.notifications(n))
            }