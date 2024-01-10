            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("519705"),
                s = n("282109"),
                l = n("34676"),
                i = n("277796"),
                r = n("49111");

            function o(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, i.withChannelUnreadFlags)(s.default.getChannelIdFlags(e, t), n)
                }, l.NotificationLabel.unreads(n), {
                    object: r.AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE
                })
            }