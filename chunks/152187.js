"use strict";
var e = n("979095"),
  o = n("865275"),
  i = n("297230"),
  u = n("200258"),
  s = n("958260").f,
  c = n("931520"),
  f = n("10241"),
  a = n("418689"),
  p = n("597018"),
  v = "Array Iterator",
  l = u.set,
  y = u.getterFor(v);
t.exports = c(Array, "Array", function(t, r) {
  l(this, {
    type: v,
    target: e(t),
    index: 0,
    kind: r
  })
}, function() {
  var t = y(this),
    r = t.target,
    n = t.index++;
  if (!r || n >= r.length) return t.target = void 0, f(void 0, !0);
  switch (t.kind) {
    case "keys":
      return f(n, !1);
    case "values":
      return f(r[n], !1)
  }
  return f([n, r[n]], !1)
}, "values");
var h = i.Arguments = i.Array;
if (o("keys"), o("values"), o("entries"), !a && p && "values" !== h.name) try {
  s(h, "name", {
    value: "values"
  })
} catch (t) {}