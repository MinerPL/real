"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("472092"),
  o = Object.prototype.hasOwnProperty,
  a = function(e, t, r, a, i, u) {
    var l = 1 & r,
      c = (0, n.default)(e),
      s = c.length;
    if (s != (0, n.default)(t).length && !l) return !1;
    for (var f = s; f--;) {
      var d = c[f];
      if (!(l ? d in t : o.call(t, d))) return !1
    }
    var p = u.get(e),
      h = u.get(t);
    if (p && h) return p == t && h == e;
    var b = !0;
    u.set(e, t), u.set(t, e);
    for (var v = l; ++f < s;) {
      var g = e[d = c[f]],
        x = t[d];
      if (a) var y = l ? a(x, g, d, t, e, u) : a(g, x, d, e, t, u);
      if (!(void 0 === y ? g === x || i(g, x, r, a, u) : y)) {
        b = !1;
        break
      }
      v || (v = "constructor" == d)
    }
    if (b && !v) {
      var m = e.constructor,
        w = t.constructor;
      m != w && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w) && (b = !1)
    }
    return u.delete(e), u.delete(t), b
  }