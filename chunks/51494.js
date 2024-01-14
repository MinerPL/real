"use strict";
var r = n("289275"),
  a = n("389316"),
  o = n("268540"),
  i = n("808655"),
  l = n("494080"),
  u = n("355817"),
  s = n("620232"),
  c = n("49601"),
  d = n("418689"),
  f = n("370080"),
  p = a && a.prototype,
  h = u("species"),
  m = !1,
  y = o(r.PromiseRejectionEvent),
  v = i("Promise", function() {
    var e = l(a),
      t = e !== String(a);
    if (!t && 66 === f || d && !(p.catch && p.finally)) return !0;
    if (!f || f < 51 || !/native code/.test(e)) {
      var n = new a(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((n.constructor = {})[h] = r, !(m = n.then(function() {}) instanceof r)) return !0
    }
    return !t && (s || c) && !y
  });
e.exports = {
  CONSTRUCTOR: v,
  REJECTION_EVENT: y,
  SUBCLASSING: m
}