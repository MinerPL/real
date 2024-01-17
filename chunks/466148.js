"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  getEventSchedule: function() {
    return r
  }
});
var a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  u = n("398604"),
  s = n("397680"),
  d = n("822516");

function o(e, t, n) {
  var a;
  let o = null !== (a = (0, l.useStateFromStores)([u.default], () => u.default.getGuildScheduledEvent(e))) && void 0 !== a ? a : n;
  i(null != o, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(o);
  let r = (0, s.default)(t, e);
  return c(o, r, t)
}

function r(e, t) {
  let n = (0, s.getEventException)(t, e.id);
  return c(e, n, t)
}

function c(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let a = (0, d.getBaseScheduleForRecurrence)(n, e),
    {
      startDate: i,
      endDate: l
    } = (0, d.getScheduleForRecurrenceWithException)(a, t);
  return {
    startTime: i.toDate(),
    endTime: null == l ? void 0 : l.toDate()
  }
}