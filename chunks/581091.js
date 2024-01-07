            "use strict";
            n.r(t), n.d(t, {
                getAbbreviatedFormatter: function() {
                    return d
                },
                getFullFormatter: function() {
                    return c
                },
                default: function() {
                    return _
                }
            });
            var i = n("866227"),
                a = n.n(i),
                l = n("782340");
            let s = 3600,
                r = 24 * s,
                u = 30 * r,
                o = 12 * u,
                d = () => ({
                    minutes: l.default.Messages.DURATION_MINUTES_SHORT,
                    hours: l.default.Messages.DURATION_HOURS_SHORT,
                    days: l.default.Messages.DURATION_DAYS_SHORT,
                    months: l.default.Messages.DURATION_MONTHS_SHORT,
                    years: l.default.Messages.DURATION_YEARS_SHORT
                }),
                c = () => ({
                    minutes: l.default.Messages.DURATION_MINUTES_AGO,
                    hours: l.default.Messages.DURATION_HOURS_AGO,
                    days: l.default.Messages.DURATION_DAYS_AGO,
                    months: l.default.Messages.DURATION_MONTHS_AGO,
                    years: l.default.Messages.DURATION_YEARS_AGO
                });

            function _(e) {
                let {
                    since: t,
                    getFormatter: n
                } = e, i = a().diff(a(t), "s"), l = n(), d = a(t).format("LL");
                return d = i < 60 ? l.minutes.format({
                    minutes: 1
                }) : i < s ? l.minutes.format({
                    minutes: Math.floor(i / 60)
                }) : i < r ? l.hours.format({
                    hours: Math.floor(i / s)
                }) : i < u ? l.days.format({
                    days: Math.floor(i / r)
                }) : i < o ? l.months.format({
                    months: Math.floor(i / u)
                }) : l.years.format({
                    years: Math.floor(i / o)
                })
            }