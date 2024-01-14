"use strict";
var n, a, l, r;
s.r(t), s.d(t, {
  FeedbackRating: function() {
    return n
  },
  FEEDBACK_FREEFORM_LENGTH: function() {
    return u
  },
  FeedbackType: function() {
    return a
  },
  FeedbackTypePrecedence: function() {
    return o
  }
}), s("808653"), (l = n || (n = {})).BAD = "bad", l.NEUTRAL = "neutral", l.GOOD = "good";
let u = 1024;
(r = a || (a = {}))[r.VOICE = 0] = "VOICE", r[r.STREAM = 1] = "STREAM", r[r.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", r[r.ACTIVITY = 3] = "ACTIVITY", r[r.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
let o = [2, 1, 3, 0, 4].reduce((e, t, s) => ({
  ...e,
  [t]: s
}), {})