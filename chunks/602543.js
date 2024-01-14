"use strict";
n.r(i), n.d(i, {
  default: function() {
    return l
  }
});
var e = n("320982"),
  a = n("86319"),
  u = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"];

function r(t) {
  return "'у " + u[t] + " о' p"
}
var o = {
    lastWeek: function(t, i, n) {
      var o = (0, e.toDate)(t),
        l = o.getUTCDay();
      return (0, a.default)(o, i, n) ? r(l) : function(t) {
        var i = u[t];
        switch (t) {
          case 0:
          case 3:
          case 5:
          case 6:
            return "'у минулу " + i + " о' p";
          case 1:
          case 2:
          case 4:
            return "'у минулий " + i + " о' p"
        }
      }(l)
    },
    yesterday: "'вчора о' p",
    today: "'сьогодні о' p",
    tomorrow: "'завтра о' p",
    nextWeek: function(t, i, n) {
      var o = (0, e.toDate)(t),
        l = o.getUTCDay();
      return (0, a.default)(o, i, n) ? r(l) : function(t) {
        var i = u[t];
        switch (t) {
          case 0:
          case 3:
          case 5:
          case 6:
            return "'у наступну " + i + " о' p";
          case 1:
          case 2:
          case 4:
            return "'у наступний " + i + " о' p"
        }
      }(l)
    },
    other: "P"
  },
  l = function(t, i, n, e) {
    var a = o[t];
    return "function" == typeof a ? a(i, n, e) : a
  }