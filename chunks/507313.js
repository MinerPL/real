            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return d
                },
                presetName: function() {
                    return r
                }
            }), n("794252");
            var i, s, a = n("506838"),
                l = n("49111"),
                u = n("133335"),
                o = n("782340");

            function d(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function r(e) {
                return (0, a.match)(e).with("all_messages", () => o.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => o.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => o.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => o.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(s = i || (i = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"