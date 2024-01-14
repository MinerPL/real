"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
});
var a = n("86319");

function i(t, e, n) {
  var i = "eeee p";
  return (0, a.default)(t, e, n) ? i : t.getTime() > e.getTime() ? "'下个'" + i : "'上个'" + i
}
var r = {
    lastWeek: i,
    yesterday: "'昨天' p",
    today: "'今天' p",
    tomorrow: "'明天' p",
    nextWeek: i,
    other: "PP p"
  },
  o = function(t, e, n, a) {
    var i = r[t];
    return "function" == typeof i ? i(e, n, a) : i
  }