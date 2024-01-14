"use strict";
a.r(e), a.d(e, {
  default: function() {
    return n
  }
});
var i = {
    lastWeek: function(t) {
      if (6 === t.getUTCDay()) return "'το προηγούμενο' eeee 'στις' p";
      return "'την προηγούμενη' eeee 'στις' p"
    },
    yesterday: "'χθες στις' p",
    today: "'σήμερα στις' p",
    tomorrow: "'αύριο στις' p",
    nextWeek: "eeee 'στις' p",
    other: "P"
  },
  n = function(t, e) {
    var a = i[t];
    return "function" == typeof a ? a(e) : a
  }