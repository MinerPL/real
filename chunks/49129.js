            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return i
                }
            });
            var l = n("866227"),
                u = n.n(l),
                a = n("249654"),
                d = n("745049");

            function i(e, t, n, l) {
                let i = u(),
                    r = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: r - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: r
                    };
                if (i.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            a = e.isBetween(u(r).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), r);
                        return n || a && !l ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = a.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS, r),
                    E = i.isBetween(o, c);
                if (E && null == t && !l) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }