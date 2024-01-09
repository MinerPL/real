            "use strict";
            i.r(t), i.d(t, {
                getPushNotificationSelectOptions: function() {
                    return l
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var n = i("49111"),
                s = i("133335"),
                a = i("782340");
            let l = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: n.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: n.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: n.UserNotificationSettings.NO_MESSAGES
                }],
                r = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: s.UnreadSetting.ALL_MESSAGES
                }, {
                    value: s.UnreadSetting.ONLY_MENTIONS,
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled: (null == e ? void 0 : e.notificationSetting) === n.UserNotificationSettings.ALL_MESSAGES
                }]