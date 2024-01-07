            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return r
                },
                presetName: function() {
                    return d
                }
            }), n("794252");
            var i, s, a = n("506838"),
                o = n("49111"),
                l = n("133335"),
                S = n("782340");

            function r(e, t) {
                return (0, a.match)([t, e]).with([o.UserNotificationSettings.ALL_MESSAGES, l.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.UNSET], () => "mentions").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.UNSET], () => "nothing").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function d(e) {
                return (0, a.match)(e).with("all_messages", () => S.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => S.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => S.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => S.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(s = i || (i = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"