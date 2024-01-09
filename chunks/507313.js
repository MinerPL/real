            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return d
                }
            }), n("794252");
            var i, a, s = n("506838"),
                l = n("49111"),
                u = n("133335"),
                r = n("782340");

            function o(e, t) {
                return (0, s.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function d(e) {
                return (0, s.match)(e).with("all_messages", () => r.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => r.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => r.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => r.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"