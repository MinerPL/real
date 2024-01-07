            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144");

            function a(e, t, n, a) {
                i.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
                    channelId: e,
                    applicationId: t,
                    intent: a,
                    analyticsLocations: n
                })
            }