"use strict";
var e = n("59393"),
  o = n("531232"),
  i = n("85181"),
  u = n("541368");
t.exports = function(t, r, n) {
  for (var c = o(r), s = u.f, f = i.f, a = 0; a < c.length; a++) {
    var p = c[a];
    !e(t, p) && !(n && e(n, p)) && s(t, p, f(r, p))
  }
}