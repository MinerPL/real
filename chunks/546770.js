            "use strict";
            n.r(t), n.d(t, {
                updateGuildPreset: function() {
                    return d
                }
            }), n("65597");
            var s = n("519705"),
                i = n("282109"),
                a = n("34676"),
                l = n("277796"),
                u = n("507313"),
                r = n("49111"),
                o = n("397336");

            function d(e, t) {
                let n = i.default.getGuildFlags(e);
                t === u.Presets.ALL_MESSAGES ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === u.Presets.MENTIONS ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, l.withGuildUnreadFlags)(n, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === u.Presets.NOTHING && s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }