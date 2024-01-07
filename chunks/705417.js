            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var l = s("599110"),
                a = s("49111");

            function n(e, t, s, n) {
                l.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Deletion",
                    guild_id: e,
                    reason: t,
                    feedback: s,
                    skipped: n
                })
            }