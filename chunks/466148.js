            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getEventSchedule: function() {
                    return d
                }
            });
            var a = n("627445"),
                i = n.n(a),
                s = n("446674"),
                u = n("398604"),
                l = n("397680"),
                o = n("822516");

            function r(e, t, n) {
                var a;
                let r = null !== (a = (0, s.useStateFromStores)([u.default], () => u.default.getGuildScheduledEvent(e))) && void 0 !== a ? a : n;
                i(null != r, "Event must be defined"), t = null != t ? t : (0, o.getNextRecurrenceIdInEvent)(r);
                let d = (0, l.default)(t, e);
                return c(r, d, t)
            }

            function d(e, t) {
                let n = (0, l.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let a = (0, o.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: i,
                        endDate: s
                    } = (0, o.getScheduleForRecurrenceWithException)(a, t);
                return {
                    startTime: i.toDate(),
                    endTime: null == s ? void 0 : s.toDate()
                }
            }