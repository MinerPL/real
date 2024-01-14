"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var i = ["vas\xe1rnap", "h\xe9tfőn", "kedden", "szerd\xe1n", "cs\xfct\xf6rt\xf6k\xf6n", "p\xe9nteken", "szombaton"];

function n(e) {
  return function(t) {
    var a = i[t.getUTCDay()];
    return "".concat(e ? "" : "'m\xfalt' ", "'").concat(a, "' p'-kor'")
  }
}
var r = {
    lastWeek: n(!1),
    yesterday: "'tegnap' p'-kor'",
    today: "'ma' p'-kor'",
    tomorrow: "'holnap' p'-kor'",
    nextWeek: n(!0),
    other: "P"
  },
  d = function(e, t) {
    var a = r[e];
    return "function" == typeof a ? a(t) : a
  }