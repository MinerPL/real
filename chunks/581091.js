"use strict";
n.r(t), n.d(t, {
  getAbbreviatedFormatter: function() {
    return l
  },
  getFullFormatter: function() {
    return f
  },
  default: function() {
    return _
  }
});
var s = n("866227"),
  i = n.n(s),
  r = n("782340");
let a = 3600,
  o = 24 * a,
  d = 30 * o,
  u = 12 * d,
  l = () => ({
    minutes: r.default.Messages.DURATION_MINUTES_SHORT,
    hours: r.default.Messages.DURATION_HOURS_SHORT,
    days: r.default.Messages.DURATION_DAYS_SHORT,
    months: r.default.Messages.DURATION_MONTHS_SHORT,
    years: r.default.Messages.DURATION_YEARS_SHORT
  }),
  f = () => ({
    minutes: r.default.Messages.DURATION_MINUTES_AGO,
    hours: r.default.Messages.DURATION_HOURS_AGO,
    days: r.default.Messages.DURATION_DAYS_AGO,
    months: r.default.Messages.DURATION_MONTHS_AGO,
    years: r.default.Messages.DURATION_YEARS_AGO
  });

function _(e) {
  let {
    since: t,
    getFormatter: n
  } = e, s = i().diff(i(t), "s"), r = n(), l = i(t).format("LL");
  return l = s < 60 ? r.minutes.format({
    minutes: 1
  }) : s < a ? r.minutes.format({
    minutes: Math.floor(s / 60)
  }) : s < o ? r.hours.format({
    hours: Math.floor(s / a)
  }) : s < d ? r.days.format({
    days: Math.floor(s / o)
  }) : s < u ? r.months.format({
    months: Math.floor(s / d)
  }) : r.years.format({
    years: Math.floor(s / u)
  })
}