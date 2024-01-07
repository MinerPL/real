            "use strict";
            n.r(t), n.d(t, {
                makeAnalyticsTrackers: function() {
                    return d
                },
                getOverlayKeybind: function() {
                    return u
                }
            });
            var i = n("539405"),
                a = n("227602"),
                l = n("901165"),
                s = n("13798"),
                o = n("49111"),
                r = n("6791");

            function d(e, t) {
                return {
                    trackView() {
                        i.default.track(o.AnalyticEvents.NOTIFICATION_VIEWED, t), i.default.notificationEvent(e, r.OverlayNotificationAction.Viewed)
                    },
                    trackClick(n) {
                        let a = l.default.isInstanceUILocked() ? o.AnalyticsLocations.LOCKED_OVERLAY : o.AnalyticsLocations.UNLOCKED_OVERLAY;
                        i.default.track(o.AnalyticEvents.NOTIFICATION_CLICKED, {
                            ...t,
                            location: a,
                            action_type: n
                        }), i.default.notificationEvent(e, r.OverlayNotificationAction.Clicked)
                    }
                }
            }

            function u() {
                let e = a.default.getOverlayKeybind();
                return null != e ? (0, s.toString)(e.shortcut, !0).split(" + ") : ["???"]
            }