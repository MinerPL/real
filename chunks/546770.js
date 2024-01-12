            "use strict";
            s.r(t), s.d(t, {
                updateGuildPreset: function() {
                    return u
                }
            }), s("65597");
            var i = s("519705"),
                l = s("282109"),
                a = s("34676"),
                n = s("277796"),
                r = s("507313"),
                d = s("49111"),
                o = s("397336");

            function u(e, t) {
                let s = l.default.getGuildFlags(e);
                t === r.Presets.ALL_MESSAGES ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === r.Presets.MENTIONS ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === r.Presets.NOTHING && i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }