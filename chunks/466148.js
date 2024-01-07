            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return d
                }
            });
            var l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                i = n("398604"),
                r = n("397680"),
                u = n("822516");

            function o(e, t, n) {
                var l;
                let o = null !== (l = (0, s.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                a(null != o, "Event must be defined"), t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(o);
                let d = (0, r.default)(t, e);
                return c(o, d, t)
            }

            function d(e, t) {
                let n = (0, r.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, u.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: a,
                        endDate: s
                    } = (0, u.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: a.toDate(),
                    endTime: null == s ? void 0 : s.toDate()
                }
            }