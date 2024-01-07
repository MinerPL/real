            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("599110"),
                a = s("49111");

            function l(e, t, s, l) {
                n.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Leave",
                    guild_id: e,
                    reason: t,
                    feedback: s,
                    skipped: l
                })
            }