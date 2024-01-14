"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("782340");

function n(e) {
  return e > 0 && e % 7 == 0 ? a.default.Messages.DURATION_WEEKS.format({
    weeks: e / 7
  }) : a.default.Messages.DURATION_DAYS.format({
    days: e
  })
}