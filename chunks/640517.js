"use strict";
n.r(t), n.d(t, {
  isProtectedDayOfYearToken: function() {
    return o
  },
  isProtectedWeekYearToken: function() {
    return i
  },
  throwProtectedError: function() {
    return s
  }
}), n("70102");
var r = ["D", "DD"],
  a = ["YY", "YYYY"];

function o(e) {
  return -1 !== r.indexOf(e)
}

function i(e) {
  return -1 !== a.indexOf(e)
}

function s(e, t, n) {
  if ("YYYY" === e) throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if ("YY" === e) throw RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if ("D" === e) throw RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  else if ("DD" === e) throw RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}