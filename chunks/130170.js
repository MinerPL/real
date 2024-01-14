"use strict";
var e = n("362776"),
  o = n("761300"),
  i = n("735320"),
  u = n("245255"),
  s = n("201667"),
  c = n("756579"),
  f = n("303061"),
  a = n("322496"),
  p = n("562920"),
  v = n("829546"),
  l = TypeError,
  y = function(t, r) {
    this.stopped = t, this.result = r
  },
  h = y.prototype;
t.exports = function(t, r, n) {
  var x, d, g, b, m, S, w, O = n && n.that,
    j = !!(n && n.AS_ENTRIES),
    A = !!(n && n.IS_RECORD),
    E = !!(n && n.IS_ITERATOR),
    P = !!(n && n.INTERRUPTED),
    T = e(r, O),
    k = function(t) {
      return x && v(x, "normal", t), new y(!0, t)
    },
    F = function(t) {
      return j ? (i(t), P ? T(t[0], t[1], k) : T(t[0], t[1])) : P ? T(t, k) : T(t)
    };
  if (A) x = t.iterator;
  else if (E) x = t;
  else {
    if (!(d = p(t))) throw new l(u(t) + " is not iterable");
    if (s(d)) {
      for (g = 0, b = c(t); b > g; g++)
        if ((m = F(t[g])) && f(h, m)) return m;
      return new y(!1)
    }
    x = a(t, d)
  }
  for (S = A ? t.next : x.next; !(w = o(S, x)).done;) {
    try {
      m = F(w.value)
    } catch (t) {
      v(x, "throw", t)
    }
    if ("object" == typeof m && m && f(h, m)) return m
  }
  return new y(!1)
}