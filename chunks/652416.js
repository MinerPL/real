            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("519705"),
                a = n("282109"),
                l = n("34676"),
                i = n("277796"),
                r = n("49111");

            function o(e, t, n) {
                s.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, i.withChannelUnreadFlags)(a.default.getChannelIdFlags(e, t), n)
                }, l.NotificationLabel.unreads(n), {
                    object: r.AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE
                })
            }