"use strict";
n.r(t), n.d(t, {
  MAX_NUM_SUGGESTED_STICKERS: function() {
    return a
  },
  MAX_NUM_USER_INPUT_WORDS: function() {
    return o
  },
  DELAY_BEFORE_SUGGESTIONS_MS: function() {
    return d
  },
  SUGGESTIONS_SHOWED_INSTRUMENTATION_RATE_LIMIT_MS: function() {
    return u
  },
  REQUEST_THROTTLE_DURATION_MS: function() {
    return l
  }
});
var s, i, r = n("718517");
let a = 4,
  o = 5,
  d = 350,
  u = r.default.Millis.MINUTE,
  l = 2 * r.default.Millis.MINUTE;
(s = i || (i = {}))[s.STICKER = 0] = "STICKER"