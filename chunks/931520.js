"use strict";
var e = n("714919"),
  o = n("761300"),
  i = n("418689"),
  u = n("105460"),
  s = n("268540"),
  c = n("749766"),
  f = n("694628"),
  a = n("408356"),
  p = n("733931"),
  v = n("651696"),
  l = n("54704"),
  y = n("355817"),
  h = n("297230"),
  x = n("443431"),
  d = u.PROPER,
  g = u.CONFIGURABLE,
  b = x.IteratorPrototype,
  m = x.BUGGY_SAFARI_ITERATORS,
  S = y("iterator"),
  w = "keys",
  O = "values",
  j = "entries",
  A = function() {
    return this
  };
t.exports = function(t, r, n, u, y, x, E) {
  c(n, r, u);
  var P, T, k, F = function(t) {
      if (t === y && _) return _;
      if (!m && t && t in D) return D[t];
      switch (t) {
        case w:
        case O:
        case j:
          return function() {
            return new n(this, t)
          }
      }
      return function() {
        return new n(this)
      }
    },
    I = r + " Iterator",
    L = !1,
    D = t.prototype,
    M = D[S] || D["@@iterator"] || y && D[y],
    _ = !m && M || F(y),
    R = "Array" === r && D.entries || M;
  if (R && (P = f(R.call(new t))) !== Object.prototype && P.next && (!i && f(P) !== b && (a ? a(P, b) : !s(P[S]) && l(P, S, A)), p(P, I, !0, !0), i && (h[I] = A)), d && y === O && M && M.name !== O && (!i && g ? v(D, "name", O) : (L = !0, _ = function() {
      return o(M, this)
    })), y) {
    if (T = {
        values: F(O),
        keys: x ? _ : F(w),
        entries: F(j)
      }, E)
      for (k in T)(m || L || !(k in D)) && l(D, k, T[k]);
    else e({
      target: r,
      proto: !0,
      forced: m || L
    }, T)
  }
  return (!i || E) && D[S] !== _ && l(D, S, _, {
    name: y
  }), h[r] = _, T
}