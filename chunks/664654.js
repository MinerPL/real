"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("599110"),
  s = a("49111");

function l(e) {
  let {
    rating: t = null
  } = e;
  n.default.track(s.AnalyticEvents.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
    rating: t
  })
}