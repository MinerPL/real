"use strict";
var e = n("886639"),
  o = n("868822"),
  i = n("338286"),
  u = n("116180"),
  f = n("308274"),
  c = n("55082"),
  a = n("579697"),
  s = n("763589"),
  y = n("891708"),
  h = n("188523").aTypedArrayConstructor,
  p = n("590035");
t.exports = function(t) {
  var r, n, v, d, g, l, A, w, x = i(this),
    b = u(t),
    T = arguments.length,
    I = T > 1 ? arguments[1] : void 0,
    E = void 0 !== I,
    R = a(b);
  if (R && !s(R))
    for (w = (A = c(b, R)).next, b = []; !(l = o(w, A)).done;) b.push(l.value);
  for (E && T > 2 && (I = e(I, arguments[2])), n = f(b), d = y(v = new(h(x))(n)), r = 0; n > r; r++) g = E ? I(b[r], r) : b[r], v[r] = d ? p(g) : +g;
  return v
}