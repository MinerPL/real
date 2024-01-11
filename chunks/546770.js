            "use strict";
            n.r(t), n.d(t, {
                updateGuildPreset: function() {
                    return r
                }
            }), n("65597");
            var i = n("519705"),
                s = n("282109"),
                a = n("34676"),
                l = n("277796"),
                u = n("507313"),
                o = n("49111"),
                d = n("397336");

            function r(e, t) {
                let n = s.default.getGuildFlags(e);
                t === u.Presets.ALL_MESSAGES ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === u.Presets.MENTIONS ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === u.Presets.NOTHING && i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }