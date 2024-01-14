"use strict";
var r = n("886639"),
  o = n("868822"),
  a = n("418855"),
  i = n("649675"),
  s = n("763589"),
  c = n("308274"),
  l = n("470984"),
  u = n("55082"),
  d = n("579697"),
  p = n("161323"),
  f = TypeError,
  m = function(e, t) {
    this.stopped = e, this.result = t
  },
  h = m.prototype;
e.exports = function(e, t, n) {
  var g, v, y, b, x, S, w, D = n && n.that,
    C = !!(n && n.AS_ENTRIES),
    P = !!(n && n.IS_RECORD),
    k = !!(n && n.IS_ITERATOR),
    E = !!(n && n.INTERRUPTED),
    T = r(t, D),
    R = function(e) {
      return g && p(g, "normal", e), new m(!0, e)
    },
    M = function(e) {
      return C ? (a(e), E ? T(e[0], e[1], R) : T(e[0], e[1])) : E ? T(e, R) : T(e)
    };
  if (P) g = e.iterator;
  else if (k) g = e;
  else {
    if (!(v = d(e))) throw f(i(e) + " is not iterable");
    if (s(v)) {
      for (y = 0, b = c(e); b > y; y++)
        if ((x = M(e[y])) && l(h, x)) return x;
      return new m(!1)
    }
    g = u(e, v)
  }
  for (S = P ? e.next : g.next; !(w = o(S, g)).done;) {
    try {
      x = M(w.value)
    } catch (e) {
      p(g, "throw", e)
    }
    if ("object" == typeof x && x && l(h, x)) return x
  }
  return new m(!1)
}