            "use strict";
            s.r(t), s.d(t, {
                getSecondsSliderLabel: function() {
                    return i
                }
            });
            var l = s("866227"),
                a = s.n(l),
                n = s("782340");

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default.Messages.FORM_LABEL_OFF,
                    l = a.duration(e, "seconds");
                if (l.days() > 0) return (t ? n.default.Messages.DURATION_DAYS_SHORT : n.default.Messages.DURATION_DAYS).format({
                    days: l.days()
                });
                if (l.hours() > 0) return (t ? n.default.Messages.DURATION_HOURS_SHORT : n.default.Messages.DURATION_HOURS).format({
                    hours: l.hours()
                });
                if (l.minutes() > 0) return (t ? n.default.Messages.DURATION_MINUTES_SHORT : n.default.Messages.DURATION_MINUTES).format({
                    minutes: l.minutes()
                });
                else if (e > 0) return (t ? n.default.Messages.DURATION_SECONDS_SHORT : n.default.Messages.DURATION_SECONDS).format({
                    seconds: l.seconds()
                });
                else return t ? n.default.Messages.FORM_LABEL_OFF : s
            }