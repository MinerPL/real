"use strict";
var n, r, a = i("868822"),
  s = i("64980"),
  o = i("998270"),
  l = i("383252"),
  u = i("854745"),
  c = i("17758"),
  h = i("148066"),
  f = i("515011").get,
  d = i("297403"),
  m = i("34810"),
  v = c("native-string-replace", String.prototype.replace),
  p = RegExp.prototype.exec,
  g = p,
  x = s("".charAt),
  I = s("".indexOf),
  w = s("".replace),
  y = s("".slice);
var b = (r = /b*/g, a(p, n = /a/, "a"), a(p, r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
  A = u.BROKEN_CARET,
  F = void 0 !== /()??/.exec("")[1];
(b || F || A || d || m) && (g = function(t) {
  var e, i, n, r, s, u, c, d = f(this),
    m = o(t),
    k = d.raw;
  if (k) return k.lastIndex = this.lastIndex, e = a(g, k, m), this.lastIndex = k.lastIndex, e;
  var E = d.groups,
    C = A && this.sticky,
    _ = a(l, this),
    T = this.source,
    q = 0,
    R = m;
  if (C && (-1 === I(_ = w(_, "y", ""), "g") && (_ += "g"), R = y(m, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== x(m, this.lastIndex - 1)) && (T = "(?: " + T + ")", R = " " + R, q++), i = RegExp("^(?:" + T + ")", _)), F && (i = RegExp("^" + T + "$(?!\\s)", _)), b && (n = this.lastIndex), r = a(p, C ? i : this, R), C ? r ? (r.input = y(r.input, q), r[0] = y(r[0], q), r.index = this.lastIndex, this.lastIndex += r[0].length) : this.lastIndex = 0 : b && r && (this.lastIndex = this.global ? r.index + r[0].length : n), F && r && r.length > 1 && a(v, r[0], i, function() {
      for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (r[s] = void 0)
    }), r && E)
    for (s = 0, r.groups = u = h(null); s < E.length; s++) u[(c = E[s])[0]] = r[c[1]];
  return r
}), t.exports = g