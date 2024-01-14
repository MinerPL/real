"use strict";
var e = n("443431").IteratorPrototype,
  o = n("321956"),
  i = n("633050"),
  u = n("733931"),
  s = n("297230"),
  c = function() {
    return this
  };
t.exports = function(t, r, n, f) {
  var a = r + " Iterator";
  return t.prototype = o(e, {
    next: i(+!f, n)
  }), u(t, a, !1, !0), s[a] = c, t
}