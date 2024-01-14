"use strict";
n.r(t), n.d(t, {
  getSecondsSliderLabel: function() {
    return s
  }
});
var i = n("866227"),
  a = n.n(i),
  l = n("782340");

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.Messages.FORM_LABEL_OFF,
    i = a.duration(e, "seconds");
  if (i.days() > 0) return (t ? l.default.Messages.DURATION_DAYS_SHORT : l.default.Messages.DURATION_DAYS).format({
    days: i.days()
  });
  if (i.hours() > 0) return (t ? l.default.Messages.DURATION_HOURS_SHORT : l.default.Messages.DURATION_HOURS).format({
    hours: i.hours()
  });
  if (i.minutes() > 0) return (t ? l.default.Messages.DURATION_MINUTES_SHORT : l.default.Messages.DURATION_MINUTES).format({
    minutes: i.minutes()
  });
  else if (e > 0) return (t ? l.default.Messages.DURATION_SECONDS_SHORT : l.default.Messages.DURATION_SECONDS).format({
    seconds: i.seconds()
  });
  else return t ? l.default.Messages.FORM_LABEL_OFF : n
}