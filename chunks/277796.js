            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return s
                },
                resetChannelUnreadFlags: function() {
                    return u
                },
                withChannelUnreadFlags: function() {
                    return l
                }
            });
            var a = n("568734"),
                i = n("397336");

            function s(e, t) {
                var n;
                return a.addFlag((n = e, a.removeFlags(n, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let u = e => a.removeFlags(e, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function l(e, t) {
                return a.addFlag(u(e), t)
            }