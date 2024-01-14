"use strict";
n.r(t), n.d(t, {
  MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
    return c
  },
  MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
    return d
  },
  MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
    return f
  },
  getInitialEventStartDate: function() {
    return S
  },
  getEventTimeData: function() {
    return m
  },
  getBaseScheduleForRecurrence: function() {
    return T
  },
  getScheduleForRecurrenceWithException: function() {
    return p
  },
  getScheduleFromEventData: function() {
    return I
  },
  areDatesIdentical: function() {
    return x
  },
  areSchedulesIdentical: function() {
    return L
  },
  getRRule: function() {
    return A
  },
  generateNextRecurrences: function() {
    return y
  },
  getNextRecurrenceIdInEvent: function() {
    return D
  },
  isValidRecurrence: function() {
    return M
  },
  recurrenceOptionToRecurrenceRule: function() {
    return O
  },
  recurrenceRuleToOption: function() {
    return w
  }
}), n("222007"), n("424973");
var l = n("917351"),
  a = n("866227"),
  r = n.n(a),
  s = n("614137"),
  i = n("249654"),
  u = n("718517"),
  o = n("757767");
n("745049");
let c = 365,
  d = c + 1,
  f = 4,
  E = [s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday],
  h = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday],
  g = [s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
  _ = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
  S = () => {
    let e = r().add(1, "hour"),
      t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
  },
  v = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
  R = (e, t) => {
    let n = e.diff(t, "days");
    return n > 1 ? v(e, t) : e.calendar(t)
  };

function m(e, t, n) {
  null == n && (n = r());
  let l = r(e),
    a = null != t && "" !== t ? r(t) : void 0,
    s = null != t && l.isSame(a, "day");
  return {
    startDateTimeString: R(l, n),
    endDateTimeString: null != a ? s ? a.format("LT") : v(a, n) : void 0,
    currentOrPastEvent: l <= n,
    upcomingEvent: l <= r().add(1, "hour"),
    withinStartWindow: l <= r().add(15, "minute"),
    diffMinutes: l.diff(n, "minutes")
  }
}

function C(e) {
  return new s.Weekday(_[e])
}

function N(e, t) {
  let n;
  return null != e && (n = {
    startDate: r(e),
    endDate: void 0
  }, null != t && (n.endDate = r(t))), n
}

function T(e, t) {
  let n = function(e) {
      return N(e.scheduled_start_time, e.scheduled_end_time)
    }(t),
    l = r(i.default.extractTimestamp(e)),
    a = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
  return {
    startDate: l,
    endDate: a
  }
}

function p(e, t) {
  var n;
  if (null == t) return e;
  let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
    endDate: null != l ? r(l) : void 0
  }
}

function I(e) {
  return N(e.scheduledStartTime, e.scheduledEndTime)
}

function x(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function L(e, t) {
  return null == e || null == t ? null == e && null == t : x(e.startDate, t.startDate) && x(e.endDate, t.endDate)
}

function A(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    l = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new(0, s.Weekday)(e.day).nth(e.n)),
    a = new Date(e.start);
  return a.setMilliseconds(0), new s.RRule({
    dtstart: a,
    until: null != e.end ? new Date(e.end) : null,
    freq: e.frequency,
    interval: e.interval,
    byweekday: null != n ? n : l,
    bymonth: null != e.byMonth ? [...e.byMonth] : null,
    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
    count: e.count
  })
}

function y(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = [],
    r = n;
  r.setMilliseconds(0);
  let s = new Date;
  s.setFullYear(s.getFullYear() + f);
  for (let n = 0; n < e && r < s; n++) {
    let e = t.after(r, 0 === n && !l);
    if (null == e) break;
    r = e, a.push(e)
  }
  return a
}

function D(e) {
  var t;
  if (null == e) return null;
  let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
  return null != n ? i.default.fromTimestamp(Math.floor(n.getTime() / u.default.Millis.SECOND) * u.default.Millis.SECOND) : null
}

function M(e, t) {
  if (null == t || null == e) return !1;
  let n = new Date(e.start),
    l = i.default.extractTimestamp(t),
    a = new Date(l);
  if (n.getUTCHours() !== a.getUTCHours() || n.getUTCMinutes() !== a.getUTCMinutes() || n.getUTCSeconds() !== a.getUTCSeconds()) return !1;
  switch (e.frequency) {
    case s.RRule.WEEKLY:
      return n.getUTCDay() === a.getUTCDay();
    case s.RRule.YEARLY:
      return n.getUTCDate() === a.getUTCDate();
    default:
      return !0
  }
}

function j(e) {
  let t = C(e.toDate().getDay()),
    n = C(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? g : n.weekday - t.weekday < 0 ? h : E
}

function O(e, t) {
  let n = function(e, t) {
    let n = j(t),
      l = C(t.toDate().getDay()),
      a = Math.ceil(t.toDate().getDate() / 7),
      r = t.toDate();
    switch (r.setMilliseconds(0), e) {
      case o.RecurrenceOptions.NONE:
        return null;
      case o.RecurrenceOptions.WEEKLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.WEEKLY
        });
      case o.RecurrenceOptions.BIWEEKLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.WEEKLY,
          interval: 2
        });
      case o.RecurrenceOptions.MONTHLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.MONTHLY,
          byweekday: [l.nth(a)]
        });
      case o.RecurrenceOptions.YEARLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.YEARLY
        });
      case o.RecurrenceOptions.WEEKDAY_ONLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.DAILY,
          byweekday: n
        })
    }
  }(e, t);
  if (null == n) return null;
  let {
    dtstart: l,
    until: a,
    freq: r,
    interval: i,
    byweekday: u,
    bynweekday: c,
    bymonth: d,
    bymonthday: f,
    byyearday: E,
    count: h
  } = n.options, g = null == c ? void 0 : c.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: l.toISOString(),
    end: null == a ? void 0 : a.toISOString(),
    frequency: r,
    interval: i,
    byWeekday: u,
    byNWeekday: g,
    byMonth: d,
    byMonthDay: f,
    byYearDay: E,
    count: h
  }
}

function w(e, t) {
  if (null == t) return o.RecurrenceOptions.NONE;
  let n = A(t);
  switch (n.options.freq) {
    case s.RRule.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return o.RecurrenceOptions.NONE;
      return 1 === n.options.interval ? o.RecurrenceOptions.WEEKLY : o.RecurrenceOptions.BIWEEKLY;
    case s.RRule.YEARLY:
      return o.RecurrenceOptions.YEARLY;
    case s.RRule.MONTHLY:
      return o.RecurrenceOptions.MONTHLY;
    case s.RRule.DAILY:
      if (!(0, l.isEqual)(n.options.byweekday, j(e))) return o.RecurrenceOptions.NONE;
      return o.RecurrenceOptions.WEEKDAY_ONLY;
    default:
      return o.RecurrenceOptions.NONE
  }
}