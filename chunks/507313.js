            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return d
                },
                presetName: function() {
                    return u
                }
            }), n("794252");
            var i, a, s = n("506838"),
                r = n("49111"),
                o = n("133335"),
                l = n("782340");

            function d(e, t) {
                return (0, s.match)([t, e]).with([r.UserNotificationSettings.ALL_MESSAGES, o.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([r.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.UNSET], () => "mentions").with([r.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([r.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.UNSET], () => "nothing").with([r.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, s.match)(e).with("all_messages", () => l.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => l.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => l.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => l.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"