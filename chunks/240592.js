"use strict";
var e = n("597018"),
  o = n("522552"),
  i = n("169163");
t.exports = !e && !o(function() {
  return 7 !== Object.defineProperty(i("div"), "a", {
    get: function() {
      return 7
    }
  }).a
})