"use strict";
var n = r("468261").IteratorPrototype,
  o = r("148066"),
  i = r("16447"),
  c = r("89157"),
  u = r("381250"),
  s = function() {
    return this
  };
t.exports = function(t, e, r, a) {
  var f = e + " Iterator";
  return t.prototype = o(n, {
    next: i(+!a, r)
  }), c(t, f, !1, !0), u[f] = s, t
}