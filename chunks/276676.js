            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                s = n("249654"),
                u = n("446674"),
                i = n("718517"),
                a = n("933326"),
                o = n("398604"),
                r = n("822516");

            function d(e, t, n) {
                let d = (0, u.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(e)),
                    [c, f] = l.useState(null != n && null != d ? (0, r.generateNextRecurrences)(4, (0, r.getRRule)(n), new Date(d.scheduled_start_time)) : []);
                l.useEffect(() => {
                    if (null == t) return;
                    let n = c.map(e => s.default.fromTimestamp(Math.floor(e.getTime() / i.default.Millis.SECOND) * i.default.Millis.SECOND));
                    a.default.getGuildEventUserCounts(t, e, n)
                }, [e, t, c]);
                let E = l.useMemo(() => {
                    if (null == n || 0 === c.length || (null == d ? void 0 : d.scheduled_start_time) == null) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + r.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = c[c.length - 1],
                        l = (0, r.getRRule)(n),
                        s = l.after(t);
                    return null != s && s <= e
                }, [n, c, null == d ? void 0 : d.scheduled_start_time]);
                return {
                    recurrenceStartTimes: c,
                    canViewMoreRecurrences: E,
                    updateRecurrenceStartTimes: () => {
                        if (null == n || null == d) return;
                        let e = (0, r.getRRule)(n),
                            t = c[c.length - 1];
                        f([...c, ...(0, r.generateNextRecurrences)(4, e, t, !0)])
                    }
                }
            }