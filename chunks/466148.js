"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  getEventSchedule: function() {
    return s
  }
});
var l = n("627445"),
  u = n.n(l),
  r = n("446674"),
  i = n("398604"),
  a = n("397680"),
  d = n("822516");

function o(e, t, n) {
  var l;
  let o = null !== (l = (0, r.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
  u(null != o, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(o);
  let s = (0, a.default)(t, e);
  return c(o, s, t)
}

function s(e, t) {
  let n = (0, a.getEventException)(t, e.id);
  return c(e, n, t)
}

function c(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let l = (0, d.getBaseScheduleForRecurrence)(n, e),
    {
      startDate: u,
      endDate: r
    } = (0, d.getScheduleForRecurrenceWithException)(l, t);
  return {
    startTime: u.toDate(),
    endTime: null == r ? void 0 : r.toDate()
  }
}