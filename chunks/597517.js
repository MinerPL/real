            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                r = n("49111");

            function s(e) {
                a.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }