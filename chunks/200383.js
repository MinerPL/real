"use strict";
var e = n("574756"),
  o = n("233116"),
  i = n("355817"),
  u = n("597018"),
  s = i("species");
t.exports = function(t) {
  var r = e(t);
  u && r && !r[s] && o(r, s, {
    configurable: !0,
    get: function() {
      return this
    }
  })
}