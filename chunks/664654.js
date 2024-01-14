"use strict";
t.r(a), t.d(a, {
  default: function() {
    return l
  }
});
var n = t("599110"),
  s = t("49111");

function l(e) {
  let {
    rating: a = null
  } = e;
  n.default.track(s.AnalyticEvents.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
    rating: a
  })
}