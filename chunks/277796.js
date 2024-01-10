            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return l
                },
                resetChannelUnreadFlags: function() {
                    return i
                },
                withChannelUnreadFlags: function() {
                    return r
                }
            });
            var s = n("568734"),
                a = n("397336");

            function l(e, t) {
                var n;
                return s.addFlag((n = e, s.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let i = e => s.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function r(e, t) {
                return s.addFlag(i(e), t)
            }