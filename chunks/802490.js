"use strict";
var e = n("434978"),
  i = n("59393"),
  u = n("366483"),
  o = n("470984"),
  c = n("823493"),
  a = n("539536"),
  s = n("681645"),
  f = n("688358"),
  l = n("391358"),
  p = n("561051"),
  v = n("571503"),
  x = n("814026"),
  h = n("140925");
t.exports = function(t, r, n, d) {
  var g = "stackTraceLimit",
    y = d ? 2 : 1,
    E = t.split("."),
    b = E[E.length - 1],
    I = e.apply(null, E);
  if (I) {
    var R = I.prototype;
    if (!h && i(R, "cause") && delete R.cause, !n) return I;
    var k = e("Error"),
      m = r(function(t, r) {
        var n = l(d ? r : t, void 0),
          e = d ? new I(t) : new I;
        return void 0 !== n && u(e, "message", n), v(e, m, e.stack, 2), this && o(R, this) && f(e, this, m), arguments.length > y && p(e, arguments[y]), e
      });
    if (m.prototype = R, "Error" !== b ? c ? c(m, k) : a(m, k, {
        name: !0
      }) : x && g in I && (s(m, I, g), s(m, I, "prepareStackTrace")), a(m, I), !h) try {
      R.name !== b && u(R, "name", b), R.constructor = m
    } catch (t) {}
    return m
  }
}