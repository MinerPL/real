"use strict";
a.r(e), a.d(e, {
  default: function() {
    return d
  }
});
var n = a("386242"),
  r = a("86319"),
  i = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

function u(t) {
  var e = i[t];
  return 2 === t ? "'във " + e + " в' p" : "'в " + e + " в' p"
}
var o = {
    lastWeek: function(t, e, a) {
      var o = (0, n.default)(t),
        d = o.getUTCDay();
      return (0, r.default)(o, e, a) ? u(d) : function(t) {
        var e = i[t];
        switch (t) {
          case 0:
          case 3:
          case 6:
            return "'миналата " + e + " в' p";
          case 1:
          case 2:
          case 4:
          case 5:
            return "'миналия " + e + " в' p"
        }
      }(d)
    },
    yesterday: "'вчера в' p",
    today: "'днес в' p",
    tomorrow: "'утре в' p",
    nextWeek: function(t, e, a) {
      var o = (0, n.default)(t),
        d = o.getUTCDay();
      return (0, r.default)(o, e, a) ? u(d) : function(t) {
        var e = i[t];
        switch (t) {
          case 0:
          case 3:
          case 6:
            return "'следващата " + e + " в' p";
          case 1:
          case 2:
          case 4:
          case 5:
            return "'следващия " + e + " в' p"
        }
      }(d)
    },
    other: "P"
  },
  d = function(t, e, a, n) {
    var r = o[t];
    return "function" == typeof r ? r(e, a, n) : r
  }