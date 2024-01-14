"use strict";
t.r(i), t.d(i, {
  default: function() {
    return o
  }
});
var e = t("86319"),
  a = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];

function u(n) {
  var i = a[n];
  return 2 === n ? "'во " + i + " в' p" : "'в " + i + " в' p"
}
var r = {
    lastWeek: function(n, i, t) {
      var r = n.getUTCDay();
      return (0, e.default)(n, i, t) ? u(r) : function(n) {
        var i = a[n];
        switch (n) {
          case 0:
            return "'в прошлое " + i + " в' p";
          case 1:
          case 2:
          case 4:
            return "'в прошлый " + i + " в' p";
          case 3:
          case 5:
          case 6:
            return "'в прошлую " + i + " в' p"
        }
      }(r)
    },
    yesterday: "'вчера в' p",
    today: "'сегодня в' p",
    tomorrow: "'завтра в' p",
    nextWeek: function(n, i, t) {
      var r = n.getUTCDay();
      return (0, e.default)(n, i, t) ? u(r) : function(n) {
        var i = a[n];
        switch (n) {
          case 0:
            return "'в следующее " + i + " в' p";
          case 1:
          case 2:
          case 4:
            return "'в следующий " + i + " в' p";
          case 3:
          case 5:
          case 6:
            return "'в следующую " + i + " в' p"
        }
      }(r)
    },
    other: "P"
  },
  o = function(n, i, t, e) {
    var a = r[n];
    return "function" == typeof a ? a(i, t, e) : a
  }