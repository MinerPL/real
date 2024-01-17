"use strict";
n.r(t), n.d(t, {
  POLL_CREATION_MODAL_KEY: function() {
    return i
  },
  MIN_NUMBER_OF_ANSWERS_PER_POLL: function() {
    return r
  },
  MAX_NUMBER_OF_ANSWERS_PER_POLL: function() {
    return o
  },
  MAX_POLL_QUESTION_LENGTH: function() {
    return u
  },
  MAX_POLL_ANSWER_LENGTH: function() {
    return d
  },
  PollDurations: function() {
    return s
  },
  POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES: function() {
    return c
  }
}), n("222007");
var s, l, a = n("13030");
let i = "POLL_CREATION_MODAL_KEY",
  r = 1,
  o = 6,
  u = 300,
  d = 55;
(l = s || (s = {}))[l.ONE_HOUR = 1] = "ONE_HOUR", l[l.ONE_DAY = 24] = "ONE_DAY", l[l.THREE_DAYS = 72] = "THREE_DAYS", l[l.SEVEN_DAYS = 168] = "SEVEN_DAYS";
let c = new Set([a.ExpressionPickerViewType.GIF, a.ExpressionPickerViewType.EMOJI])