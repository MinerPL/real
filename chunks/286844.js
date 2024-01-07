            "use strict";
            s.r(t), s.d(t, {
                getPushNotificationSelectOptions: function() {
                    return n
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var i = s("49111"),
                l = s("133335"),
                a = s("782340");
            let n = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: i.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: i.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: i.UserNotificationSettings.NO_MESSAGES
                }],
                r = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: l.UnreadSetting.ALL_MESSAGES
                }, {
                    value: l.UnreadSetting.ONLY_MENTIONS,
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled: (null == e ? void 0 : e.notificationSetting) === i.UserNotificationSettings.ALL_MESSAGES
                }]