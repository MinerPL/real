"use strict";
var e = n("434978"),
  o = n("18563"),
  i = n("174669"),
  u = n("814026"),
  f = i("species");
t.exports = function(t) {
  var r = e(t);
  u && r && !r[f] && o(r, f, {
    configurable: !0,
    get: function() {
      return this
    }
  })
}