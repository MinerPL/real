            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return s
                },
                presetFromSettings: function() {
                    return u
                },
                presetName: function() {
                    return l
                }
            }), n("794252");
            var s, i, r = n("506838"),
                a = n("49111"),
                o = n("133335"),
                d = n("782340");

            function u(e, t) {
                return (0, r.match)([t, e]).with([a.UserNotificationSettings.ALL_MESSAGES, o.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([a.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.UNSET], () => "mentions").with([a.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([a.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.UNSET], () => "nothing").with([a.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function l(e) {
                return (0, r.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(i = s || (s = {})).ALL_MESSAGES = "all_messages", i.MENTIONS = "mentions", i.NOTHING = "nothing", i.CUSTOM = "custom"