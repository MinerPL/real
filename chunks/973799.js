            "use strict";
            n.r(t), n.d(t, {
                formatExpirationLabel: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var a = n("866227"),
                s = n.n(a),
                l = n("782340");

            function i(e) {
                let t = s();
                if (e <= t) return;
                let n = e.diff(t, "days");
                if (n > 1) return l.default.Messages.POLL_EXPIRY_DAYS_REMAINING.format({
                    days: n
                });
                let a = e.diff(t, "hours");
                if (a > 1) return l.default.Messages.POLL_EXPIRY_HOURS_REMAINING.format({
                    hours: a
                });
                let i = e.diff(t, "minutes");
                return l.default.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({
                    minutes: i
                })
            }

            function r(e) {
                if (null != e) return i(e)
            }