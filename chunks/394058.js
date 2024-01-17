"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("174727"),
  l = s("915639"),
  i = s("782340");

function r(e) {
  return e.toLocaleString(l.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
var u = function(e) {
  let {
    endDate: t
  } = e, s = (0, n.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: s.days > 0 ? i.default.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : i.default.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: r(s.hours),
      minutes: r(s.minutes),
      seconds: r(s.seconds)
    })
  })
}