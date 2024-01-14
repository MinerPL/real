"use strict";
var e = n("522552"),
  o = n("268540"),
  i = /#|\.prototype\./,
  u = function(t, r) {
    var n = c[s(t)];
    return n === a || n !== f && (o(r) ? e(r) : !!r)
  },
  s = u.normalize = function(t) {
    return String(t).replace(i, ".").toLowerCase()
  },
  c = u.data = {},
  f = u.NATIVE = "N",
  a = u.POLYFILL = "P";
t.exports = u